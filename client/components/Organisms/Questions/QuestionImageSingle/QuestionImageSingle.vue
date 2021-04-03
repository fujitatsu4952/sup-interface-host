<template>
    <div>
        <question-template :questionTitle="questionTitle" :required="required" :borderTop="borderTop" >
            <app-image-upload-single name="main image" :rule="rule" :s3Object="localValue" :file.sync="localFile" />
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
import AppImageUploadSingle from '~/components/Molecules/AppImageUpload/SingleImage.vue';

@Component({
    components: {
        QuestionTemplate,
        AppImageUploadSingle,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionKeyVisual extends Vue {
    @Prop() public value!: S3Object;
    @Prop({ default: 'required' }) rule!: string;

    public get getMainKeyVisualUrl(): string | null {
        return hostStorageInteractor.getImageUrl(this.localValue);
    }

    // file
    @Prop() file!: File | null;
    @Emit('update:file') public emitFile(_: File | null) {}
    public get localFile() {
        return this.file;
    }
    public set localFile(file: File | null) {
        this.emitFile(file);
    }

    // ========= v-model ==========
    @Emit('input')
    public input(_: S3Object) {}

    public get localValue(): S3Object {
        return this.value;
    }

    public set localValue(value: S3Object) {
        this.input(value);
    }
}
</script>
