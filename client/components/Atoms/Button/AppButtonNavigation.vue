<template>
    <span @click="click" class="app-prev-button">
        <!-- 前のページ見たいときの左向き矢印 -->
        <!-- <img v-if="navigation === 'prev'" src="~/assets/img/icon/chevron-circle-left.svg" class="img-container" /> -->
        <!-- 次のページ見たいときの右向き矢印 -->
        <!-- <img v-if="navigation === 'next'" src="~/assets/img/icon/chevron-circle-right.svg" class="img-container" /> -->
    </span>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppNavigationButton extends Vue {
    @Prop() public navigation!: string;
    @Emit('click')
    public click() {}
}
</script>

<style scoped>
.app-prev-button {
    position: relative;
    top: 2px;
    cursor: pointer;
}
.img-container {
    width: 16px;
    height: auto;
}
</style>
