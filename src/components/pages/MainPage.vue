<script setup lang="ts">
import MainSlider from '@/components/reusable/MainSlider.vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import ProductCard from '@/components/reusable/ProductCard.vue'
import { dataCards } from '@/components/mixins/data-cards'
</script>

<template>
  <div class="main-page container">
    <MainSlider class="main-page__slider" />

    <div class="main-page__info">
      <h1 class="main-page__title">Shop The Latest</h1>

      <BaseButtonText class="main-page__btn" to="/shope"> View All </BaseButtonText>
    </div>

    <ul class="main-page__cards">
      <ProductCard v-for="card in dataCards" :key="card.title" :data="card" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.main-page {
  &__slider {
    margin-bottom: 65px;

    @include media-down(sm) {
      margin-bottom: 20px;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 39px;

    @include media-down(sm) {
      margin-bottom: 13px;
    }
  }

  &__title {
    font-size: 33px;
    font-weight: 500;
    line-height: 43px;
    letter-spacing: 1px;

    @include media-down(sm) {
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0;
    }
  }

  &__btn {
    color: var(--accent);
    font-size: 20px;
    font-weight: 500;
    margin-right: 2px;
    transition:
      opacity 0.3s,
      transform 0.3s;

    &:hover {
      @media (hover: hover) {
        opacity: 0.8;
      }
    }

    &:active {
      transform: scale(0.98);
    }

    @include media-down(sm) {
      font-size: 12px;
      font-weight: 400;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 83px 55px;

    @include media-down(ml) {
      gap: 50px 30px;
    }

    @include media-down(sm) {
      grid-template-columns: repeat(2, 1fr);
      gap: 23px 16px;
    }
  }
}
</style>
