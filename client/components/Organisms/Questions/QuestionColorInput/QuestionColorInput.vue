<template>
    <question-template :borderTop="borderTop" :questionTitle="questionTitle" :required="required" >
        <div class="app_input_container">
            <input type="color" v-model="localValue" />
        </div>
    </question-template>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
// mixins
import { QuestionTemplateMixin } from '~/components/Organisms/Questions/__QuestionTemplateMixin';
// component
import AppInput from '~/components/Atoms/Input/AppInput.vue';
import QuestionTemplate from '~/components/Organisms/Questions/QuestionTemplate.vue';

@Component({
    components: {
        QuestionTemplate,
        AppInput,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionColorInput extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public rule!: string;

    // ========= v-model ==========
    @Emit('input')
    public input(_: string) {}

    public get localValue(): string {
        return this.value;
    }

    public set localValue(value: string) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.app_input_container {
    width: 100%;
}
</style>
