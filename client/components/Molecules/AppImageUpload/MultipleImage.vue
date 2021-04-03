<template>
    <div class="multiple">
        <label class="multiple__label">
            <input class="multiple__input" type="file" multiple @change="getImageFiles" />
            <div class="multiple__input-box">
                <!-- <img src="~/assets/img/icon/images-light.svg" class /> -->
                <div>クリックまたはドラッグ&ドロップで画像をアップロード</div>
                <div class="multiple__input-box__sub-text">JPG/JPEG/PNG/GIFに対応しています</div>
            </div>
        </label>

        <div class="multiple__image-item-block">
            <template v-for="(src, idx) in b64Locals">
                <div :key="idx" class="multiple__image-item">
                    <image-item :src="src" :key="idx" @delete-img="removeImg(idx)" />
                </div>
            </template>
        </div>

        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <span style="display: none;">
                    <input v-model="b64Locals" type="text" />
                </span>
                <p v-if="errors.length">※{{ errors[0] }}</p>
            </div>
        </ValidationProvider>
    </div>
</template>
<script lang="ts">
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';
import { getImages } from '~/utils/imageUtil';
import { S3Object } from 'sup_abr';
import { hostStorageInteractor } from '~/amplify/storage';
// component
import ImageItem from './ImageItem.vue';

@Component({
    components: {
        ImageItem,
    },
})
export default class ImageUploadMultiple extends Vue {
    @Prop() name!: string;
    @Prop() rule!: string;
    @Prop() s3Objects!: S3Object[];
    public b64Locals: string[] = [];
    public files: Array<File | S3Object> = [];
    @Emit('update:files') public emitFile(_: Array<File | S3Object> | null) {}

    @AsyncLoadingAndErrorHandle() public async getImageFiles(event: any) {
        const imageDatas = await getImages(event);
        // データの取得
        imageDatas.forEach((imageData) => {
            this.b64Locals.push(imageData.base64);
            this.files.push(imageData.file);
        });
        // Emit
        this.emitFile(this.files);
    }

    public created() {
        this.b64Locals = this.s3Objects.map((s3Object) => {
            return hostStorageInteractor.getImageUrl(s3Object);
        });
        this.files = this.s3Objects;
        this.emitFile(this.files);
    }

    public removeImg(deleteIdx: number) {
        this.b64Locals = this.b64Locals.filter((_, idx) => idx !== deleteIdx);
        this.files = this.files.filter((_, idx) => idx !== deleteIdx);
        // Emit
        this.emitFile(this.files);
    }
}
</script>

<style lang="stylus" scoped>
.multiple {
    .multiple__label {
        position: relative;
        display: block;
        max-width: 650px;
        .multiple__input {
            position: absolute;
            display: block;
            width: 100%;
            height: 120px;
            border-width: inherit;
            border-width: inherit;
            cursor: pointer;
            opacity: 0;
        }
        .multiple__input-box {
            border: 1px solid $boundaryBlack;
            border-radius: 5px;
            box-sizing: border-box;
            color: #a0a0a0;
            cursor: pointer;
            padding: 20px 0;
            text-align: center;

            & img {
                width: 40px;
                height: auto;
            }

            .multiple__input-box__sub-text {
                font-size: 12px;
            }
        }
    }
}

.multiple__image-item-block {
    display: flex;
    flex-wrap: wrap;
    max-width: 630px;
}

.multiple__image-item {
    width: 22.5%;
    margin: 10px 3% 1rem 0;

    &:nth-of-type(4n) {
        margin: 10px 0 1rem 0;
    }
}
</style>
