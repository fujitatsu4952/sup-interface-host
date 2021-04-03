<template>
    <div class="wrap">
        <h1>ショップ一覧</h1>
        <div class="shop-list">
            <div v-for="(shopMast, idx) in shopMasts" :key="idx" class="shop-card">
                <shop-list-item :shopMast="shopMast"></shop-list-item>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { ShopMast } from 'sup_abr';
// component
import ShopListItem from './ListItem.vue';

@Component({
    components: {
        ShopListItem,
    },
})
export default class ShopList extends Vue {
    @Prop() public shopMasts!: ShopMast[];
}
</script>
<style lang="stylus" scoped>
.wrap {
    padding: 100px 200px;
    @media only screen and (max-width: 1023px) {
        padding: 10px;
    }

    .shop-list {
        // margin-top: 50px;
        // display: flex;
        // flex-wrap: wrap;
        // width: 100%;
        // justify-content: space-between;
        column-count: 4;
        @media only screen and (max-width: 1023px) {
            column-count: 1;
        }

        .shop-card {
            break-inside: avoid;
            margin-bottom: 5px;
            padding-bottom: 10px;
            @media only screen and (max-width: 1023px) {
                break-inside: initial;
            }
        }
    }

    @media only screen and (max-width: 1023px) {
        padding: 10px 20px;

        .shop-list {
            .shop-card {
                width: 100%
            }
        }
    }
}
</style>
