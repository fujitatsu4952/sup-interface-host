<template>
    <div>
        <question-template :questionTitle="questionTitle" :required="required" :borderTop="borderTop">
            <div class="app_textarea_container">
                <app-textarea v-model="localValue" :rule="localRule" :name="name" />
                <span style="font-size:12px">{{ localValue.length }}文字</span>
            </div>
        </question-template>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
// mixins
import { QuestionTemplateMixin } from '~/components/Organisms/Questions/__QuestionTemplateMixin';
// component
import AppTextarea from '~/components/Atoms/Input/AppInputTextarea.vue';
import QuestionTemplate from '~/components/Organisms/Questions/QuestionTemplate.vue';

@Component({
    components: {
        QuestionTemplate,
        AppTextarea,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionTextarea extends Vue {
    @Prop() public value!: string | null;
    @Prop() public name?: string;
    @Prop() public rule!: string;

    public get localRule() {
        const pre = (this.rule.length && this.rule + '|') || '';
        return pre + 'max:500';
    }


    // ========= v-model ==========
    @Emit('input')
    public input(_: string) {}

    public get localValue(): string {
        if (!this.value) {
            const init = '';
            this.localValue = init;
            return init;
        }
        return this.value;
    }

    public set localValue(value: string) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.app_textarea_container {
    width: 620px;
}
</style>
