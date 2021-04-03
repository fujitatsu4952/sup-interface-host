<template>
<div>
    <client-only placeholder="...Loading">
        <validation-observer v-slot="{ invalid }">
            <div class="edit_shop">
                <edit-template title="ショップ編集">
                    {{localValue}}
                    <question-input questionTitle="ショップ名" name="ショップ名" rule="required" v-model="localValue.name" :required="true" :borderTop="false" />
                    <question-input questionTitle="キャッチコピー" name="キャッチコピー" rule="required" v-model="localValue.catchCopy" :required="true" />
                    <question-image-simple questionTitle="ロゴイメージ" name="ロゴイメージ" rule="required" v-model="localValue.logoImage" :file.sync="logoImage" :required="true"  />
                    <question-image-simple questionTitle="キービジュアル" name="キービジュアル" rule="required" v-model="localValue.keyVisual" :file.sync="mainKeyVisual" :required="true"  />
                    <question-image-multi questionTitle="ギャラリー" name="ギャラリー" v-model="localValue.keyVisuals" :files.sync="keyVisuals" />
                    <question-address-input questionTitle="住所" v-model="localValue.address" />
                    <question-input questionTitle="電話番号" name="電話番号" v-model="localValue.tel" />
                    <question-input questionTitle="メールアドレス" rule="required|email" name="メールアドレス" v-model="localValue.email" :required="true" />
                    <question-sns-input questionTitle="SNS情報" v-model="localValue" />
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
import { ShopMast } from 'sup_abr';
// components
import EditTemplate from '~/components/Organisms/Items/EditTemplate.vue';
import AppButton from '~/components/Atoms/Button/AppButton.vue';
import QuestionInput from '~/components/Organisms/Questions/QuestionInput/QuestionInput.vue';
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
    @Prop() public value!: ShopMast;

    @Emit('register') public register() {}

    // ========= v-model ==========
    @Emit('input')
    public input(_: ShopMast) {}
    public get localValue(): ShopMast {
        return this.value;
    }
    public set localValue(value: ShopMast) {
        this.input(value);
    }

    /**
     * 画像のアップロード
     */
    @AsyncLoadingAndErrorHandle() public async uploadImageAndRegister() {
        await Promise.all([this.uploadImage(), this.uploadImages(), this.uploadImageLogo()]);
        this.register();
    }

    private async uploadImage() {
        if (this.mainKeyVisual) {
            this.localValue.keyVisual = await hostStorageInteractor.uploadPublicImg(`${this.localValue.shopID}/shopmast`, `main-kv-image.${new Date().getTime()}`, this.mainKeyVisual);
        }
    }
    private async uploadImageLogo() {
        if (this.logoImage) {
            this.localValue.logoImage = await hostStorageInteractor.uploadPublicImg(`${this.localValue.shopID}/shopmast`, `logo-image.${new Date().getTime()}`, this.logoImage);
        }
    }
    private async uploadImages() {
        if (this.keyVisuals && this.keyVisuals.length !== 0) {
            const promises: Promise<S3Object>[] = this.keyVisuals.map(async (item: File | S3Object, idx) => {
                if ((item as S3Object).bucket) {
                    return item as S3Object;
                }
                const file = item as File;
                return await hostStorageInteractor.uploadPublicImg(`${this.localValue.shopID}/shopmast`, `kv-image${idx}.${new Date().getTime()}`, file);
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
.edit_shop {
    display: flex;
    justify-content: center;
}
.edit_save_button {
    text-align: center;
    padding: 0 0 50px 0;
}
</style>

