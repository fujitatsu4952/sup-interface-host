<template>
    <div class="large_button_container">
        <button class="large_button" :class="Mode" @click="click" :disabled="disabled">
            <div class="large_button_statement">{{ statement }}</div>
        </button>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class LargeButton extends Vue {
    @Prop({ required: true }) public statement!: String;
    @Prop() public disabled!: boolean;
    @Prop({ default: false }) public gray?: boolean;
    @Prop({ default: false }) public reservation?: boolean;

    @Emit() public click() {}

    public get Mode() {
        if (this.gray !== false) {
            return 'gray';
        } else if (this.reservation! == false) {
            return 'reservation';
        }
    }
}
</script>
<style lang="stylus" scoped>
.large_button_container {
    display: inline-block;
    margin: 0 auto;

    .large_button {
        // @extend $button_primary_base;
        min-width: 300px;
        padding: 12px 0;

        @media only screen and (max-width: 1023px) {
            min-width: 285px;
        }

        .large_button_statement {
            font-size: 16px;
        }
    }

    .gray {
        background-color: #E5E5E5;
        color: #000;
    }

    .reservation {
        min-width: 200px;
    }
}
</style>
