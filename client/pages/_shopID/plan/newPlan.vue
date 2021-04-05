<template>
<div v-if="planMast">
	<edit-plan v-model="planMast" @register="register" />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { PlanMast } from 'sup_abr';
import { planInteractor } from '~/abr';
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
// componets
import EditPlan from '~/components/Templates/Items/Plan/EditPlan.vue';
@Component({
	layout: 'default',
	components: {
		EditPlan
	},
})
export default class NewPlanPage extends Vue {
	public planMast: PlanMast | null = null;
	@AsyncLoadingAndErrorHandle() public async created() {
        const shopID = this.$route.params.shopID
		this.planMast = await planInteractor.getBlancMast(shopID);
    }

    @AsyncLoadingAndErrorHandle() public async register() {
		  this.planMast = await planInteractor.addMast(this.planMast!, undefined);
		  this.$router.push({
			  name: 'shopID-plan',
			  params: {
			  shopID: this.$route.params.shopID
		  	}
		})
    }
}
</script>
