<template>
    <div class="table_button" @click="click">
        <div class="table_button_img" @mouseover="isShow = true" @mouseleave="isShow = false">
            <slot></slot>
        </div>
        <div>
            <transition name="tablebutton">
                <span class="table_button_explanation" v-show="isShow">{{ explanation }}</span>
            </transition>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';

@Component({})
export default class AppTableButton extends Vue {
    @Prop() public explanation!: string;
    public isShow: boolean = false;

    @Emit() public click() {}
}
</script>

<style lang="stylus" scoped>
.table_button {
    width: 36px;
    height: 36px;
    // border: 1px solid #979797;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,.3);
    border-radius: 100%;
    cursor: pointer;
    opacity: .5;
    text-align: center;
    background-color: white;

    &:hover {
        opacity: 1;
    }

    .table_button_img {
        position: relative;
        top: 8px;
    }
    .table_button_explanation {
       position: relative;
       top: 8px;
       font-size: 12px;
    }

    .tablebutton-enter-active, .tablebutton-leave-active {
        transition: opacity 0.5s;
    }

    .tablebutton-enter, .tablebutton-leave-to {
        opacity: 0;
    }

}
</style>
