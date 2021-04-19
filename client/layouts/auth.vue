<template>
    <div class="auth">
        <nuxt />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// component
import MenuBar from "~/components/Templates/Common/header.vue";
@Component({
    components: {
        MenuBar,
    },
})
export default class Auth extends Vue {}
</script>
<style lang="stylus" scoped>
.default {
    background-color: $Sblue;
    min-height: calc(100vh);
}
</style>
