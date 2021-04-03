<template>
    <div class="app_minus_button_container">
        <span class="app_minus_button_text">
            <slot></slot>
        </span>
        <button class="app_minus_button" @click="click">
            <span class="minus_icon">
                <span class="minus_border"></span>
            </span>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator';

@Component({})
export default class AppMinusButton extends Vue {
    @Emit('click')
    public click() {}
}
</script>

<style lang="stylus" scoped>
.app_minus_button_container {
    display: flex;
    min-width: 52px;

    .app_minus_button_text {
        font-size: 12px;
    }

    .app_minus_button {
        display: flex;
        background: transparent;
        border: none;
        cursor: pointer;
        justify-content: center;
        outline: none;

        .minus_icon {
            position: relative;
            width: 15px;
            height: 15px;
            background: #4c4c4c;
            border-radius: 50%;

            .minus_border {
                position: absolute;
                width: 9px;
                height: 2px;
                top: 45%;
                right: 0;
                left: 0;
                margin: auto;
                background: #fff;
            }
        }
    }
}
</style>
