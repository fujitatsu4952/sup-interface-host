<template>
    <div class="small_button_container">
        <button class="small_button" :class="Mode" @click="click" :disabled="disabled">
            <p class="small_button_statement">{{ statement }}</p>
        </button>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class SmallButton extends Vue {
    @Prop({ required: true }) public statement!: String;
    @Prop() public disabled!: boolean;
    @Prop({ default: false }) public white?: boolean;

    @Emit() public click() {}

    public get Mode() {
        if (this.white !== false) {
            return 'white';
        }
    }
}
</script>
<style lang="stylus" scoped>
.small_button_container {
    .small_button {
        // @extend $button_primary_base
        width: 130px;
        padding: 3px 0;
        @media only screen and (max-width: 1023px) {
            padding: 3px 15px;
            min-width: none;
        }

        .small_button_statement {
            font-size: 12px;
        }
    }
    .white {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #000000;
    }
}
</style>
