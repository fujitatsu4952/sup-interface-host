<template>
    <div>
        <div class="flexbox">
            <div class="hotel_default_sidebar">
                <!-- <side-menu /> -->
            </div>
            <div class="page-container">
                <notification-handler class="notification" />
                <div class="page">
                    <nuxt />
                </div>
                <!-- <hotel-footer /> -->
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// component
import NotificationHandler from '@/components/Organisms/Common/NotificationHandler/index.vue';
// import SideMenu from '@/components/Templates/Home/SideMenu.vue';
// import HotelFooter from '@/components/Organisms/Common/HotelFooter.vue';

@Component({
    components: {
        // SideMenu,
        // HotelFooter,
        NotificationHandler,
    },
})
export default class ShopPage extends Vue {}
</script>
<style lang="stylus" scoped>
.flexbox {
    display: -webkit-flex;
    display: flex;

    .hotel_default_sidebar {
        max-height: 100vh;
        position: sticky;
        top: 0;

        @media only screen and (max-width: 1000px) {
           position: absolute;
           left: 0px;
           top: 0px;
           min-height: 100vh;
           min-width: 100vw;
        }
    }

    .page-container {
        // position: absolute;
        // top: 0;
        // right: 0;
        width: calc(100% - 208px);
        background-color: #f8f8f8;
        // flex: 1;
        // display: flex;
        min-height: 100%;
        // flex-flow: column;
        @media only screen and (max-width: 1023px) {
            width: 100%
        }

        .notification {
            position: fixed;
            margin: $margin_notification;
            top: $position_top_notification;
            right: $position_right_notification;
        }
        .page {
            min-height: 72vh;
            @media only screen and (max-width: 1023px) {
                min-height: calc(100vh - 160px);
            }
        }
    }
}


@media only screen and (max-width: 1023px) {
    .page-container {
        right: 0;
        width: 100%;
        background-color: $background_color_default;
        box-sizing: border-box;
        flex: 1;
    }
}
</style>

<style lang="stylus">
html, body {
    color: #4c4c4c;
    font-family: '游ゴシック体', YuGothic, 'Noto Sans JP', sans-serif;
    font-weight: 400;
    margin: 0;
}

a {
    text-decoration: none;
}
</style>
