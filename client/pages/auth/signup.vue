<template>
    <div class="contents-container">
        <div class="logo-container">
            <!-- <img src="~/assets/img/logo.png" alt /> -->
        </div>
        <div class="auth-contents-container" v-if="!emailSended">
            <div class="auth-contents-link-container"></div>
            <sign-up-form :emailSended.sync="emailSended"></sign-up-form>
            <div class="auth-contents-link-container"></div>
        </div>
        <app-auth-mail v-if="emailSended" class="email-sended-container"></app-auth-mail>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import SignUpForm from '~/components/Templates/Auth/SignUpForm.vue';
import AppAuthMail from '~/components/Organisms/Notify/AppAuthMail.vue';

@Component({
    layout: "auth",
    components: {
        SignUpForm,
        AppAuthMail,
    },
})
export default class SignUp extends Vue {
    public emailSended: boolean = false;
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

    .email-sended-container {
        background-color: $backgournd_color__auth_contents_container;
        border-radius: $border_radius_auth_contents_container;
        padding: 100px 20px; // konopaddinghaめーる文言だけでは小さくなりすぎてしまうために置いている。
    }
}
</style>
