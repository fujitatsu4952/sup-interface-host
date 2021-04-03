ただの×ボタン
<template>
    <div class="batsu" :class="Mode" @click="click">×</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';

@Component({})
export default class AppTextH1 extends Vue {
    @Prop({ default: false }) public white!: boolean;

    public get Mode() {
        if (this.white !== false) {
            return 'white';
        }
    }


    @Emit('click')
    public click() {}
}
</script>

<style lang="stylus" scoped>
.batsu {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
}
.white {
    color: white;
}
</style>
