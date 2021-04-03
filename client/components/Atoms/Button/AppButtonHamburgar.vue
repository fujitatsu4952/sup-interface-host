<template>
    <div>
        <button class="hamburgar_button" @click="click" :disabled="disabled">
            <div class="hamburgar_button_line">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <!-- <span>{{ isShow ? 'Close' : '' }}</span> -->
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';

@Component({})
export default class AppButtonHamburger extends Vue {
    @Prop() public value!: string;
    @Prop() public disabled?: boolean;
    @Prop() public isShow!: boolean;

    @Emit('click')
    public click() {}
}
</script>

<style lang="stylus" scoped>
.hamburgar_button {
    background: transparent;
    border: none;
    cursor: pointer;
    margin: auto;
    outline: none;

    .hamburgar_button_line {
        position: relative;
        width: 30px;
        height: 20px;

        & span {
            position: absolute;
            display: block;
            width: 30px;
            height: 3.5px;
            background: #4c4c4c;
            border-radius: 4px;
            transition: 0.4s all;

            &:nth-of-type(1) {
                height: 4px;
                top: 0;
            }

            &:nth-of-type(2) {
                height: 4px;
                top: 8px;
            }

            &:nth-of-type(3) {
                height: 4px;
                bottom: 0;
            }
        }
    }
}
</style>
