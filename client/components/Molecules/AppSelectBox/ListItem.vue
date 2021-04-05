<template>
    <option type="radio" :value="target" class="select_box_item_text">{{ text }}</option>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppSelectBoxListItem extends Vue {
    @Prop() public text!: string;
    @Prop() public target!: string;
}
</script>
<style lang="stylus" scoped>
.select_box_item_text {
   
}
</style>