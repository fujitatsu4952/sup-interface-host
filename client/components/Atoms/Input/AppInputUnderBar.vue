<template>
    <div class="app-input-container">
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <input class="app-input" :class="Mode" v-model="localValue" :placeholder="placeholder" :type="type" />
                <div class="app-input-error-text" v-if="errors.length">※{{ errors[0] }}</div>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from 'nuxt-property-decorator';

@Component({})
export default class AppInput extends Vue {
    @Prop() public type!: string;
    @Prop() public value!: string | null;
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public placeholder?: string;
    @Prop({ default: false }) public center!: boolean;

    public get Mode() {
        if (this.center !== false) {
            return 'center';
        }
    }

    @Emit('input')
    public input(_: string | null) {}
    @Watch('localValue')
    public insertNull() {
        if (!this.localValue && this.localValue !== null) {
            this.localValue = null;
        }
    }
    public get localValue(): string | null {
        return this.value;
    }
    public set localValue(value: string | null) {
        this.input(value);
    }
}
</script>

<style lang="stylus" scoped>
.app-input-container {
    .app-input {
        position: relative;
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid #979797;
        font-size: 16px;
        padding: 6px 0;
    }
    input::placeholder {
        color: rgba(0,0,0,.2);
        @media only screen and (max-width: 1023px) {
            font-size: 12px;
        }
    }

    .app-input-error-text {
        position: relative;
        text-align: left;
        font-size: 14px;
        color: red;
    }
    .center {
        text-align: center
    }
}
</style>
