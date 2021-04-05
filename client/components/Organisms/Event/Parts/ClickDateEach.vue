<template>
<div>
    <div class="click_date_each">
        <div class="date">
            <div class="date_num" @click="isShowCalendar = !isShowCalendar">
                <app-text :value="Number(date.split('-').pop())" />
            </div>
            <div v-if="planTimelyStatuses && planTimelyStatuses.length">
                <div v-for="(planTimelyStatus, index) in planTimelyStatuses" :key="planTimelyStatus.resourceID">
                    <event-item v-model="planTimelyStatuses[index]" />
                </div>
            </div>
        </div>
    </div>
    <event-modal v-if="isShowCalendar" :startTime="startTime" :isCalendar.sync="isShowCalendar" :date="date" />
</div>
</template>
<script lang="ts">
// import { AsyncErrorHandle, AsyncLoadingAndErrorHandle } from '@/abr/decorator';
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { PlanTimelyStatus, Scalars, addMinutes } from 'sup_abr';
import dayjs from 'dayjs';
import { planTimelyStatusRepository } from '~/abr/infrastructure';
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
// components
import AppText from '~/components/Atoms/Text/AppTextH4.vue';
import EventModal from './Parts/addEvent.vue'
import EventItem from './Parts/EventItem.vue';
@Component({
    components: {
        AppText,
        EventModal,
        EventItem
    }
})
export default class ClickEachDate extends Vue {
    @Prop() public readonly date!: Scalars['AWSDate'];
    public planTimelyStatuses: PlanTimelyStatus[] = [];
    public isShowCalendar: boolean = false
    public get startTime() {
        return addMinutes(dayjs(this.date).format('YYYY-MM-DDTHH:mm'), 240);
    }

    @AsyncLoadingAndErrorHandle() public async created() {
        this.planTimelyStatuses = await planTimelyStatusRepository.fetchStatusByShopIDAndStartDt(this.$route.params.shopID, this.startTime);
    }

    // #YYYY-MM-DDTHH:mm
}
</script>

<style lang="stylus" scoped>
.click_date_each {
    border: 1px solid #cccccc;
    .date {
        width: 100%;
        display: inline-block;
        cursor: pointer;
        .date_num {
            text-align center;
            width: 20px;
            border-bottom: 2px solid #f87e7e;
            margin: 0 auto 5px;
        }
    }
}
</style>