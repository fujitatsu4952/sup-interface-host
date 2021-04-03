<template>
	<div class="edit_template">
        <div class="edit_template_title">
            <app-title :value="title" :bold="true" />
        </div>
        <div class="editor">
            <slot></slot>
        </div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import AppTitle from '~/components/Atoms/Text/AppTextH2.vue'
@Component({
	components: {
        AppTitle
	},
})
export default class EditTemplate extends Vue {
    @Prop({required: true}) public title!:string
}
</script>
<style lang="stylus" scoped>
.edit_template {
    margin: 50px 0 30px;
    .edit_template_title {
    }
    .editor {
        width: 940px;
        padding: 30px 30px 10px;
        background-color:white;
        margin: 30px 0 0 0;
    }
}
</style>