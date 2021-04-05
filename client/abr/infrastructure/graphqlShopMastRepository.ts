import { IShopMastRepository, ShopMast, MutationFunctionNameHost, Scalars, ShopMastValidator, ShopMastInput, ShopMastCacheAdaptor } from 'sup_abr';
import { callApi, CACHE_TIME_MILLI } from './apiClient';
import { AddShopMastMutation, AddShopMastMutationVariables, UpdateShopMastMutation, UpdateShopMastMutationVariables, FetchShopsByCompanyIdQuery, FetchShopsByCompanyIdQueryVariables, FetchShopMastByShopIdQuery, FetchShopMastByShopIdQueryVariables } from '~/amplify/API';
import * as queries from '~/amplify/graphql/queries';
import * as mutation from '~/amplify/graphql/mutations';
import { Auth } from '../decorator/authDecorator';

class GraphqlShopMastRepository implements IShopMastRepository {
    @ShopMastValidator
    @Auth
    public async addShopMast(shopMast: ShopMastInput): Promise<ShopMast> {
        return (
            await callApi<AddShopMastMutation, AddShopMastMutationVariables>(mutation.addShopMast, {
                input: shopMast,
                action: MutationFunctionNameHost.addShopMast,
            })
        ).addShopMast;
    }
    @ShopMastValidator
    @Auth
    public async updateShopMast(shopMast: ShopMastInput): Promise<ShopMast> {
        return (
            await callApi<UpdateShopMastMutation, UpdateShopMastMutationVariables>(mutation.updateShopMast, {
                input: shopMast,
                action: MutationFunctionNameHost.updateShopMast,
            })
        ).updateShopMast;
    }
    @ShopMastValidator
    @Auth
    public async fetchShopMastsByCompanyID(companyID: Scalars['ID']): Promise<ShopMast[]> {
        return (
            await callApi<FetchShopsByCompanyIdQuery, FetchShopsByCompanyIdQueryVariables>(queries.fetchShopsByCompanyId, {
                companyID,
            })
        ).fetchShopsByCompanyID
    }
    @ShopMastValidator
    @Auth
    public async fetchShopMastByShopID(shopID: Scalars['ID']): Promise<ShopMast> {
        return (
            await callApi<FetchShopMastByShopIdQuery, FetchShopMastByShopIdQueryVariables>(queries.fetchShopMastByShopId, {
                shopID
            })
        ).fetchShopMastByShopID
    }
    @ShopMastValidator
    @Auth
    public async fetchAllShopMasts(): Promise<ShopMast[]> {
        throw new Error('Method not implemented.');
    }
}
export const shopMastRepository = new ShopMastCacheAdaptor(new GraphqlShopMastRepository(), CACHE_TIME_MILLI, 1000);
