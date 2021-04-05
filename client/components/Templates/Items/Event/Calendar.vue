<template>
<div class="calendar">
    <app-title class="calendar_title" value="イベントカレンダー" :bold="true" />
    <div class="event_calendar">
        <app-calendar />
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// components
import AppCalendar from "~/components/Organisms/Event/ReadCalendar.vue";
import AppTitle from "~/components/Atoms/Text/AppTextH2.vue";
import AppText from '~/components/Atoms/Text/AppTextH4.vue';

@Component({
    components: {
        AppCalendar,
        AppTitle,
        AppText,
    },
})
export default class EventCalendar extends Vue {

}
</script>
<style lang="stylus" scoped>
.calendar {
    margin: 0 auto;
    width: 1000px;
    .calendar_title {
        margin: 50px 0 0 0;
    }
    .event_calendar {
        background-color: white;
        margin: 30px 0 0 0;
        text-align: center;
    }
}
</style>