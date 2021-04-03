<template>
    <div class="notification_wrapper">
        <div v-for="(info, idx) in infos" :key="idx" class="notification_card">
            <list-item :info="info" @user-handle="handle" />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { infoStore } from '~/store';

// component
import ListItem from './ListItem.vue';
import { IInfoObject } from '../../../../store/modules/info';

@Component({
    components: {
        ListItem,
    },
})
export default class NotificationHandler extends Vue {
    public get infos() {
        return infoStore.getInfos;
    }
    public handle(info: IInfoObject) {
        infoStore.removeInfo(info);
    }
}
</script>
<style lang="stylus" scoped>
.notification_wrapper {
    width: 100%;
    max-width: 400px;
    min-width: 300px;
    z-index: $notification;
    .notification_card {
        margin: 10px;
        box-shadow: $defaultShadow;
    }
}
</style>
