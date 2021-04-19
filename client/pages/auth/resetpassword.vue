<template>
    <div class="contents-container">
        <div class="logo-container">
            <!-- <img src="~/assets/img/logo.png" alt /> -->
        </div>
        <div class="auth-contents-container" v-if="loginEmail && verifyCode">
            <reset-password :loginEmail="loginEmail" :verifyCode="verifyCode"></reset-password>
        </div>
        <div class="auth-contents-link-container">
            <nuxt-link :to="{ name: 'auth-signin' }">
                <span class="auth-contents-link-signin">ログインページへ戻る>></span>
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import { AsyncLoadingAndErrorHandle } from "~/abr/decorator/baseDecorator";
import { Component, Vue } from "nuxt-property-decorator";
import ResetPassword from "@/components/Templates/Auth/ResetPassword.vue";
@Component({
    layout: "auth",
    components: {
        ResetPassword,
    },
})
export default class SignIn extends Vue {
    public loginEmail: string = "";
    public verifyCode: string = "";
    @AsyncLoadingAndErrorHandle() public async created() {
        this.loginEmail = unescape(this.$route.query.username as string);
        this.verifyCode = unescape(this.$route.query.verify_code as string);
        if (!(this.loginEmail && this.verifyCode)) {
            alert("パスワード再設定メールを確認してください。");
        }
    }
}
</script>
<style lang="stylus" scoped>
.contents-container {
    padding: $padding_auth_container;
    display: inline-block;
    min-width: $min_width_auth_contents;
    @media only screen and (max-width: 1023px) {
        min-width: $min_width_auth_contents_mobile;
    }

    .logo-container {
        margin: $margin_logo_container;
    }

    .auth-contents-container {
        background-color: $backgournd_color__auth_contents_container;
        padding: $padding_auth_contents_container;
        border-radius: $border_radius_auth_contents_container;
        @media only screen and (max-width: 1023px) {
            padding: $padding_auth_contents_container_mobile;
        }

        .auth-contents-link-container {
            text-align: right;

            .auth-contents-link-signin {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
