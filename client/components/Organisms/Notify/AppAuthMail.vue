<template>
    <div class="app-auth-mail">
        まだ登録は終わっていません！<br />
        ログイン用メールのリンクから、<br />
        ユーザー登録を完了してください。
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppAuthMail extends Vue {
    @Prop() public value!: string;
}
</script>

<style scoped>
.app-auth-mail {
    font-size: 28px;
    text-align: center;
}
</style>
