<template>
    <!-- <div class="app-table-status-badge-inSale" v-if="!inSale">未公開</div> -->
    <div class="app-table-status-badge-outDate" v-if="!outDate">販売期間外</div>
    <div class="app-table-status-badge-outStock" v-else-if="!outStock">
        在庫切れ
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
@Component({})
export default class AppBadgeSaleStatus extends Vue {
    // @Prop() inSale!: boolean;
    @Prop() outDate!: boolean;
    @Prop() outStock!: boolean;
}
</script>

<style lang="stylus" scoped>
.app-table-status-badge-inSale {
    background: #4c4c4c;
    width: 80px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 8px;
    padding: 7px 14px;
}

.app-table-status-badge-outDate {
    background: #4C4C4C;
    width: 80px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 8px;
    padding: 12px 6px;
    border-radius: 5px;
}

.app-table-status-badge-outStock {
    background: #f7f7f7;
    width: 80px;
    box-sizing: border-box;
    text-align: center;
    color: #000;
    font-size: 12px;
    line-height: 8px;
    padding: 12px 6px;
    border-radius: 5px;
}
</style>
