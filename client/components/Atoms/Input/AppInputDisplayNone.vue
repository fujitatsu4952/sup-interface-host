<template>
    <div class="app-input-container">
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <input class="app-input" v-model="localValue" :placeholder="placeholder" :type="type" :class="Mode"  />
                <div class="app-input-error-text" v-if="errors.length">※{{ errors[0] }}</div>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from 'nuxt-property-decorator';

@Component({})
export default class AppInputDisplayNone extends Vue {
    @Prop() public type!: string;
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public placeholder?: string;
    @Prop({ default: false }) public center!: boolean;

    public get Mode() {
        if (this.center !== false) {
            return 'center';
        }
    }

    @Prop() public value!: string | null;
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
        display: none;
        width: 100%;
        border: 1px solid $boundaryBlack;
        border-radius: 5px;
        font-size: 14px;
        padding: 8px 12px;
        box-sizing: border-box;
        background-color:transparent;
    }
    input::placeholder {
        color: rgba(0,0,0,.2);
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
