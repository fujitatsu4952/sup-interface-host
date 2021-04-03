<template>
    <button @click="click" class="flex">
        <p class="transition_button">{{ statement }}</p>
        <!-- <img v-if="arrow !== false" src="~/assets/img/icon/arrow/arrow-right.svg" alt="details" /> -->
        <!-- <img v-if="square !== false" src="~/assets/img/label/plan-label.svg" alt /> -->
    </button>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class TransitionButton extends Vue {
    @Prop({ required: true }) public statement!: string;
    @Prop({ default: false }) public arrow!: boolean;
    @Prop({ default: false }) public square!: boolean;
    @Emit() public click() {}
}
</script>
<style lang="stylus" scoped>
button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
}

.transition_button {
    cursor: pointer;
    padding-right: 8px;
}
</style>
