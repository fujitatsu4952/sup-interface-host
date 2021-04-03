<template>
    <div>
        <question-template :questionTitle="questionTitle" :required="required" :borderTop="borderTop">
            <div class="toggle">
                <app-toggle v-model="localValue" :name="name" />
                <app-text :value="question" />
            </div>
        </question-template>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
// mixin
import { QuestionTemplateMixin } from '~/components/Organisms/Questions/__QuestionTemplateMixin';
// component
import AppText from '~/components/Atoms/Text/AppTextH4.vue';
import AppToggle from '~/components/Atoms/Input/AppInputToggle.vue';
import QuestionTemplate from '~/components/Organisms/Questions/QuestionTemplate.vue';

@Component({
    components: {
        AppText,
        AppToggle,
        QuestionTemplate,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionToggle extends Vue {
    @Prop() public value!: boolean;
    @Prop() public question!: string;
    @Prop() public name!: string;
    @Emit('input') public input(_: boolean) {}
    public get localValue(): boolean {
        return this.value;
    }
    public set localValue(value: boolean) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.toggle {
    display: flex;
}
</style>
