<template>
	<div>
		<event-calendar />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// components
import EventCalendar from '~/components/Templates/Items/Event/Calendar.vue';
@Component({
	layout: 'default',
	components: {
		EventCalendar
	},
})
export default class EventListPage extends Vue {
}
</script>
