<template>
<div>
    <div class="event_item" :class="mode" v-if="planMast" @click="isShow = !isShow" >
        <div class="event_item_time">{{startTime}}~{{endTime}}</div>
        <div class="event_item_name">{{planMast.name}}</div>
    </div>
    <update-event-modal :startTime="startTime" :endTime="endTime" :isCalendar.sync="isShow" :planTimelyStatus.sync="localValue" :date="date" />
</div>
</template>
<script lang="ts">
// import { AsyncErrorHandle, AsyncLoadingAndErrorHandle } from '@/abr/decorator';
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import { PlanMast, PlanTimelyStatus } from 'sup_abr';
import dayjs from 'dayjs'
// components
import UpdateEventModal from './updateEvent.vue';
import AppText from '~/components/Atoms/Text/AppTextH4.vue';
import AppSelectBox from '~/components/Molecules/AppSelectBox/List.vue';
import AppInputNumber from '~/components/Atoms/Input/AppInputNumber.vue';
import AppButton from '~/components/Atoms/Button/AppButton.vue';
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
import { planInteractor } from '~/abr';

@Component({
    components: {
        UpdateEventModal,
        AppText,
        AppSelectBox,
        AppInputNumber,
        AppButton
    }
})
export default class EventItem extends Vue {
    public planMast: PlanMast | null = null
    public isShow: boolean = false
    @Prop() public value!: PlanTimelyStatus;
    @Emit('input')
    public input(_: PlanTimelyStatus) {}

    public get localValue(): PlanTimelyStatus {
        return this.value;
    }
    public set localValue(value: PlanTimelyStatus) {
        this.input(value);
    }

    public get date() {
        return dayjs(this.localValue.dateTimeStart).format('YYYY-MM-DD')
    }

    public get startTime() {
        return dayjs(this.localValue.dateTimeStart).format('HH:mm')
    }
    public get endTime() {
        return dayjs(this.localValue.dateTimeEnd).format('HH:mm')
    }

    public get mode() {
        if(!this.localValue.isAvailable) {
            return 'is_not_available'
        }
    }

    @AsyncLoadingAndErrorHandle() public async created() {
        this.planMast = ((await planInteractor.fetchPlanByShopIDAndPlanID(this.localValue.shopID, this.localValue.planID)))
        // console.log(this.planMast)
    }

}
</script>

<style lang="stylus" scoped>
.event_item {
    border: 1px solid $Lblue
    width: 90%;
    margin: 0 auto 3px;
    .event_item_time {
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        font-size: 12px;
    }
    .event_item_name {
        min-width: 100%;
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        font-size: 10px;
        word-break: break-all
    }
}
.is_not_available {
    border: 1px solid red
}
</style>