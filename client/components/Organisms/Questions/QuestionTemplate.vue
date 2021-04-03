<template>
    <div class="question_template" :class="Mode">
        <div class="question_template_title">
            <app-sub-title :value="questionTitle" :bold="true" />
            <div class="question_template_required" v-if="required"><app-text :white="true" value="必須" /></div>
        </div>
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
// component
import AppTitle from '~/components/Atoms/Text/AppTextH2.vue';
import AppSubTitle from '~/components/Atoms/Text/AppTextH3.vue';
import AppText from '~/components/Atoms/Text/AppTextH4.vue';

@Component({
    components: {
        AppTitle,
        AppSubTitle,
        AppText,
    },
})
export default class QuestionTemplate extends Vue {
    @Prop({required: true}) public questionTitle!: string;
    @Prop({ default: false }) public required!: boolean;
    @Prop({ default: true }) borderTop!: boolean;
    public get Mode() {
        if (!this.borderTop) {
            return 'noBorder';
        }
    }
}
</script>

<style lang="stylus" scoped>
.question_template {
    display: flex;
    border-top: 1px solid #cccccc;
    align-items: center;
    padding: 15px 0;
    .question_template_title {
        min-width: 30%;
        width: 30%;
        display: flex;
        align-items: center;
        .question_template_required {
            background-color: #cccccc;
            border-radius: 5px
            padding: 1px 5px;
            margin: 0 0 0 5px;
        }
    }
}
.noBorder {
    border: none
}
</style>
