<template>
    <div class="contents-container">
        <div class="logo-container">
            <!-- <img src="~/assets/img/logo.png" alt /> -->
        </div>
        <div class="auth-contents-container">
            <sign-in-form></sign-in-form>
            <div class="auth-contents-link-container">
                <nuxt-link :to="{ name: 'auth-signup' }">
                    <span class="auth-contents-link-signin">新規ユーザー登録>></span>
                </nuxt-link>
            </div>
            <div class="auth-contents-link-container">
                <nuxt-link :to="{ name: 'auth-forgotpassword' }">
                    <span class="auth-contents-link-signin">パスワードを忘れた場合>></span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// component
import SignInForm from '~/components/Templates/Auth/SignInForm.vue';

@Component({
    layout: "auth",
    components: {
        SignInForm,
    },
})
export default class SignIn extends Vue {}
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
.alert_container {
    margin-bottom: 50px;
    padding: 40px 40px;
    background-color: white;
    font-size: 14px;
    .alert_inner {
        @media only screen and (max-width: 1023px) {
            text-align: left;
        }
        .bold {
            color: $errorColor;
            font-weight: bold;
        }
    }
}
</style>
