import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export class QuestionTemplateMixin extends Vue {
    @Prop({ default: false }) public required!: boolean;
    @Prop({ required: true }) public questionTitle!: string;
    @Prop({ default: true }) public borderTop!: boolean;
}
