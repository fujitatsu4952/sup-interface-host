import { IReservationRepository, Scalars, ReservationObject, ReservationObjectInput } from 'sup_abr';
import { callApi, getObjects, CACHE_TIME_MILLI, DATE_SUM } from './apiClient';
import {
    FetchReservationObjectByShopIdAndReservationIdQuery,
    FetchReservationObjectByShopIdAndReservationIdQueryVariables
} from '~/amplify/API';
import * as queries from '~/amplify/graphql/queries';
// import * as mutations from '~/amplify/graphql/mutations';
import { ReservationObjectCacheAdaptor } from 'sup_abr';
import { Auth } from '../decorator/authDecorator';

class GraphqlReservationRepository implements IReservationRepository {
    public async add(_: ReservationObjectInput): Promise<ReservationObject> {
        throw new Error('Method not implemented.');
    }
    public async update(_: ReservationObject): Promise<ReservationObject> {
        throw new Error('Method not implemented.');
    }
    public async cancel(_: ReservationObject): Promise<ReservationObject> {
        throw new Error('Method not implemented.');
    }
    @Auth
    public async fetchReservationObjectByReservationID(shopID: Scalars['ID'], reservationID: Scalars['ID']): Promise<ReservationObject> {
        const retval = (await callApi<FetchReservationObjectByShopIdAndReservationIdQuery, FetchReservationObjectByShopIdAndReservationIdQueryVariables>(queries.fetchReservationObjectByShopIdAndReservationId, {
            shopID,
            reservationID
        })).fetchReservationObjectByShopIDAndReservationID;
        return (await getObjects<ReservationObject>([retval]))[0];
    }

}

const graphqlReservationRepo = new GraphqlReservationRepository();
export const reservationRepository = new ReservationObjectCacheAdaptor(graphqlReservationRepo, CACHE_TIME_MILLI, DATE_SUM);
