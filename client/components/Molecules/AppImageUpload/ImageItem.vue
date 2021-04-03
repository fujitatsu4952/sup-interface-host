<template>
    <div class="image-item">
        <button class="image-item__delete-button" @click="deleteImg">
            ×
        </button>
        <img class="image-item__image" v-lazy="src" />
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';

@Component({})
export default class ImageItem extends Vue {
    @Prop() public src!: string;
    @Emit('delete-img') deleteImg() {}
}
</script>

<style lang="stylus" scoped>
.image-item {
    position: relative;
    width: 100%;
    height: 80%;
    border-radius: 10px;

    .image-item__delete-button {
        position: absolute;
        top: -8px;
        right: -10px;
        width: 20px;
        height: 20px;
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        padding: unset;

        & img {
            width: 100%;
            height: 100%;
        }
    }

    .image-item__image {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: $imageShadow;
    }
}
</style>
