<template>
    <div class="reservation_status" :class="className" :style="activeStyle">
        {{ status }}
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppBadgeReservationStatus extends Vue {
    @Prop({ default: false }) public active!: boolean;
    @Prop({ required: true }) public status!: string;
    @Prop({ required: true }) public activeColor!: string;
    public get isActive() {
        return !(this.active === false);
    }
    public get className() {
        if (this.isActive) {
            return 'active';
        } else {
            return 'disable';
        }
    }

    public get activeStyle() {
        if (this.isActive) {
            return {
                color: this.activeColor,
                borderColor: this.activeColor,
            };
        } else {
            return {};
        }
    }
}
</script>
<style lang="stylus" scoped>
.reservation_status {
    border: medium solid;
    border-width: 1px;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    @media only screen and (max-width: 1023px) {
        padding: 5px;
        font-size: 14px;
        margin: 0px;
    }
}

.disable {
    opacity: 0.3;
}
</style>
