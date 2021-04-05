<template>
    <div>
        <span v-if="day === 'SUN'">{{ readWeekDaysText.SUN }}</span>
        <span v-else-if="day === 'MON'">{{ readWeekDaysText.MON }}</span>
        <span v-else-if="day === 'TUE'">{{ readWeekDaysText.TUE }}</span>
        <span v-else-if="day === 'WED'">{{ readWeekDaysText.WED }}</span>
        <span v-else-if="day === 'THU'">{{ readWeekDaysText.THU }}</span>
        <span v-else-if="day === 'FRI'">{{ readWeekDaysText.FRI }}</span>
        <span v-else-if="day === 'SAT'">{{ readWeekDaysText.SAT }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Scalars } from 'sup_abr';
const ReadWeekDaysText: {
    [title: string]: string;
} = {
    SUN: '日',
    MON: '月',
    TUE: '火',
    WED: '水',
    THU: '木',
    FRI: '金',
    SAT: '土',
};
@Component({})
export default class ReadWeekDays extends Vue {
    @Prop() public day!: Scalars['String'];
    public readWeekDaysText = ReadWeekDaysText;
}
</script>
