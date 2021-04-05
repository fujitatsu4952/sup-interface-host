<template>
    <div>
        <question-template :questionTitle="questionTitle" :required="required"  :borderTop="borderTop">
            <div class="number-input-container">
                <app-text :value="beforeText" />
                <app-input-number v-model="localValue" :rule="rule" :name="name" :widthSize="160" />
                <app-text class="number-input-text" :value="afterText" />
            </div>
        </question-template>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
// mixins
import { QuestionTemplateMixin } from '~/components/Organisms/Questions/__QuestionTemplateMixin';
// component
import QuestionTemplate from '~/components/Organisms/Questions/QuestionTemplate.vue';
import AppInputNumber from '~/components/Atoms/Input/AppInputNumber.vue';
import AppText from '~/components/Atoms/Text/AppTextH4.vue';

@Component({
    components: {
        QuestionTemplate,
        AppInputNumber,
        AppText,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionMaxRoomNum extends Vue {
    @Prop() public beforeText!: string;
    @Prop() public afterText!: string;
    @Prop() public value!: number;
    @Prop() public name?: string;
    @Prop() public rule!: string;

    // ========= v-model ==========

    @Emit('input')
    public input(_: number) {}

    public get localValue(): number {
        return this.value;
    }

    public set localValue(value: number) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.number-input-container {
    display: flex;
    align-items: center;
    .number-input-text {
        margin: 0 0 0 5px;
    }
}
</style>
