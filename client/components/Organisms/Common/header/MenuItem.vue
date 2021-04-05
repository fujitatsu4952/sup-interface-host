<template>
	<div class="menu_item" @click="goMenu">
        <slot></slot>
        <div class="menu" :class="{ 'isActive': isActive }">
            <app-text :value="menu" :bold="true"  />
        </div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';

import AppHero from '~/components/Atoms/Text/AppTextH1.vue';
import AppText from '~/components/Atoms/Text/AppTextH4.vue'
@Component({
	components: {
        AppHero,
        AppText
	},
})
export default class headerMenuItem extends Vue {
    @Prop() public path!: string;
    @Prop({required: true}) menu!: string;
    public isActive: boolean = false

    @Watch('$route')
    public routerWatcher() {
        if (this.$route.name) {
            const partialMatch = this.$route.name.match(this.path + '/*');
            this.isActive = !!partialMatch;
            if (this.path === 'shopID') {
                this.isActive = this.$route.name === 'shopID';
            }
        }


    }

    public mounted() {
        this.routerWatcher()
    }

    public goMenu() {
        if(this.path === "shopID") {
            this.$router.push({
                name: 'shopID',
                params: {
                    shopID: this.$route.params.shopID
                },
            });
        } else {
             this.$router.push({
                name: this.path,
                params: {
                    shopID: this.$route.params.shopID,
                },
            });
        }
    }
}
</script>
<style lang="stylus" scoped>
.menu_item {
    text-align: center;
    cursor: pointer;
    .menu {

    }
    .isActive {
        border-bottom: 2px solid #f87e7e;
    }
}
</style>