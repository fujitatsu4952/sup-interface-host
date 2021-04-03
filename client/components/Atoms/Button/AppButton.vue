<template>
    <button :class="getClass" class="app-button" @click="click" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppButton extends Vue {
    @Prop() public disabled?: boolean;
    @Prop({ default: false }) public black!: boolean;

    public get getClass() {
        if (this.black) {
            return 'black';
        }
        return;
    }

    @Emit('click')
    public click() {}
}
</script>

<style lang="stylus" scoped>
.app-button {
    font-size: 14px;
    padding: 4px 10px;
    min-width: 200px;
    @extend $button_primary_base;
    @media only screen and (max-width: 1023px) {
        width: 343px;
        min-width: 343px;
        max-width: 343px;
    }
}

.black {
    background: #4c4c4c;
    color: #fff;
}
</style>
