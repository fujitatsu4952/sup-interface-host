<template>
<div v-if="planMast">
	<plan-edit v-model="planMast" @register="register" />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { PlanMast } from 'sup_abr';
import { planInteractor } from '~/abr';
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
// components
import PlanEdit from '~/components/Templates/Items/Plan/EditPlan.vue'
@Component({
	layout: 'default',
	components: {
		PlanEdit
	},
})
export default class PlanIDPage extends Vue {
	public planMast: PlanMast | null = null;
	@AsyncLoadingAndErrorHandle() public async created() {
        const shopID = this.$route.params.shopID
		const planID = this.$route.params.planID
		this.planMast = await planInteractor.fetchPlanByShopIDAndPlanID(shopID, planID)
    }

    @AsyncLoadingAndErrorHandle() public async register() {
		  this.planMast = await planInteractor.updateMast(this.planMast!, undefined);
		  this.$router.push({
			  name: 'shopID-plan',
			  params: {
				  shopID: this.$route.params.shopID
			  }
		  })
    }
}
</script>
