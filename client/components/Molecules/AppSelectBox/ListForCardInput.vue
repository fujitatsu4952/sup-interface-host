<template>
    <span>
        <validation-provider :name="name" :rules="rule">
            <span slot-scope="{ errors }">
                <select class="select_card" v-model="localValue">
                    <template v-for="data in localKV">
                        <app-select-box-list-item :key="data.key" :text="data.key" :target="data.value"></app-select-box-list-item>
                    </template>
                </select>
                <p v-if="errors[0]">{{ errors[0] }}</p>
                <p v-else>&nbsp;</p>
            </span>
        </validation-provider>
    </span>
</template>
<script lang="ts">
import { Component } from 'nuxt-property-decorator';
// component
import AppSelectBoxListItem from './ListItem.vue';
// mixins
import List from './List.vue';

@Component({
    components: {
        AppSelectBoxListItem,
    },
})
export default class AppSelectBoxListForCardInput extends List {}
</script>

<style lang="stylus" scoped>
.select_card {
    border: none;
    width: 100%;
    background-color: $sectionBackgroundColor;
}

p {
    word-break: break-all;
}
</style>
