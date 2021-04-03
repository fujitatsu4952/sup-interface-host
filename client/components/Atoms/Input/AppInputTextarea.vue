<template>
    <div>
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <textarea :class="Mode" v-model="localValue" :placeholder="placeholder" />
                <p class="app_textarea_error_text" v-if="errors.length">※{{ errors[0] }}</p>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppTextarea extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public placeholder?: string;
    @Prop({ default: false }) public borders?: boolean;

    public get Mode() {
        if (this.borders !== false) {
            return 'borders';
        } else {
            return 'textarea';
        }
    }

    @Emit('input')
    public input(_: string) {}

    public get localValue(): string {
        return this.value;
    }

    public set localValue(value: string) {
        this.input(value);
    }

    public mounted() {
        let textarea = document.getElementsByTagName('textarea') as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < textarea.length; i++) {
            textarea[i].style.height = '90px';
            textarea[i].style.height = textarea[i].scrollHeight - 0 + 'px';
        }

        for (let i = 0; i < textarea.length; i++) {
            textarea[i].addEventListener('input', () => {
                textarea[i].style.height = '15px';
                textarea[i].style.height = textarea[i].scrollHeight - 0 + 'px';
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.textarea {
    width: 100%;
    min-height: 80px;
    border: 1px solid $boundaryBlack;
    border-radius: 5px;
    font-size: 14px;
    padding: 8px 12px;
    box-sizing: border-box;
}
textarea {
    font-size: 14px;
    font-family: '游ゴシック体', YuGothic;
}

.borders {
    width: calc(100% - 20px);
    height: auto;
    min-height: 250px;
    background: transparent;
    border: 1px solid #979797;
    border-radius: 5px;
    color: #000;
    font-size: 14px;
    letter-spacing: 0.6px;
    outline: none;
    padding: 10px;
    resize: none;
}

.app_textarea_error_text {
    color: red;
    font-size: 14px;
    padding: 0;
    margin: 0;
}
</style>
