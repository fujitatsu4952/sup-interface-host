import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import InfoModule from '../../store/modules/info';
import ApplicationStatusModule from '../../store/modules/status';

let infoStore: InfoModule;
let applicationStatusStore: ApplicationStatusModule;

function initialiseStores(store: Store<any>): void {
    infoStore = getModule(InfoModule, store);
    applicationStatusStore = getModule(ApplicationStatusModule, store);
}

export {
    initialiseStores,
    infoStore,
    applicationStatusStore
};
