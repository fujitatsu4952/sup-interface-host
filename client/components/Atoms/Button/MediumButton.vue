<template>
    <div class="medium_button_container">
        <button class="medium_button" :class="Mode" @click="click" :disabled="disabled">
            <div class="medium_button_statement">{{ statement }}</div>
        </button>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class MediumButton extends Vue {
    @Prop({ required: true }) public statement!: String;
    @Prop() public disabled!: boolean;
    @Prop({ default: false }) public white?: boolean;
    @Prop({ default: false }) public transparent?: boolean;

    @Emit() public click() {}

    public get Mode() {
        if (this.white !== false) {
            return 'white';
        } else if (this.transparent !== false) {
            return 'transparent';
        }
    }
}
</script>
<style lang="stylus" scoped>
.medium_button_container {
    // display: inline-block;
    .medium_button {
        // @extend $button_primary_base;
        border: 1px solid #000000;
        min-width: 130px;
        padding: 7px 0;

        .medium_button_statement {
            font-size: 14px;
        }
    }

    .white {
        min-width: 90px;
        height: 35px;
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #000000;

        .medium_button_statement {
            font-size: 12px;
        }
    }

    .transparent {
        background-color: transparent;
        color: #000000;
        border: 1px solid #000000;
    }
}
</style>
