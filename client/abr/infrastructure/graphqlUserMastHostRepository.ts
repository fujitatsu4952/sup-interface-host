import { IUserMastHostRepository, UserMastHost, UserMastHostValidator } from 'sup_abr';
import { callApi } from './apiClient';
import { FetchMyUserMastQuery } from '~/amplify/API';
import { UserMastHostCacheAdaptor } from 'sup_abr';
import * as queries from '~/amplify/graphql/queries';
import { Auth } from '../decorator/authDecorator';

class GraphqlUserMastHostRepository implements IUserMastHostRepository {
    public addSameCompanyIDUserMast(_: string, __: string, ___: string): Promise<UserMastHost> {
        throw new Error('Method not implemented.');
    }
    @UserMastHostValidator
    @Auth
    public async fetchMyUserMast(): Promise<UserMastHost> {
        return (await callApi<FetchMyUserMastQuery, {}>(queries.fetchMyUserMast, {})).fetchMyUserMast;
    }
}

export const userMastHostRepository = new UserMastHostCacheAdaptor(new GraphqlUserMastHostRepository());
