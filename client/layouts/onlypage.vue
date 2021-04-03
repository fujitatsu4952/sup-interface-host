<template>
    <div class="page-container">
        <notification-handler class="notification" />
        <div class="contents-container">
            <nuxt class="contents" />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// component
import NotificationHandler from "@/components/Organisms/Common/NotificationHandler/index.vue";
@Component({
    components: {
        NotificationHandler,
    },
})
export default class OnlyPage extends Vue {}
</script>
<style lang="stylus" scoped>
.page-container {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background-color: $background_color_default;
    flex: 1;

    .notification {
        position: fixed;
        margin: $margin_notification;
        top: $position_top_notification;
        right: $position_right_notification;
    }

    .contents-container {
        text-align: center;

        .contents {
            display: inline-block;
            position: center;
        }
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
