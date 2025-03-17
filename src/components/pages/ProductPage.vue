<script setup lang="ts">
import ProductSlider from '@/components/reusable/ProductSlider.vue'
import { dataCards } from '@/components/mixins/data-cards'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id

const currentProduct = dataCards.find((el) => el.id === +id)

console.log(currentProduct)
</script>

<template>
  <div class="product container">
    <div class="product__main">
      <div class="product__slider">
        <ProductSlider :images="currentProduct?.images" />
      </div>

      <div class="product__content"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.product {
  &__main {
    display: flex;
    margin-top: 130px;
    gap: 5%;

    @include mixins.media-down(md) {
      margin-top: 50px;
    }

    @include mixins.media-down(sm) {
      margin-top: 2px;
      display: block;
    }
  }

  &__slider {
    flex: 0 0 56%;
    overflow: hidden;

    @include mixins.media-down(md) {
      flex: 0 0 50%;
    }
  }

  &__content {
    flex-grow: 1;
  }
}
</style>
