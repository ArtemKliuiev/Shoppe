<script setup lang="ts">
import ProductSlider from '../reusable/ProductSlider.vue'
</script>

<template>
  <div class="product container">
    <div class="product__main">
      <div class="product__slider">
        <ProductSlider />
      </div>

      <div class="product__content"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product {
  &__main {
    display: flex;
    margin-top: 130px;
    gap: 5%;
  }

  &__slider {
    flex: 0 0 56%;
    overflow: hidden;
  }

  &__content {
    flex-grow: 1;
  }
}
</style>
