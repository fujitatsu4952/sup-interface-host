<template>
    <div>
        <validation-provider :name="name" :rules="rule">
            <span slot-scope="{ errors }">
                <div class="app-select-box__select-box-wrapper" :class="Mode" :style="getWidth">
                    <select class="app-select-box__select-box"  :style="getWidth" v-model="localValue">
                        <template v-for="data in localKV">
                            <app-select-box-list-item :key="data.key" :text="data.key" :target="data.value" />
                        </template>
                    </select>
                </div>
                <span class="app-select-box__error-text" v-if="errors.length">※{{ errors[0] }}</span>
            </span>
        </validation-provider>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
import { KeyValueObject } from 'sup_abr';
// component
import AppSelectBoxListItem from './ListItem.vue';

@Component({
    components: {
        AppSelectBoxListItem,
    },
})
export default class AppSelectBoxList extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public dataSets!: Array<KeyValueObject | string | number>;
    @Prop() public rule!: string;
    @Prop() public widthSize?: number;
    @Prop() public minWidthSize?: number;
    @Prop({ default: false }) public large!: boolean;

    public get localKV(): KeyValueObject[] {
        return this.dataSets.map((item) => {
            if (typeof item === 'string' || typeof item === 'number') {
                return {
                    key: (item as unknown) as string,
                    value: (item as unknown) as string,
                };
            }
            return item;
        });
    }

    public get getWidth() {
        if (this.widthSize) {
            return { maxWidth: this.widthSize + 'px' };
        } else if (this.minWidthSize) {
            return { minWidth: this.minWidthSize + 'px' };
        }
    }

    public get Mode() {
        if (this.large !== false) {
            return 'large';
        }
    }

    @Emit('input')
    public input(_: string) {}
    @Emit('change')
    public change() {}

    public get localValue(): string {
        return this.value;
    }

    public set localValue(value: string) {
        this.input(value);
        this.change();
    }
}
</script>

<style lang="stylus" scoped>
.app-select-box__select-box-wrapper {
    position: relative;
    border: solid 1px $boundaryBlack;
    border-radius: 5px;
    margin: 0 5px;
    padding: 3px 0;
    background-color: white;
    @media only screen and (max-width: 1023px) {
        padding: 5px 0;
    }

    &:after {
        content: '';
        position: absolute;
        top: 10px;
        right: 8px;
        width: 6px;
        height: 6px;
        border: 0px;
        border-bottom: solid 2px #4c4c4c;
        border-right: solid 2px #4c4c4c;
        transform: rotate(45deg);
        pointer-events: none;
    }

    .app-select-box__select-box {
        position: relative;
        width: 100%;
        min-width: 60px;
        appearance: none;
        background: transparent;
        border: none;
        color: #000;
        cursor: pointer;
        outline: none;
        padding: 0 10px;
    }
}
.large {
    height: 30px;
    align-items: center;

     &:after {
        top: 14px;
    }
    .app-select-box__select-box {

    }
}


// select::-ms-expand {
//     display: none;
// }

.app-select-box__error-text {
    width: 300px;
    left: 0;
    font-size: 14px;
    color: pink;
}
</style>

<style lang="stylus"></style>
