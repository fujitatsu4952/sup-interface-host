<template>
    <button class="app-add-button" @click="click">
        <div class="flex">
            <slot></slot>
            <span class="plus-icon">
                <span class="plus-border"></span>
            </span>
        </div>
    </button>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator';

@Component({})
export default class AppAddnButton extends Vue {
    @Emit('click')
    public click() {}
}
</script>

<style lang="stylus" scoped>
.app-add-button {
    // @extend $button_primary_base;
    height: 40px;
    min-width: 100px;
    font-size: 14px;

    .flex {
        justify-content: center;
        align-items: center;
        display: flex;

        .plus-icon {
           position: relative;
           width: 15px;
           height: 15px;
           background: #4c4c4c;
           border-radius: 50%;
           margin: 0 0 0 4px;

           .plus-border {
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
