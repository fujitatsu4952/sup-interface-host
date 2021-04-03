import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { hostUserAuthInteractor } from '~/amplify/auth';

// tslint:disable: member-ordering
@Module({
    stateFactory: true,
    name: 'modules/status',  // store以下のファイル構造に一致させる。
    namespaced: true,
})
export default class ApplicationStatusModule extends VuexModule {
    /*******************************************
     * Auth
     *******************************************/
    private /* Authステータス */ isSignInStatus: boolean = false;
    public get isSignIn() {
        return this.isSignInStatus;
    }

    @Action
    public async updateSignInStatus(): Promise<void> {
        const isSignIn = await hostUserAuthInteractor.isSignIn();
        this.UPDATE_AUTH_STATUS(isSignIn);
    }
    @Mutation
    private UPDATE_AUTH_STATUS(status: boolean) {
        this.isSignInStatus = status;
    }
}
