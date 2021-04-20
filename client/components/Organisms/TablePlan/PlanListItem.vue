<template>
<div class="item_plan_container">
	<div class="item_plan_name" @click="goEdit">
		<img v-lazy="image" />
		<app-sub-title :bold="true" :value="planMast.name" />
	</div>
	<div class="item_plan_price" @click="goEdit">
		<app-sub-title :value="price" />
	</div>
	<div class="item_plan_status">
		<div class="item_sale_status">
			<app-sub-title :value="inSaleStatus" />
		</div>
	</div>
	<div class="item_plan_edit" @click="goEdit">
		<img src="~assets/image/edit.svg" />
	</div>
	<div class="item_plan_delete" @click="deletePlan">
		<app-sub-title value="削除する" />
	</div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { PlanMast } from 'sup_abr';
import { planInteractor } from '~/abr'
// componets
import PlanListItem from './PlanListItem.vue'
import AppSubTitle from '~/components/Atoms/Text/AppTextH3.vue';
import { hostStorageInteractor } from '~/amplify/storage';
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
@Component({

	components: {
		PlanListItem,
		AppSubTitle
	},
})
export default class PlanList extends Vue {
	@Prop() public planMast!: PlanMast;

	public get inSaleStatus():string {
		if(this.planMast.inSale) {
			return '販売中';
		} else {
			return '未販売';
		}
	}

	public get price() {
		return `${this.planMast.price.amount}円`
	}

	public get image() {
		return hostStorageInteractor.getImageUrl(this.planMast.mainKeyVisual);
	}

	public goEdit() {
		this.$router.push({
			name: 'shopID-plan-planID',
			params: {
				shopID: this.$route.params.shopID,
				planID: this.planMast.planID
			}
		})
	}

	@AsyncLoadingAndErrorHandle() public async deletePlan() {
		await planInteractor.deletePlanMast(this.$route.params.shopID, this.planMast.planID)
	}
}
</script>
<style lang="stylus" scoped>
.item_plan_container {
	display: flex;
	align-items: center;
	border-bottom: 1px solid #cccccc;
	padding: 10px 0;
	cursor: pointer;

	.item_plan_name {
		width: 40%;
		display: flex;
		align-items: center;

		img {
			width: 100px;
			height: 100px;
			object-fit: cover;
			margin: 0 10px 0 0;
		}
	}
	.item_plan_price {
		width: 15%
	}
	.item_plan_status {
		width: 15%;
		.item_sale_status {
			background-color:$Mblue;
			padding: 5px;
			display: inline-block;
			border-radius: 5px;
		}
	}
	.item_plan_edit {
		width: 15%;
	}
	.item_plan_delete {
		width: 15%;
	}
}
</style>