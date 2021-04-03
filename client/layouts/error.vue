<template>
    <div class="page-container">
        <h1 v-if="error.statusCode === 404" class="error-message">
            リクエストされたURLは存在しません
        </h1>
        <h1 v-else class="error-message">エラーが発生しました</h1>
        <nuxt-link :to="{ name: 'auth-signin' }" @click.native="signOut">
            <div class="link-to-auth">ログイン画面に戻る</div>
        </nuxt-link>
    </div>
</template>

<script lang="ts">
import { AsyncLoadingAndErrorHandle } from "~/abr/decorator/baseDecorator";
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "~/amplify/auth";

@Component({
    layout: "onlypage",
})
export default class errorPage extends Vue {
    @Prop() public error: undefined;

    @AsyncLoadingAndErrorHandle() public async signOut(): Promise<void> {
        await hostUserAuthInteractor.signOut();
        location.reload();
    }
}
</script>

<style lang="stylus" scoped>
.page-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    .error-message {
        text-align: center;
        font-size: 28px;
        margin-bottom: 10px;
    }

    .link-to-auth {
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
