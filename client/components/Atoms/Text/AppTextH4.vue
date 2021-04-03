ノーマルテキスト
<template>
    <div class="app-text" :class="Mode" v-html="value"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppTextH4 extends Vue {
    @Prop() public value!: string;
    @Prop({ default: false }) public middle!: boolean;
    @Prop({ default: false }) public bold!: boolean;
    @Prop({ default: false }) public pink!: boolean;
    @Prop({ default: false }) public isActive!: boolean;
    @Prop({ default: false }) public gray!: boolean;

    public get Mode() {
        if (this.middle !== false) {
            return 'middle';
        } else if (this.bold !== false) {
            return 'bold';
        } else if (this.pink !== false) {
            return 'pink';
        } else if (this.isActive !== false) {
            return 'active-link';
        } else if (this.gray !== false) {
            return 'gray';
        }
    }
}
</script>

<style lang="stylus" scoped>
.app-text {
    color: #4c4c4c;
    font-size: 14px;
    @media only screen and (max-width: 1023px) {
        font-size: 14px;
    }
}

.middle {
    font-weight: 500;
}

.bold {
    font-weight: 600;
}
.pink {
    color: $primary
}
.active-link {
    background: linear-gradient(transparent 72%, #e9bcbd 0%);
}
.gray {
    color: $gray;
}
</style>
