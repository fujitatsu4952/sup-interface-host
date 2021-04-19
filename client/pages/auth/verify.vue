<template></template>
<script lang="ts">
	import { AsyncLoadingAndErrorHandle } from '~/abr/decorator/baseDecorator';
	import { Component, Vue } from 'nuxt-property-decorator';
	import { hostUserAuthInteractor } from '~/amplify/auth';

	@Component({
		layout: "auth",
	})
	export default class VerifyEmail extends Vue {
		@AsyncLoadingAndErrorHandle() public async created() {
			try {
				if (process.client) {
					await hostUserAuthInteractor.signUpConfirmed(unescape(this.$route.query.username as string), unescape(this.$route.query.verify_code as string));
					this.$router.push({
						name: 'auth-signin',
					});
				}
			} catch (err) {
				// 再度ログイン時のエラー
				if (err.message === 'User cannot be confirmed. Current status is CONFIRMED' || err.message === 'Invalid code provided, please request a code again.') {
					this.$router.push({
						name: 'auth-signin',
					});
					return;
				}
				throw hostUserAuthInteractor.errorHandle(err);
			}
		}
	}
</script>
