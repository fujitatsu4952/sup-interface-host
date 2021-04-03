<template>
    <div>
        <question-template :questionTitle="questionTitle" :required="required" :borderTop="borderTop">
            <app-image-upload-multiple name="multi image" :rule="rule" :s3Objects="localValue" :files.sync="localFile"  />
        </question-template>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
import { S3Object } from 'sup_abr';
import { hostStorageInteractor } from '~/amplify/storage';
// mixins
import { QuestionTemplateMixin } from '~/components/Organisms/Questions/__QuestionTemplateMixin';
// component
import QuestionTemplate from '~/components/Organisms/Questions/QuestionTemplate.vue';
import AppImageUploadMultiple from '~/components/Molecules/AppImageUpload/MultipleImage.vue';

@Component({
    components: {
        QuestionTemplate,
        AppImageUploadMultiple,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionKeyVisual extends Vue {
    @Prop() public value!: S3Object[];
    @Prop({ default: '' }) rule!: string;

    public get getMainKeyVisualUrls(): string[] | null {
        return this.localValue.map((item) => hostStorageInteractor.getImageUrl(item));
    }

    // file
    @Prop() files!: Array<File | S3Object> | null;
    @Emit('update:files') public emitFile(_: Array<File | S3Object> | null) {}
    public get localFile() {
        return this.files;
    }
    public set localFile(file: Array<File | S3Object> | null) {
        this.emitFile(file);
    }

    // ========= v-model ==========
    @Emit('input')
    public input(_: S3Object[]) {}

    public get localValue(): S3Object[] {
        return this.value || [];
    }

    public set localValue(value: S3Object[]) {
        this.input(value);
    }
}
</script>
