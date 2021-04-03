<template>
    <div class="page-container">
        <notification-handler class="notification" />
        <nuxt />
        <!-- <div>
            <hotel-footer></hotel-footer>
        </div> -->
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// component
import NotificationHandler from "@/components/Organisms/Common/NotificationHandler/index.vue";
// import HotelFooter from "@/components/Organisms/Common/HotelFooter.vue";
@Component({
    components: {
        NotificationHandler,
        // HotelFooter,
    },
})
export default class NewShopPage extends Vue {}
</script>
<style lang="stylus" scoped>
.page-container {
    width: 100%;
    min-height: 100vh;

    .notification {
        position: fixed;
        margin: $margin_notification;
        top: $position_top_notification;
        right: $position_right_notification;
    }
}

@media only screen and (max-width: 768px) {
    .page-container {
        position: absolute;
        top: 50px;
        width: 100%;
        min-height: 100vh;
        background-color: $background_color_default;
        flex: 1;
    }
}
</style>
