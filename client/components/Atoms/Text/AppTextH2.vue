見出しに使う
<template>
    <div class="app-title">
        <span :class="Mode">{{ value }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppTextH2 extends Vue {
    @Prop() public value!: string;
    @Prop({ default: false }) public isActive!: boolean;
    @Prop({ default: false }) public middle!: boolean;
    @Prop({ default: false }) public bold!: boolean;
    @Prop({ default: false }) public center!: boolean;

    public get Mode() {
        if (this.isActive !== false) {
            return 'active-link';
        } else if (this.middle !== false) {
            return 'middle';
        } else if (this.bold !== false) {
            return 'bold';
        } else if (this.center! == false) {
            return 'center';
        }
    }
}
</script>

<style lang="stylus" scoped>
.app-title {
    color: #4c4c4c;
    font-size: 24px;
    line-height: 1;
    @media only screen and (max-width: 1023px) {
        font-size: 18px;
    }
}

.active-link {
    background: linear-gradient(transparent 72%, #e9bcbd 0%);
}

.middle {
    font-weight: 500;
}

.bold {
    font-weight: 600;
}
</style>
