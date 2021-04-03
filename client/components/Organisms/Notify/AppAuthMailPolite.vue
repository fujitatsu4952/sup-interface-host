<template>
    <div class="app-auth-mail">
        ー次のステップー<br />
        ご入力していただいたメールアドレスに<br />
        ログイン用メールを送信いたしました。<br />
        そちらのメールを開封し、<br />メール内のリンクからログインしてください
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
