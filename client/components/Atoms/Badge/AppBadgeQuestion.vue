<template>
    <div class="app-badge" :style="style">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppBadgeSlot extends Vue {
    @Prop() public value!: string;
    @Prop({ default: false }) public optional!: boolean;

    public get style() {
        if (this.optional !== false) {
            return {
                background: '#bcbcbc',
            };
        } else {
            return {
                background: '#4c4c4c',
            };
        }
    }
}
</script>

<style lang="stylus" scoped>
.app-badge {
    box-sizing: border-box;
    color: #fff;
    font-size: 12px;
    line-height: 8px;
    padding: 7px 14px;
}
</style>
