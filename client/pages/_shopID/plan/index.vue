<template>
	<div v-if="planMasts">
        <list-plan :planMasts="planMasts" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { PlanMast } from 'sup_abr';
import {planInteractor} from "~/abr"
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
// components
import ListPlan from '~/components/Templates/Items/Plan/ListPlan.vue'

@Component({
	layout: 'default',
	components: {
		ListPlan
	},
})
export default class PlanListPage extends Vue {
	public planMasts: PlanMast[] = []

	@AsyncLoadingAndErrorHandle() public async created() {
		const shopID = this.$route.params.shopID;
		this.planMasts = (await planInteractor.fetchPlansByShopID(shopID, undefined)).filter((item) => {return !item.deletedAt})

	}
}
</script>
