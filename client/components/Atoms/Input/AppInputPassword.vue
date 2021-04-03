<template>
    <div class="app-input-container">
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <input class="app-input" type="password" v-model="localValue" :placeholder="placeholder" />
                <div class="app-input__error-text" v-if="errors.length">
                    ※英字大 / 英字小 / 数字 / 記号の各要素が必須です。<br />
                    利用可能な記号( ^ $ * . [ ] { } ( ) ? - " ! @ # % & / \ , > &lt; ' : ; | _ ~ ` )
                </div>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppPasswordInput extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public placeholder?: string;

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
.app-input-block {
    position: relative;
}

.app-input {
    position: relative;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #979797;
    font-size: 16px;
    z-index: 10;
}
input::placeholder {
    @media only screen and (max-width: 1023px) {
        font-size: 12px;
    }
}

.app-input__error-text {
    position: relative;
    text-align: left;
    font-size: 14px;
    color: red;
    z-index: 0;
}
</style>
