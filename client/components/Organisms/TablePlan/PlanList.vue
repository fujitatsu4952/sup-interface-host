<template>
<div>
	<div v-for="planMast in planMasts" :key="planMast.planID">
		<plan-list-item :planMast="planMast" />
	</div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { PlanMast } from 'sup_abr';
// componets
import PlanListItem from './PlanListItem.vue'
@Component({

	components: {
		PlanListItem
	},
})
export default class PlanList extends Vue {
	@Prop() public planMasts!: PlanMast[]
}
</script>
