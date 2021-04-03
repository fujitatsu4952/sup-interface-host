<template>
	<div v-if="myShops">
		<table-shop :shopMasts="myShops"></table-shop>
	</div>
</template>

<script lang="ts">
	import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
	import { Component, Vue } from 'nuxt-property-decorator';
	import { shopInteractor, companyInteractor } from '~/abr';
	import { ShopMast } from 'sup_abr';
	// component
	import TableShop from '~/components/Organisms/TableShop/List.vue';

	@Component({
		layout: 'onlypage',
		components: {
			TableShop,
		},
	})
	export default class Top extends Vue {
		public myShops: ShopMast[] = [];

		@AsyncLoadingAndErrorHandle() public async created() {
			const companyMast = await companyInteractor.fetchMyCompanyByHostUserID();
			const shopMasts = await shopInteractor.fetchShopMastsByCompanyID(companyMast.companyID, undefined);
			// 登録がなければ、新規登録へ
			if (shopMasts.length === 0) {
				this.$router.push({ name: 'new_shop' });
			}
			// 登録が１つならば１つならばショップ詳細へ
			if (shopMasts.length === 1) {
				this.$router.push({
					name: 'shopID',
					params: { shopID: shopMasts[0].shopID },
				});
			}
			// 登録が複数ならば、ショップ一覧を表示
			this.myShops = shopMasts;
		}
	}
</script>