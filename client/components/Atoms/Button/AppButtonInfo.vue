<template>
    <button :class="getClass" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div>i</div>
    </button>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppButton extends Vue {
    @Prop() public disabled?: boolean;

    public mouseHover: boolean = false;

    public get getClass() {
        return {
            'app-info-button': true,
            'app-info-button--hover': true,
        };
    }

    @Emit('mouseenter')
    public mouseenter() {}
    @Emit('mouseleave')
    public mouseleave() {}
}
</script>

<style lang="stylus" scoped>
.app-info-button {
    // @extend $button_secondary_base;
    width: 20px;
    height: 20px;
}
</style>
