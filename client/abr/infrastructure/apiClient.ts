import Auth from '@aws-amplify/auth';
import API, { graphqlOperation } from '@aws-amplify/api';
import { awsmobile } from '../../plugins/amplify';
import { GraphQLResult } from '@aws-amplify/api/lib/types';
import { S3Object, ErrorCode } from 'sup_abr/dist/entity';
import axios from 'axios';
import { SupError } from 'sup_abr';
Auth.configure(awsmobile.Auth);
API.configure(awsmobile);
/**
 * 型付きのresponseを返す
 * QueryとMutationに用いる
 * @param query
 * @param variables
 */
export async function callApi<U, T>(query: any, variables: T): Promise<U> {
    try {
        const response = (await API.graphql(graphqlOperation(query, variables))) as GraphQLResult<U>;
        return response.data!;
    } catch (err) {
        const errorCode = err.errors[0].message as ErrorCode;
        throw new SupError(errorCode);
    }
}

/**
 * @todo このままだと、不要なプロパティ含まれる恐れがある
 * @param records レコード
 */
export async function getObjects<T>(records: Array<{ mast: S3Object }>): Promise<T[]> {
    return await Promise.all(
        records.map(async (item) => {
            const reduced: { [key: string]: any } = {};
            Object.keys(item).forEach((key) => {
                if ((item as any)[key] || (item as any)[key] === 0 || (item as any)[key] === false) {
                    reduced[key] = (item as any)[key];
                }
            });

            const res = {
                ...(await axios.get(`${awsmobile.Storage.AWSS3.masterBaseUrl}${item.mast.keyName}`)).data,
                ...reduced,
            };
            return res;
        }),
    );
}

// 10分間キャッシュする
export const CACHE_TIME_MILLI = 10 * 60 * 1000;
export const DATE_SUM = 30;
