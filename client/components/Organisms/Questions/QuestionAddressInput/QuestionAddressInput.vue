<template>
    <div v-if="localValue">
        <question-template :questionTitle="questionTitle" :required="required" :borderTop="borderTop">
            <div>
            <!-- 郵便番号 -->
            <div class="postalcode_input_container">
                <app-text class="address_title_new" value="郵便番号" />
                <div class="address_input">
                    <!-- 郵便番号は必須にしていない -->
                    <app-input v-model="localValue.postalCode" name="郵便番号" placeholder="例) 1234567"></app-input>
                </div>
            </div>

            <!-- 都道府県 -->
            <div class="placeaddress_input_container">
                <app-text class="address_title_new" value="都道府県" />
                <div class="address_input">
                    <app-input v-model="localValue.pref" :rule="rule" name="都道府県" placeholder="例) 京都府"></app-input>
                </div>
            </div>

            <!-- 市区町村 -->
            <div class="placeaddress_input_container">
                <app-text class="address_title_new" value="市区町村" />
                <div class="address_input">
                    <app-input v-model="localValue.city" :rule="rule" name="市区町村" placeholder="例) 京都市南区"></app-input>
                </div>
            </div>
            <!-- 番地 -->
            <div class="placeaddress_input_container">
                <app-text class="address_title_new" value="市区町村以降" />
                <div class="address_input">
                    <app-input v-model="localValue.town" :rule="rule" name="市区町村以降" placeholder="例) 東九条南烏丸町16"></app-input>
                </div>
            </div>
        </div>
        </question-template>
    </div>
</template>

<script lang="ts" scoped>
// import { AsyncLoadingAndErrorHandle } from '@/abr/decorator/baseDecorator';
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
import { AddressObject } from 'sup_abr';
// import { fetchJaAddressByPostalCode } from '@/util/addressUtil';
// mixins
import { QuestionTemplateMixin } from '~/components/Organisms/Questions/__QuestionTemplateMixin';
// component
import AppSubText from '~/components/Atoms/Text/AppTextH5.vue';
import AppText from '~/components/Atoms/Text/AppTextH4.vue';
import AppInput from '~/components/Atoms/Input/AppInput.vue';
import AppTitle from '~/components/Atoms/Text/AppTextH2.vue';
import QuestionTemplate from '~/components/Organisms/Questions/QuestionTemplate.vue';

@Component({
    components: {
        QuestionTemplate,
        AppSubText,
        AppText,
        AppInput,
        AppTitle,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionAddressInput extends Vue {
    // ========= v-model ==========
    @Prop({ default: 'required' }) public rule!: string;
    @Prop() public value!: AddressObject;
    @Emit('input') public input(_: AddressObject) {}
    public get localValue(): AddressObject {
        return this.value;
    }
    public set localValue(value: AddressObject) {
        this.input(value);
    }

    public created() {
        if (!this.value) {
            this.localValue = {
                nationality: 'ja',
            } as AddressObject;
        }
    }

    // @Watch('value.postalCode')
    // @AsyncLoadingAndErrorHandle()
    // public async fetchAddress() {
    //     if (this.localValue.postalCode && (this.localValue.postalCode.length === 7 || this.localValue.postalCode.length === 8)) {
    //         await this.$nextTick();
    //         this.$nuxt.$loading.start();

    //         const res = await fetchJaAddressByPostalCode(this.localValue.postalCode);
    //         this.localValue = {
    //             ...this.localValue,
    //             pref: res.pref || this.localValue.pref,
    //             city: res.city || this.localValue.city,
    //             town: res.town || this.localValue.town,
    //         };
    //         this.$nuxt.$loading.finish();
    //     }
    // }
}
</script>

<style lang="stylus">
.placeaddress_input_container {
    display: flex;
    align-items: center;
    margin: 5px 0 0px 0;
    .address_title_new {
        width:150px;
        min-width: 150px;
    }

    .address_input {
        width: 400px;
        min-width: 400px;
    }
}
.postalcode_input_container {
    display: flex;
    align-items: center;
    margin: 0 0 15px 0;
    .address_title_new {
        width:150px;
        min-width: 150px;
    }

    .address_input {
        width: 400px;
        min-width: 400px;
    }
}
</style>
