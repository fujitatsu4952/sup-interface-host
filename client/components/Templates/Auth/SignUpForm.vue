<template>
    <div class="sign-form-container">
        <app-title value="新規ユーザー登録"></app-title>
            <div class="sign-input-container">
                <app-input v-model="newEmail" name="登録用メールアドレス" rule="required|email" placeholder="登録用メールアドレス"></app-input>
            </div>
            <div class="sign-input-container">
                <app-password-input v-model="newPassword" name="パスワード（8文字以上/英大小字/数字/記号の各要素が必須です）" :rule="{ regex }" placeholder="パスワード（8文字以上/英大小字/数字/記号の各要素が必須）" />
            </div>
            <div class="sign-button-container">
                <app-button class="sign-button" @click="signUp">登録申請する</app-button>
            </div>
    </div>
</template>

<script lang="ts">
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';
import { hostUserAuthInteractor } from '~/amplify/auth';
import { infoStore } from '~/store';
import AppTitle from '~/components/Atoms/Text/AppTextH2.vue';
import AppInput from '~/components/Atoms/Input/AppInputUnderBar.vue';
import AppPasswordInput from '~/components/Atoms/Input/AppInputPassword.vue';
import AppButton from '~/components/Atoms/Button/AppButton.vue';
import AppToggle from '~/components/Atoms/Input/AppInputToggle.vue';

@Component({
    components: {
        AppInput,
        AppPasswordInput,
        AppTitle,
        AppButton,
        AppToggle,
    },
})
export default class SignUpForm extends Vue {
    public regex = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,}$/);
    public newEmail: string = '';
    public newPassword: string = '';
    public verifyCode: string = '';
    public isAgree: boolean = false;

    @Prop() public emailSended!: boolean;
    @Emit('update:emailSended') public emitemailSended(_: boolean) {}
    public get localemailSended() {
        return this.emailSended;
    }
    public set localemailSended(emailSended: boolean) {
        this.emitemailSended(emailSended);
    }

    @AsyncLoadingAndErrorHandle() public async signUp(): Promise<void> {
        try {
            await hostUserAuthInteractor.signUp(this.newEmail, this.newPassword);
            infoStore.addInfo({
                type: 'INFO',
                message: '認証メールを送信いたしました。メールをご確認ください。',
            });
            this.localemailSended = !this.localemailSended;
        } catch (err) {
            throw hostUserAuthInteractor.errorHandle(err);
        }
    }
}
</script>
<style lang="stylus" scoped>
.sign-form-container {
    .sign-input-container {
        margin: $margin_sign_input_container;

        .company-policy {
            margin-top: 40px;
        }
    }

    .flex {
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    .sign-policy-container {
        margin: 0px 3px 10px;
        font-size: 12px;
    }

    .sign-button-container {
        .sign-button {
            width: $percent_width_sign_button_container;
        }
    }
}
</style>
