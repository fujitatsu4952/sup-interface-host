<template>
	<div class="header">
        <div @click="goTop" class="header_name"><img src="https://dev-host.lost-boys-sup.com/assets/%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF.PNG" /></div>
        <div class="header_menu_items">
            <menu-item path="shopID" menu="ショップ"><img src="~assets/image/header/shop.svg" /></menu-item>
            <menu-item path="shopID-plan" menu="プラン"><img src="~assets/image/header/surfin.svg" /></menu-item>
            <menu-item path="shopID-event" menu="イベント"><img src="~assets/image/header/car.svg" /></menu-item>
        </div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import AppHero from '~/components/Atoms/Text/AppTextH1.vue';
import MenuItem from '~/components/Organisms/Common/header/MenuItem.vue'
@Component({
	components: {
        AppHero,
        MenuItem
	},
})
export default class MenuHeader extends Vue {
    public goTop() {
        this.$router.push({
            name: 'shopID',
            params: {
                shopID: this.$route.params.shopID
            },
        });
    }
}
</script>
<style lang="stylus" scoped>
.header {
    min-width: 70vw;
    padding: 15px 15vw;
    display: flex;
    background-color:$Mblue
    align-items: center;
    .header_name {
        width: 150px;
        min-width: 150px;
        img{
            width: 100px;
        }
    }
    .header_menu_items {
        display: flex;
        width: 20%;
        justify-content: space-evenly;
        img {
            min-width: 30px;
            height: 30px;
        }
    }
}
</style>