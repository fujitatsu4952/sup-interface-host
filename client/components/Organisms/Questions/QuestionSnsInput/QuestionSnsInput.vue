<template>
    <div v-if="localValue">
        <question-template :questionTitle="questionTitle" :required="required" :borderTop="borderTop">
            <div>
                <div class="sns_question">
                    <app-text class="sns_title" value="Twitter URL" />
                    <div class="input-container">
                        <app-input
                            v-model="localValue.twitterURL"
                            name="twitter url"
                            :rule="{
                                regex: twitterURLRegex,
                            }"
                        />
                    </div>
                </div>
                <div class="sns_question">
                    <app-text class="sns_title" value="Instagram URL" />
                    <div class="input-container">
                        <app-input
                            v-model="localValue.instagramURL"
                            name="instagram url"
                            :rule="{
                                regex: instagramURLRegex,
                            }"
                        />
                    </div>
                </div>
                <div class="sns_question">
                    <app-text class="sns_title" value="facebook URL" />
                    <div class="input-container">
                        <app-input
                            v-model="localValue.facebookURL"
                            name="facebook url"
                            :rule="{
                                regex: facebookURLRegex,
                            }"
                        />
                    </div>
                </div>
            </div>
        </question-template>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'nuxt-property-decorator';
import { ShopMast } from 'sup_abr';
// mixins
import { QuestionTemplateMixin } from '~/components/Organisms/Questions/__QuestionTemplateMixin';
// component
import QuestionTemplate from '~/components/Organisms/Questions/QuestionTemplate.vue';
import AppText from '~/components/Atoms/Text/AppTextH4.vue';
import AppInput from '~/components/Atoms/Input/AppInput.vue';

@Component({
    components: {
        QuestionTemplate,
        AppText,
        AppInput,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionSNSInput extends Vue {
    @Prop() public value!: ShopMast;

    public readonly twitterURLRegex = new RegExp('^https://twitter.com/.*');
    public readonly instagramURLRegex = new RegExp('^https://www.instagram.com/.*');
    public readonly facebookURLRegex = new RegExp('^https://www.facebook.com/.*');

    // ========= v-model ==========
    @Watch('localValue', { deep: true })
    public watch() {
        if (!this.localValue.twitterURL) {
            this.localValue.twitterURL = null;
        }
        if (!this.localValue.instagramURL) {
            this.localValue.instagramURL = null;
        }
        if (!this.localValue.facebookURL) {
            this.localValue.facebookURL = null;
        }
    }
    @Emit('input')
    public input(_: ShopMast) {}

    public get localValue(): ShopMast {
        return this.value;
    }

    public set localValue(value: ShopMast) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.sns_question {
    display: flex;
    align-items: center;
    margin: 5px 0;
    .sns_title {
        width:150px;
        min-width: 150px;
    }

    .input-container {
        width: 400px;
        min-width: 400px;
    }
}
</style>
