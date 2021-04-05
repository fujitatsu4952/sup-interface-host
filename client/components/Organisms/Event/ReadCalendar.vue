<template>
    <chillnn-calendar :length="1">
        <template #month="{month}">{{ month.split('-').join('.') }}</template>
        <template #dayOfTheWeek="{day}">
            <change-weekend-display :day="day" />
        </template>
        <template #date="{date}">
            <select-date-each :date="date" />
        </template>
    </chillnn-calendar>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// Component
import ChillnnCalendar from './Parts/ReadCalendarTemplate.vue';
import SelectDateEach from './Parts/ClickDateEach.vue';
import ChangeWeekendDisplay from './Parts/ReadWeekDays.vue';

@Component({
    components: {
        ChillnnCalendar,
        SelectDateEach,
        ChangeWeekendDisplay,
    },
})
export default class ReadCalendar extends Vue {
}
</script>
