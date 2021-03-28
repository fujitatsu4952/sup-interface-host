import { IPlanTimelyStatusRepository, DailyStatusUpdateObject, PlanTimelyStatus, Scalars, MutationFunctionNameHost, PlanTimelyStatusValidator, DailyStatusSoldNumUpdateObject, StatusUpdateInput } from 'sup_abr';
import { callApi, CACHE_TIME_MILLI, DATE_SUM } from './apiClient';
import { AddPlanTimelyStatusByShopIdAndPlanIdAndDataMutation, AddPlanTimelyStatusByShopIdAndPlanIdAndDataMutationVariables, UpdatePlanTimelyStatusByShopIdAndPlanIdAndDataMutation, UpdatePlanTimelyStatusByShopIdAndPlanIdAndDataMutationVariables, FetchPlanDailyStatusByShopIdAndStartAndEndQuery, FetchPlanDailyStatusByShopIdAndStartAndEndQueryVariables, FetchPlanTimelyStatusByShopIdAndResourceIdQuery, FetchPlanTimelyStatusByShopIdAndResourceIdQueryVariables } from '~/amplify/API';
import { PlanTimelyStatusCacheAdaptor } from 'sup_abr';
import * as queries from '~/amplify/graphql/queries';
import * as mutation from '~/amplify/graphql/mutations';
import { Auth } from '../decorator/authDecorator';

class GraphqlPlanTimelyStatusRepository implements IPlanTimelyStatusRepository {

    @PlanTimelyStatusValidator
    @Auth
    public async fetchStatusByShopIDAndResourceID(shopID: string, resourceID: string): Promise<PlanTimelyStatus> {
        return (
            await callApi<FetchPlanTimelyStatusByShopIdAndResourceIdQuery, FetchPlanTimelyStatusByShopIdAndResourceIdQueryVariables>(queries.fetchPlanTimelyStatusByShopIdAndResourceId, {
                shopID,
                resourceID
            })
        ).fetchPlanTimelyStatusByShopIDAndResourceID;
    }

    @PlanTimelyStatusValidator
    @Auth
    public async fetchStatusByShopIDAndStartDt(_: string, __: string): Promise<PlanTimelyStatus[]> {
        // キャッシュから返すのです。
        throw new Error('Method not implemented.');
    }

    @PlanTimelyStatusValidator
    @Auth
    public async fetchStartTime(shopID: Scalars['ID'], startDtTime: Scalars['AWSDateTime'], endDtTime: Scalars['AWSDateTime']): Promise<PlanTimelyStatus[]> {
        const res = (
            await callApi<FetchPlanDailyStatusByShopIdAndStartAndEndQuery, FetchPlanDailyStatusByShopIdAndStartAndEndQueryVariables>(queries.fetchPlanDailyStatusByShopIdAndStartAndEnd, {
                shopID,
                startDtTime,
                endDtTime
            })
        ).fetchPlanDailyStatusByShopIDAndStartAndEnd;
        return res
    }


    @PlanTimelyStatusValidator
    @Auth
    public async addStatusDateStatus(planTimelyStatus: PlanTimelyStatus[]): Promise<PlanTimelyStatus[]> {
        return (
            await callApi<AddPlanTimelyStatusByShopIdAndPlanIdAndDataMutation, AddPlanTimelyStatusByShopIdAndPlanIdAndDataMutationVariables>(mutation.addPlanTimelyStatusByShopIdAndPlanIdAndData, {
                input: planTimelyStatus,
                action: MutationFunctionNameHost.addPlanTimelyStatusByShopIDAndPlanIDAndData
            })
        ).addPlanTimelyStatusByShopIDAndPlanIDAndData
    }

    @PlanTimelyStatusValidator
    @Auth
    public async updateStatusDateStatus(shopID: string, data: DailyStatusUpdateObject[]): Promise<PlanTimelyStatus[]> {
        const planTimelyStatusInput: StatusUpdateInput = {
            shopID: shopID,
            data: data
        }
        return (
            await callApi<UpdatePlanTimelyStatusByShopIdAndPlanIdAndDataMutation, UpdatePlanTimelyStatusByShopIdAndPlanIdAndDataMutationVariables>(mutation.updatePlanTimelyStatusByShopIdAndPlanIdAndData, {
                input: planTimelyStatusInput,
                action: MutationFunctionNameHost.updatePlanTimelyStatusByShopIDAndPlanIDAndData
            })
        ).updatePlanTimelyStatusByShopIDAndPlanIDAndData
    }
    public async incrementSoldNumByShopIDAndData(_: string, __: DailyStatusSoldNumUpdateObject): Promise<PlanTimelyStatus[]> {
        throw new Error('Method not implemented.');
    }
    public async decrementSoldNumByShopIDAndData(_: string, __: DailyStatusSoldNumUpdateObject): Promise<PlanTimelyStatus[]> {
        throw new Error('Method not implemented.');
    }

}

const repo = new GraphqlPlanTimelyStatusRepository();
export const planTimelyStatusRepository = new PlanTimelyStatusCacheAdaptor(repo, CACHE_TIME_MILLI, DATE_SUM, 300, repo.fetchStartTime);
