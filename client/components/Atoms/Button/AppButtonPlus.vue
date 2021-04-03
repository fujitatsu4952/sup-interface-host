<template>
    <div class="app_add_button_container">
        <button class="app_add_button" @click="click">
            <span class="plus_icon">
                <span class="plus_border"></span>
            </span>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator';

@Component({})
export default class AppAddButton extends Vue {
    @Emit('click')
    public click() {}
}
</script>

<style lang="stylus" scoped>
.app_add_button_container {
    .app_add_button {
        display: flex;
        background: transparent;
        border: none;
        cursor: pointer;
        justify-content: center;
        outline: none;

        .plus_icon {
            position: relative;
            width: 15px;
            height: 15px;
            background: #4c4c4c;
            border-radius: 50%;

            .plus_border {
                position: absolute;
                width: 9px;
                height: 2px;
                top: 45%;
                right: 0;
                left: 0;
                margin: auto;
                background: #fff;

                &::after {
                    position: absolute;
                    content: '';
                    display: block;
                    width: 9px;
                    height: 2px;
                    top: 0;
                    right: 0;
                    left: 0;
                    margin: auto;
                    background: #fff;
                    transform: rotate(90deg);
                }
            }
        }
    }
}
</style>
