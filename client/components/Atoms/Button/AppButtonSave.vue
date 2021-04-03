<template>
    <span>
        <button class="app-save-button" :class="Mode" @click="click" :disabled="disabled">
            <!-- 文言の入力だけ流し込んでもらう -->
            <slot></slot>
        </button>
    </span>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppSaveButton extends Vue {
    @Prop() public disabled?: boolean;
    @Prop({ default: false }) public large!: boolean;
    @Prop({ default: false }) public white!: boolean;
    @Emit('click') public click() {}
    public get Mode() {
        if (this.large !== false) {
            return 'large';
        } else if (this.white !== false) {
            return 'white';
        }
    }
}
</script>
<style lang="stylus" scoped>
.app-save-button {
    font-family: '游ゴシック体', YuGothic;
    min-width: 140px;
    height: 36px;
    line-height: 32px;
    font-size: 14px;
    background: #4c4c4c;
    border: 1px solid $boundaryBlack;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    transition: 0.2s all;
    padding: 0 15px;
    color: #fff;
    &:hover {
        font-weight: 600
    }
    &:disabled {
        background: transparent;
        color: rgba(16, 16, 16, 0.5)
        &:hover {
            background: transparent;
            color: rgba(16, 16, 16, 0.3)
        }
    }
}
.large {
    min-width: 300px;
}
.white {
    background: white;
    color: #4c4c4c;
    &:disabled {
        background: #979797;
        &:hover {
            background: #979797;
            color: rgba(16, 16, 16, 0.3)
        }
    }

}
</style>
