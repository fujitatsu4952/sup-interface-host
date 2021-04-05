<template>
    <div class="c_calendar">
        <!-- calendar -->
        <div class="calendar_content" v-for="(month, index) in dates" :key="month.month">
            <div class="month_move">
                <!-- prev -->
                <button class="prev" v-if="index === 0" @click="goPrev">
                    <img src="~/assets/image/arrow/chevron-left.svg" alt="prev" />
                </button>
                <div class="prev_next_dammy" v-else />

                <!-- 月の表示 -->
                <slot name="month" :month="month.month"></slot>
                <!-- next -->
                <button class="next" v-if="(index === 1) | (length === 1)" @click="goNext">
                    <img src="~/assets/image/arrow/chevron-right.svg" alt="next" />
                </button>
                <div class="prev_next_dammy" v-else />
            </div>
            <div class="calendar_entity">
                <table class="month_table">
                    <thead>
                        <tr>
                            <th class="weekend" v-for="day in DAY_OF_THE_WEEKS" :key="day">
                                <!-- 曜日の表示 -->
                                <slot name="dayOfTheWeek" :day="day"></slot>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(week, idx) in computedDates(month.dates)" :key="`${month.month}${idx}`">
                            <td v-for="(date, idx) in week" :key="`${month.month}${date}${idx}`">
                                <span v-if="date">
                                    <!-- 日付の表示 -->
                                    <slot name="date" :date="date"></slot>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- <div class="SP_select_date_delete">
            <large-button statement="完了" @click="showCalendarSelect = false" reservation />
        </div> -->
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'nuxt-property-decorator';
import { DayOfTheWeek, getDateRangeArray, Scalars, getDayOfTheWeek } from 'sup_abr';
import dayjs from 'dayjs';
import LargeButton from '@/components/Atoms/Button/LargeButton.vue';

@Component({
    components: {
        LargeButton,
    },
})
export default class ReadCalendarTemplate extends Vue {
    @Prop({ default: 1 }) public length!: number;
    @PropSync('showCalendar') public showCalendarSelect!: boolean;
    public dates: {
        month: /* YYYY-MM */ string;
        dates: /* YYYY-MM-DD */ string[];
    }[] = [];
    public readonly DAY_OF_THE_WEEKS: DayOfTheWeek[] = [DayOfTheWeek.SUN, DayOfTheWeek.MON, DayOfTheWeek.TUE, DayOfTheWeek.WED, DayOfTheWeek.THU, DayOfTheWeek.FRI, DayOfTheWeek.SAT];
    public created() {
        this.changeDates(dayjs(new Date()).format('YYYY-MM-DD'));
    }
    public goPrev() {
        const first = `${this.dates[0].month}-01`;
        const start = dayjs(first)
            .add(-1, 'month')
            .format('YYYY-MM-DD');
        this.changeDates(start);
    }
    public goNext() {
        const first = `${this.dates[0].month}-01`;
        const start = dayjs(first)
            .add(1, 'month')
            .format('YYYY-MM-DD');
        this.changeDates(start);
    }
    // ====================== private =========================
    private changeDates(date: Scalars['AWSDate']) {
        const firstDate = dayjs(date)
            .startOf('month')
            .format('YYYY-MM-DD');
        const lastDate = dayjs(date)
            .add(this.length - 1, 'month')
            .endOf('month')
            .format('YYYY-MM-DD');
        let month = dayjs(firstDate).format('YYYY-MM');
        // 初期化
        this.dates = [
            {
                month,
                dates: [],
            },
        ];
        for (const date of getDateRangeArray(firstDate, lastDate)) {
            if (date.includes(month)) {
                this.dates.forEach((item) => {
                    date.includes(item.month) && item.dates.push(date);
                });
            } else {
                month = dayjs(date).format('YYYY-MM');
                this.dates.push({
                    month,
                    dates: [date],
                });
            }
        }
    }
    public computedDates(dates: string[]): string[][] {
        const blancNum = this.DAY_OF_THE_WEEKS.indexOf(getDayOfTheWeek(dates[0]));
        dates = new Array<string>(blancNum).map((_) => '').concat(dates);
        const retval = Array.apply(null, new Array(Math.floor(dates.length / 7) + 1)).map((_) => ['', '', '', '', '', '', '']);
        dates.forEach((item, idx) => {
            retval[Math.floor(idx / 7)][idx - Math.floor(idx / 7) * 7] = item;
        });
        return retval;
    }
}
</script>

<style lang="stylus" scopend>
.c_calendar {
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    border: 1px solid $boundaryBlack
    padding: 0px 0px 16px !important;
    @media only screen and (max-width: 1023px) {
        display: block;
    }

    .calendar_content {
        font-weight: bold;
        font-size: 1.2em;
        margin: 0 0px 0;
    }


    .month_move {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $boundaryBlack;
        padding: 15px 0;
        // border-radius: 8px 8px 0 0;
        @media only screen and (max-width: 1023px) {
            border-radius: 8px 8px 0 0;
        }

        .prev {
            cursor: pointer;
            padding: 0 0 0 16px;
        }

        .next {
            cursor: pointer;
            padding: 0 16px 0 0;
        }

        .prev_next_dammy {
            width: 24px;
            height: 24px;
        }
    }
    .calendar_entity {
        margin: 0 16px
        .month_table {
        border-collapse: collapse;
        font-size: 1em;

            td {
                vertical-align: top;
                width: 5em;
            }
        }
    }
    .divide_month_line {
        width: 15px;
        height: 300px
    }

    .SP_select_date_delete {
        display: none;
        @media only screen and (max-width: 1023px) {
            display: block;
            padding: 10px 0 0;
            border-top: 1px solid $boundaryBlack
        }
    }
}



.weekend {
    // border-top: 1px solid $borderMainColor;
    border-bottom: 1px solid $borderMainColor;
    font-weight: normal;
    font-size: 0.8em;
    padding: 0.5em 0;
}
</style>
