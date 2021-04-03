<template>
    <div class="info_list_item">
        <div class="wrap">
            <div class="inner icon" :class="getClass">
                <!-- <img v-if="info.type === 'INFO'" src="~/assets/img/icon/lv1/icon/check/circle/lightalert-check-white.svg" />

                <img v-if="info.type === 'WARNING'" src="~/assets/img/icon/lv1/icon/exclamation/circle/lightinfo-check-white.svg" />

                <img v-if="info.type === 'ERROR'" src="~/assets/img/icon/lv1/icon/exclamation/circle/lightinfo-check-white.svg" /> -->
            </div>
            <div class="inner text-wrapper">
                <div class="text">{{ getStatement }}</div>
            </div>
        </div>
        <div class="image-item-wrapper">
            <button class="image-item__delete-button" @click="userHandled(info)">
                <!-- <img src="~/assets/img/icon/times-circle.svg" class /> -->
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
import { IInfoObject } from '../../../../store/modules/info';

@Component({})
export default class NotificationHandleListItem extends Vue {
    @Prop({ required: true }) info!: IInfoObject;
    @Emit('user-handle') public userHandled(_: IInfoObject) {}

    public get getStatement() {
        return this.info.message;
    }
    public get getClass() {
        return {
            isInfo: this.info.type === 'INFO',
            isWarning: this.info.type === 'WARNING',
            isError: this.info.type === 'ERROR',
        };
    }
}
</script>
<style lang="stylus" scoped>
.info_list_item {
    background-color: white;
    position: relative;

    .wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        align-items: stretch; /* 縦の位置指定 */
        justify-content: space-between;
    }

    .inner {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;

        .text {
            padding: 20px 10px;
            font-size: 14px;
        }
    }

    .icon {
        width: 15%;
        text-align: center;

        img {
            margin: auto;
            width: 70%;
        }
    }

    .inner.text-wrapper {
        width: 85%;
    }

    .inner.isInfo {
        background-color: $infoColor;
    }

    .inner.isWarning {
        background-color: $warningColor;
    }

    .inner.isError {
        background-color: $errorColor;
    }

    .image-item__delete-button {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        padding: unset;

        & img {
            width: 100%;
            height: auto;
        }
    }
}
</style>
