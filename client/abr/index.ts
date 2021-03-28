import {
    userMastHostRepository,
    companyMastRepository,
    planTimelyStatusRepository,
    planMastRepository,
    reservationRepository,
    shopMastRepository,
} from './infrastructure';
import {
    HostCompanyInteractor,
    HostPlanInteractor,
    HostPlanTimelyStatusInteractor,
    HostShopInteractor,
} from 'sup_abr';
import { ModelFactory } from 'sup_abr/dist/entity/domain/factory';

export const modelFactory = new ModelFactory(shopMastRepository, planMastRepository, planTimelyStatusRepository, reservationRepository)

export const companyInteractor = new HostCompanyInteractor(userMastHostRepository, companyMastRepository);

export const planInteractor = new HostPlanInteractor(userMastHostRepository, planMastRepository, shopMastRepository)

export const shopInteractor = new HostShopInteractor(userMastHostRepository, shopMastRepository);

export const planTimelyStatusInteractor = new HostPlanTimelyStatusInteractor(userMastHostRepository, shopMastRepository, planTimelyStatusRepository);