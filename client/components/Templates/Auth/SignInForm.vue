<template>
    <div class="sign-form-container">
        <app-title value="ログイン"></app-title>
        <validation-observer v-slot="{ invalid }">
            <div class="sign-input-container">
                <app-input v-model="loginEmail" name="メールアドレス" rule="required|email" placeholder="メールアドレス"></app-input>
            </div>
            <div class="sign-input-container">
                <app-password-input
                    v-model="loginPassword"
                    name="パスワード（8文字以上/英大小字/数字/記号の各要素が必須です）"
                    :rule="{
                        regex,
                    }"
                    placeholder="パスワード（8文字以上/英大小字/数字/記号の各要素が必須）"
                ></app-password-input>
            </div>
            <div class="sign-button-container">
                <app-button class="sign-button" @click="signIn" :disabled="invalid">ログイン</app-button>
            </div>
        </validation-observer>
    </div>
</template>

<script lang="ts">
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
import { Component, Vue } from 'nuxt-property-decorator';
import { companyInteractor } from '~/abr/index';
import { hostUserAuthInteractor } from '~/amplify/auth';
import { getUniqueID } from 'sup_abr';
import { CompanyMastInput, CompanyMast } from 'sup_abr';
import AppTitle from '~/components/Atoms/Text/AppTextH2.vue';
import AppInput from '~/components/Atoms/Input/AppInputUnderBar.vue';
import AppPasswordInput from '~/components/Atoms/Input/AppInputPassword.vue';
import AppButton from '~/components/Atoms/Button/AppButton.vue';

@Component({
    components: {
        AppInput,
        AppPasswordInput,
        AppTitle,
        AppButton,
    },
})
export default class SignInForm extends Vue {
    public regex = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,}$/);
    public loginEmail: string = '';
    public loginPassword: string = '';
    public show: boolean = true;

    @AsyncLoadingAndErrorHandle() public async signIn(): Promise<void> {
        try {
            await hostUserAuthInteractor.signIn(this.loginEmail, this.loginPassword);
        } catch (err) {
            throw hostUserAuthInteractor.errorHandle(err);
        }
        try {
            await companyInteractor.fetchMyCompanyByHostUserID();
        } catch (err) {
            // カンパニーが未登録 => 今後はあり得ない
            const newCompanyMast: CompanyMastInput = companyInteractor.getBlancMast();
            newCompanyMast.companyID = getUniqueID(3);
            newCompanyMast.email = this.loginEmail;
            await companyInteractor.addMast(newCompanyMast as CompanyMast);
        }
        this.$router.push({ name: 'index' });
    }
}
</script>
<style lang="stylus" scoped>
.sign-form-container {
    .sign-input-container {
        margin: $margin_sign_input_container;
    }

    .sign-button-container {
        .sign-button {
            width: $percent_width_sign_button_container;
        }
    }
}
</style>
