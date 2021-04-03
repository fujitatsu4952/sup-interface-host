<template>
    <div class="app-input-number-container">
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <input class="app-input-number" :style="getWidth" v-model="localValue" :placeholder="placeholder" type="number" />
                <div class="app-input-number-error-text" v-if="errors.length">※{{ errors[0] }}</div>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
import { isInteger } from 'sup_abr';
import { Component, Vue, Emit, Prop, Watch } from 'nuxt-property-decorator';

@Component({})
export default class AppInput extends Vue {
    @Prop({ default: false }) public allowZero!: boolean;
    @Prop() public value!: number | null;
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public placeholder?: string;
    @Prop() public widthSize?: number;

    @Emit('input')
    public input(_: number | null) {}
    @Watch('localValue')
    public insertNull() {
        if (!this.allowZero && !this.localValue && this.localValue !== null) {
            this.localValue = null;
        } else if (this.allowZero && !this.localValue && !isInteger(this.localValue)) {
            this.localValue = 0;
        }
    }
    public get getWidth() {
        if (this.widthSize) {
            return { maxWidth: this.widthSize + 'px' };
        }
    }
    public get localValue(): number | null {
        return this.value;
    }
    public set localValue(value: number | null) {
        this.input(value);
    }
}
</script>

<style lang="stylus" scoped>
.app-input-number-container {
    padding: 0 5px 0 5px;
    .app-input-number {
        width: 100%;
        border: 1px solid $boundaryBlack;
        border-radius: 5px;
        font-size: 14px;
        padding: 7px 10px;
        box-sizing: border-box;
        text-align: center; // AppInput.vueのtext-alignはleft
        // margin:0 5px 0 0;
    }
    input::placeholder {
        color: rgba(0,0,0,.2);
    }

    .app-input-number-error-text {
        position: relative;
        text-align: left;
        font-size: 14px;
        color: red;
    }
}
</style>
