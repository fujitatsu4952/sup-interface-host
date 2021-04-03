<template>
    <div class="input_guest_info">
        <ValidationProvider :name="errorMessage || name" :rules="rule" :vid="vid">
            <div slot-scope="{ errors }">
                <input class="input_gray_back" v-model="localValue" :placeholder="example" :name="name" :type="type ? type : 'text'" :class="errors[0] ? 'validation_err' : ''" autocomplete="on" />
                <div v-if="errors[0]" class="error_text">{{ errors[0] }}</div>
                <div v-else>&nbsp;</div>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
//component

@Component({})
export default class AppInputGuestInfo extends Vue {
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public example?: string;
    @Prop() public type?: string;
    @Prop() public vid?: string;
    @Prop() public errorMessage?: string;

    @Prop() public value!: string;
    @Emit('input')
    public input(_: string) {}

    public get localValue(): string {
        return this.value;
    }

    public set localValue(value: string) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.input_guest_info {
    -webkit-appearance: none;
    .input_gray_back {
        border: none;
        -webkit-appearance: none;
        border-radius: 0;
        width: 96%;
        background-color: #E5E5E5;
        padding: 8px 2%;
        height: 19px;

        &::placeholder {
            color: white;
        }
    }
    .error_text {
        color: $warningFontColor;
        font-size: 12px;
    }
}
</style>
