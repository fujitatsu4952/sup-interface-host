<template>
<div>
    <client-only placeholder="...Loading">
        <validation-observer v-slot="{ invalid }">
            <div class="edit_plan">
                <edit-template title="ショップ編集">
                    <question-input questionTitle="プラン名" name="プラン名" rule="required" v-model="localValue.name" :required="true" :borderTop="false" />
                    <question-input questionTitle="キャッチコピー" name="キャッチコピー" rule="required" v-model="localValue.catchCopy" :required="true" />
                    <question-textare questionTitle="説明" name="説明" rule="required" v-model="localValue.explain" />
                    <question-image-simple questionTitle="キービジュアル" name="キービジュアル" rule="required" v-model="localValue.mainKeyVisual" :file.sync="mainKeyVisual" :required="true"  />
                    <question-image-multi questionTitle="ギャラリー" name="ギャラリー" v-model="localValue.keyVisuals" :files.sync="keyVisuals" />
                    <question-address-input questionTitle="住所" v-model="localValue.address" />
                    <question-input-number questionTitle="掲載順" v-model="localValue.sortNum" beforeText="掲載順位を" afterText="番目にする" />
                    <question-input-number questionTitle="販売価格" v-model="localValue.price.amount" beforeText="" afterText="円で販売する" />
                    <question-toggle questionTitle="販売を開始" question="販売を開始する" name="ショップ販売" v-model="localValue.inSale"  />
                </edit-template>
            </div>
            <div class="edit_save_button">
                <app-button @click="uploadImageAndRegister" :disabled="invalid">更新</app-button>
            </div>
        </validation-observer>
    </client-only>
</div>
</template>
<script lang="ts">
// import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import { PlanMast } from 'sup_abr';
// components
import EditTemplate from '~/components/Organisms/Items/EditTemplate.vue';
import AppButton from '~/components/Atoms/Button/AppButton.vue';
import QuestionInput from '~/components/Organisms/Questions/QuestionInput/QuestionInput.vue';
import QuestionTextare from '~/components/Organisms/Questions/QuestionTextarea/QuestionTextarea.vue';
import QuestionInputNumber from '~/components/Organisms/Questions/QuestionNumberInput/QuestionNumber.vue';
import QuestionImageMulti from '~/components/Organisms/Questions/QuestionImageMulti/QuestionImageMulti.vue';
import QuestionImageSimple from '~/components/Organisms/Questions/QuestionImageSingle/QuestionImageSingle.vue';
import QuestionSnsInput from '~/components/Organisms/Questions/QuestionSnsInput/QuestionSnsInput.vue';
import QuestionAddressInput from '~/components/Organisms/Questions/QuestionAddressInput/QuestionAddressInput.vue';
import QuestionToggle from '~/components/Organisms/Questions/QuestionToggle/QuestionToggle.vue';
import { S3Object } from 'sup_abr/src';
import { hostStorageInteractor } from '~/amplify/storage';
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
@Component({
    components: {
        EditTemplate,
        AppButton,
        QuestionInput,
        QuestionTextare,
        QuestionInputNumber,
        QuestionImageMulti,
        QuestionImageSimple,
        QuestionSnsInput,
        QuestionAddressInput,
        QuestionToggle
    },
})
export default class ShopEdit extends Vue {
    public mainKeyVisual: File | null = null;
    public keyVisuals: Array<File | S3Object> | null = null;
    public logoImage: File | null = null;
    @Prop() public value!: PlanMast;

    @Emit('register') public register() {}

    // ========= v-model ==========
    @Emit('input')
    public input(_: PlanMast) {}
    public get localValue(): PlanMast {
        return this.value;
    }
    public set localValue(value: PlanMast) {
        this.input(value);
    }

    /**
     * 画像のアップロード
     */
    @AsyncLoadingAndErrorHandle() public async uploadImageAndRegister() {
        await Promise.all([this.uploadImage(), this.uploadImages()]);
        this.register();
    }

    private async uploadImage() {
        if (this.mainKeyVisual) {
            this.localValue.mainKeyVisual = await hostStorageInteractor.uploadPublicImg(`${this.localValue.planID}/planmast`, `main-kv-image.${new Date().getTime()}`, this.mainKeyVisual);
        }
    }
    private async uploadImages() {
        if (this.keyVisuals && this.keyVisuals.length !== 0) {
            const promises: Promise<S3Object>[] = this.keyVisuals.map(async (item: File | S3Object, idx) => {
                if ((item as S3Object).bucket) {
                    return item as S3Object;
                }
                const file = item as File;
                return await hostStorageInteractor.uploadPublicImg(`${this.localValue.planID}/planmast`, `kv-image${idx}.${new Date().getTime()}`, file);
            });
            const res = await Promise.all(promises);
            this.localValue.keyVisuals = res;
        } else if ((this.localValue.keyVisuals || []).length && (!this.keyVisuals || !this.keyVisuals.length)) {
            this.localValue.keyVisuals = [];
        }
    }
}
</script>
<style lang="stylus" scoped>
.edit_plan {
    display: flex;
    justify-content: center;
}
.edit_save_button {
    text-align: center;
    padding: 0 0 50px 0;
}
</style>

