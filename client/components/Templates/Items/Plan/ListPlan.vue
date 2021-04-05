<template>
<div class="list_plan">
    <div class="list_plan_title">
        <app-title value="プラン一覧" :bold="true" />
        <div><app-button @click="addPlan()">新規作成</app-button></div>
    </div>
    <div class="list">
        <div class="list_plan_menu_container">
            <div class="list_plan_menu_name">
                <app-text :bold="true" value="プラン名" />
            </div>
            <div class="list_plan_menu_price">
                <app-text :bold="true" value="価格" />
            </div>
            <div class="list_plan_menu_status">
                <app-text :bold="true" value="販売ステータス" />
            </div>
            <div class="list_plan_menu_edit">
                <app-text :bold="true" value="編集" />
            </div>
            <div class="list_plan_menu_delete">
                <app-text :bold="true" value="削除" />
            </div>
        </div>
        <div class="list_plan_items">
            <plan-list :planMasts="planMasts" />
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { PlanMast } from 'sup_abr';
// components
import AppTitle from "~/components/Atoms/Text/AppTextH2.vue";
import AppText from '~/components/Atoms/Text/AppTextH4.vue';
import PlanList from '~/components/Organisms/TablePlan/PlanList.vue';
import AppButton from '~/components/Atoms/Button/AppButton.vue';

@Component({
    components: {
        AppTitle,
        AppText,
        PlanList,
        AppButton
    },
})
export default class ListPlan extends Vue {
    @Prop() public planMasts!: PlanMast[]

    public addPlan() {
        this.$router.push({
            name: 'shopID-plan-newPlan',
            params: {
                shopID: this.$route.params.shopID
            }
        })
    }

}
</script>
<style lang="stylus" scoped>
.list_plan {
    width: 1000px;
    margin: 50px auto;
    padding: 0 0 50px 0;
    .list_plan_title {
        display: flex;
        justify-content: space-between;
    }
    .list {
        margin: 30px 0 0 0;
        padding: 30px;
        background-color: white;
        .list_plan_menu_container {
            display: flex;
            border-bottom: 1px solid #cccccc;
            padding:0 0 5px 0;
            width: 100%;
            .list_plan_menu_name {
                width: 40%
            }
            .list_plan_menu_price {
                width: 15%
            }
            .list_plan_menu_status {
                width: 15%
            }
            .list_plan_menu_edit {
                width: 15%;
            }
            .list_plan_menu_delete {
                width: 15%;
            }
        }
    }
}
</style>