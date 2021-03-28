import { IPlanMastRepository, PlanMast, MutationFunctionNameHost, Scalars, PlanMastValidator } from 'sup_abr';
import { callApi, CACHE_TIME_MILLI } from './apiClient';
import {
    AddPlanMastMutation,
    AddPlanMastMutationVariables,
    UpdatePlanMastMutation,
    UpdatePlanMastMutationVariables,
    FetchPlanMastsByShopIdQuery,
    FetchPlanMastsByShopIdQueryVariables,
    FetchPlanMastByShopIdAndPlanIdQuery,
    FetchPlanMastByShopIdAndPlanIdQueryVariables,
    DeletePlanMastMutation,
    DeletePlanMastMutationVariables,
} from '~/amplify/API';
import { PlanMastCacheAdaptor } from 'sup_abr';
import * as queries from '~/amplify/graphql/queries';
import * as mutation from '~/amplify/graphql/mutations';
import { Auth } from '../decorator/authDecorator';

class GraphqlPlanMastRepository implements IPlanMastRepository {
    @PlanMastValidator
    @Auth
    public async addPlanMast(planMast: PlanMast): Promise<PlanMast> {
        return (
            await callApi<AddPlanMastMutation, AddPlanMastMutationVariables>(mutation.addPlanMast, {
                input: planMast,
                action: MutationFunctionNameHost.addPlanMast,
            })
        ).addPlanMast;
    }
    @PlanMastValidator
    @Auth
    public async updatePlanMast(planMast: PlanMast): Promise<PlanMast> {
        return (
            await callApi<UpdatePlanMastMutation, UpdatePlanMastMutationVariables>(mutation.updatePlanMast, {
                input: planMast,
                action: MutationFunctionNameHost.updatePlanMast,
            })
        ).updatePlanMast;
    }
    @PlanMastValidator
    @Auth
    public async hardDeletePlanMast(planMast: PlanMast): Promise<PlanMast> {
        return (
            await callApi<DeletePlanMastMutation, DeletePlanMastMutationVariables>(mutation.deletePlanMast, {
                input: planMast,
                action: MutationFunctionNameHost.deletePlanMast,
            })
        ).deletePlanMast;
    }
    @PlanMastValidator
    @Auth
    public async fetchPlanMastsByShopID(shopID: Scalars['ID']): Promise<PlanMast[]> {
        return (
            await callApi<FetchPlanMastsByShopIdQuery, FetchPlanMastsByShopIdQueryVariables>(queries.fetchPlanMastsByShopId, {
                shopID,
            })
        ).fetchPlanMastsByShopID;
    }
    @PlanMastValidator
    @Auth
    public async fetchPlanMastByShopIDAndPlanID(shopID: Scalars['ID'], planID: Scalars['ID']): Promise<PlanMast> {
        return (
            await callApi<FetchPlanMastByShopIdAndPlanIdQuery, FetchPlanMastByShopIdAndPlanIdQueryVariables>(queries.fetchPlanMastByShopIdAndPlanId, {
                shopID,
                planID,
            })
        ).fetchPlanMastByShopIDAndPlanID;
    }
}

export const planMastRepository = new PlanMastCacheAdaptor(new GraphqlPlanMastRepository(), CACHE_TIME_MILLI, 1000);
