<template>
    <div class="shop-card-item">
        <!-- <nuxt-link :to="{ name: 'shopID', params: { shopID: shopMast.shopID } }"> -->
            <div class="img">
                <!-- 画像 -->
                <!-- <img v-lazy="src" /> -->
            </div>
            <div>
                <!-- ショップ名 -->
                <p>おめでとう</p>
                <p>{{ shopMast.name }}</p>
            </div>
        <!-- </nuxt-link> -->
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { ShopMast } from 'sup_abr';
import { hostStorageInteractor } from '~/amplify/storage';

@Component({})
export default class ShopListItem extends Vue {
    @Prop() public shopMast!: ShopMast;

    public get src() {
        if (this.shopMast.logoImage) {
            return hostStorageInteractor.getImageUrl(this.shopMast.logoImage);
        }
        return '';
    }
}
</script>
<style lang="stylus" scoped>
.shop-card-item {
    cursor: pointer;
    padding: 30px;
    border-radius: 30px;
    background-color: white;
    &:hover {
        box-shadow: $defaultShadow;
    }

    .img {
        text-align: center;
        // height: 320px;
        text-align: center;

        img {
            margin: auto;
            max-height: 95%;
            max-width: 80%;
            border-radius: 30px;
        }

        // @media only screen and (max-width: 1180px) {
        //     height: 220px;
        // }
    }
    p {
        font-size: 14px;
        color: black;
        margin-top: 10px;
        margin-bottom: 15px;
    }
}
</style>
