<template>
	<div v-if="shopMast">
        <edit-shop :value="shopMast" @register="register" />
	</div>
</template>

<script lang="ts">
import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
import { Component, Vue } from 'nuxt-property-decorator';
import { ShopMast } from 'sup_abr';
import { shopInteractor } from '~/abr';
// components
import EditShop from '~/components/Templates/Items/Shop/EditShop.vue'
@Component({
	layout: 'default',
	components: {
        EditShop
	},
})
export default class ShopPage extends Vue {
    public shopMast: ShopMast | null = null
    @AsyncLoadingAndErrorHandle() public async created() {
        const shopID = this.$route.params.shopID
		this.shopMast = await shopInteractor.fetchShopMastByShopID(shopID, undefined);
    }

    @AsyncLoadingAndErrorHandle() public async register() {
		this.shopMast = await shopInteractor.updateMast(this.shopMast!, undefined);
    }
}
</script>
