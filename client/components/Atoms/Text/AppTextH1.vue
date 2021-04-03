各項目の見出しに使う
<template>
    <div class="app_text_chapter" v-html="value"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppTextH1 extends Vue {
    @Prop() public value!: string;
}
</script>

<style lang="stylus" scoped>
.app_text_chapter {
    color: #4c4c4c;
    font-size: 36px;
    font-weight: bold;
}
</style>
