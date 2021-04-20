<template>
    <div class="add_event_modal_back" v-if="isShowCalendar && planTimelyStatus" @click.self="isShowCalendar = !isShowCalendar">
        <div class="add_event_modal">
        <validation-observer v-slot="{ invalid }" class="add_event_modal_validator">
            <app-text :value="`${date}のイベント作成`" />
            <div class="add_event_container">
                <div class="add_event_time">
                    <app-text value="開始時刻" />
                    <app-select-box :minWidthSize="80" :dataSets="startDataSets" v-model="planTimelyStatus.dateTimeStart" />
                </div>
                <div>〜</div>
                <div class="add_event_time">
                    <app-text value="終了時刻" />
                    <app-select-box :minWidthSize="80" :dataSets="endDataSets" v-model="planTimelyStatus.dateTimeEnd" />
                </div>
            </div>
            <div class="add_event_plan" v-if="availablePlans && availablePlans.length">
                <app-text value="プランの選択" />
                <app-select-box rule="required" :minWidthSize="300" :dataSets="availablePlans" v-model="planTimelyStatus.planID"/>
            </div>
            <div class="add_event_stock" v-if="availablePlans && availablePlans.length">
                <app-text value="在庫数" />
                <app-input-number rule="required" v-model="planTimelyStatus.stockNum" />
            </div>
            <div class="add_event_insale">
                <app-text value="販売する" />
                <app-input-toggle v-model="planTimelyStatus.isAvailable" />
            </div>
            <app-button :disabled="invalid" @click="register()">登録</app-button>
        </validation-observer>
        </div>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle, AsyncLoadingAndErrorHandle } from '@/abr/decorator';
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import { KeyValueObject, PlanTimelyStatus } from 'sup_abr';
import { planInteractor, planTimelyStatusInteractor } from '~/abr';
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
// import { ReservationCoordinatorInteractor, Scalars, DateStatusObject } from 'chillnn-abr-hotel';
// components
import AppText from '~/components/Atoms/Text/AppTextH4.vue';
import AppSelectBox from '~/components/Molecules/AppSelectBox/List.vue';
import AppInputNumber from '~/components/Atoms/Input/AppInputNumber.vue';
import AppInputToggle from '~/components/Atoms/Input/AppInputToggle.vue';
import AppButton from '~/components/Atoms/Button/AppButton.vue';

@Component({
    components: {
        AppText,
        AppSelectBox,
        AppInputNumber,
        AppInputToggle,
        AppButton
    }
})
export default class ClickEachDate extends Vue {
    @Prop() public date!: string
    @Prop() public readonly startTime!: string;
    @PropSync('isCalendar') public isShowCalendar!: boolean;
    public planTimelyStatus: PlanTimelyStatus | null = null;
    public availablePlans: KeyValueObject[] = [];

    @AsyncLoadingAndErrorHandle() public async created() {
        this.planTimelyStatus = await planTimelyStatusInteractor.getBlancMast(this.$route.params.shopID, this.startTime);
        this.init()
    }

    @AsyncLoadingAndErrorHandle() public async register() {
        const planTimelyStatuses:PlanTimelyStatus[] = [];
        planTimelyStatuses.push(this.planTimelyStatus!)
        await planTimelyStatusInteractor.addPlanTimelyStatusMast(planTimelyStatuses, undefined);
        this.isShowCalendar = false;
    }

    public async init() {
        const allPlan = (await planInteractor.fetchPlansByShopID(this.$route.params.shopID, undefined)).filter((plan) => { return plan.inSale && !plan.deletedAt})
        this.availablePlans = allPlan.map((plan) => {
            return {
                key: plan.name,
                value: plan.planID
            }
        })
    }

    public get startDataSets(): KeyValueObject[] {
        return startTimeList.map((item) => {
            return {
                key: item,
                value: this.date + 'T' + item,
            }
        })
    }
    public get endDataSets(): KeyValueObject[] {
        if(this.planTimelyStatus) {
            return endTimeList.map((item) => {
                return {
                    key: item,
                    value: this.date + 'T' + item,
                }
            })
        } else {
            return []
        }
    }


}
const startTimeList: string[] = ['04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
const endTimeList: string[] = ['04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];

</script>

<style lang="stylus" scoped>
.add_event_modal_back {
    width: 100vw;
    height: 100vh;
    z-index: $modal + 10;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    .add_event_modal {
        background-color: white;
        width: 50vw;
        padding: 30px 50px;
        min-width: 500px;
        border-radius: 8px;
        overflow-x:none;
        margin: 100px 0 0;
        max-height: 350px;
        height: auto;
        text-align: center;
        .add_event_modal_validator {
            height: 350px;

            .add_event_container {
                display: flex;
                margin: 30px 0 0 0;
                .add_event_time {
                    display: flex;
                    align-items: center;
                }
            }
            .add_event_plan {
                margin: 30px 0 0 0;
                display: flex;
                align-items: center;
            }
            .add_event_stock {
                display: flex;
                align-items: center;
                margin: 30px 0;
            }
            .add_event_insale {
                display: flex;
                align-items: center;
                margin: 30px 0;
            }
        }
    }
}
</style>