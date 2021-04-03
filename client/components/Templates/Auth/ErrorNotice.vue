<template>
    <div class="error_notice">
        <app-text value="1月21日(木)午後17時33分に発生しました弊社CHILLNNのバグについてご報告させて頂きます。" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import AppTitle from '~/components/Atoms/Text/AppTextH2.vue';
// import AppText from '~/compontents/Atoms/Text/AppTextH4.vue';
import AppInput from '~/components/Atoms/Input/AppInputUnderBar.vue';
import AppPasswordInput from '~/components/Atoms/Input/AppInputPassword.vue';
import AppButton from '~/components/Atoms/Button/AppButton.vue';

@Component({
    components: {
        AppInput,
        AppPasswordInput,
        AppTitle,
        // AppText,
        AppButton,
    },
})
export default class ErrorNotice extends Vue {}
</script>
<style lang="stylus" scoped>
.error_notice {
    width: 100px;
}
</style>
