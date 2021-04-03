<template>
    <div class="single-image">
        <label class="single-image__label" v-show="!b64Local">
            <input class="single-image__input" type="file" @change="getImageFile" />
            <!-- 以下は装飾 -->
            <div class="single-image__input-box">
                <!-- <img src="~/assets/img/icon/images-light.svg" class /> -->
                <div>クリックまたはドラッグ&ドロップで画像をアップロード</div>
                <div class="single-image__input-box__sub-text">JPG/JPEG/PNG/GIFに対応しています</div>
            </div>
        </label>

        <div v-if="b64Local" class="single-image__image-item">
            <button class="image-item__delete-button" @click="removeImg">
                ×
            </button>
            <img class="image-item__image" v-lazy="b64Local" />
        </div>

        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <span style="display: none;">
                    <input v-model="b64Local" type="text" />
                </span>
                <p v-if="errors.length">※{{ errors[0] }}</p>
            </div>
        </ValidationProvider>
    </div>
</template>
<script lang="ts">
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
import { Component, Vue, Emit, Prop, Watch } from 'nuxt-property-decorator';
import { getImage, readUploadedFileAsBase64 } from '~/utils/imageUtil';
import { S3Object } from 'sup_abr';
import { hostStorageInteractor } from '~/amplify/storage';
// component
import ImageItem from './ImageItem.vue';

@Component({
    components: {
        ImageItem,
    },
})
export default class ImageUploadSingle extends Vue {
    @Prop() name!: string;
    @Prop() rule!: string;
    @Prop() s3Object!: S3Object;

    // file
    @Prop() file!: File | null;
    @Emit('update:file') public emitFile(_: File | null) {}
    public get localFile() {
        return this.file;
    }
    public set localFile(file: File | null) {
        this.emitFile(file);
    }

    public b64Local: string | null = null;

    @AsyncLoadingAndErrorHandle()
    public async getImageFile(event: any) {
        const imageData = await getImage(event);
        // データの取得
        this.b64Local = imageData.base64;
        // Emit
        this.emitFile(imageData.file);
    }

    public async created() {
        this.b64Local = hostStorageInteractor.getImageUrl(this.s3Object);
    }

    @Watch('file')
    public async changeView() {
        if (this.localFile) {
            this.b64Local = await readUploadedFileAsBase64(this.localFile);
        }
    }

    public removeImg() {
        this.b64Local = null;
        this.emitFile(null);
    }
}
</script>

<style lang="stylus" scoped>
.single-image {

    .single-image__label {
        position: relative;
        display: block;
        max-width: 650px;
        .single-image__input {
            position: absolute;
            display: block;
            width: 100%;
            height: 120px;
            border-width: inherit;
            border-width: inherit;
            cursor: pointer;
            opacity: 0;
        }

        .single-image__input-box {
            border: 1px solid #969696;
            border-radius: 5px;
            box-sizing: border-box;
            color: #969696;
            cursor: pointer;
            padding: 20px 0;
            text-align: center;

            & img {
                width: 40px;
                height: auto;
            }
        }

        .single-image__input-box__sub-text {
            font-size: 12px;
        }
    }

    .single-image__image-item {
        width: 50%;
        max-width: 200px;
        max-height: 200px;
        position: relative;
        .image-item__delete-button {
            position: absolute;
            top: -8px;
            right: -10px;
            width: 20px;
            height: 20px;
            background: none;
            border: none;
            cursor: pointer;
            padding: unset;

            & img {
                width: 100%;
                height: 100%;
            }
        }

        .image-item__image {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
            border-radius: 5px;
            box-shadow: $imageShadow;
        }
    }

}
</style>
