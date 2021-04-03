小さいところの文字
<template>
    <span class="app-sub-text" v-html="value" :class="getClass"></span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class AppSubText extends Vue {
    @Prop() public value!: string;
    @Prop({ default: false }) public bold!: boolean;
    @Prop({ default: false }) public boldCenter!: boolean;
    @Prop({ default: false }) public pink!: boolean;
    @Prop({ default: false }) public red!: boolean;
    @Prop({ default: false }) public blue!: boolean;
    @Prop({ default: false }) public gray!: boolean;

    public get getClass() {
        if (this.bold) {
            return 'bold';
        } else if (this.boldCenter) {
            return 'boldCenter';
        } else if (this.pink !== false) {
            return 'pink';
        } else if (this.red !== false) {
            return 'red';
        } else if (this.blue !== false) {
            return 'blue';
        } else if (this.gray !== false) {
            return 'gray';
        }
        return;
    }
}
</script>

<style lang="stylus" scoped>
.app-sub-text {
    color: #4c4c4c;
    font-size: 12px;
    @media only screen and (max-width: 1023px) {
        font-size: 10px;
    }
}
.bold {
    font-weight: 600;
}
.boldCenter {
    font-weight: 600;
    text-align: center;
}
.pink {
    color: #DA9293;
}
.red {
    color: red;
}
.blue {
    color: blue;
}
.gray {
    color: $boundaryBlack
}
</style>
