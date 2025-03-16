<script setup lang="ts">
import MainSlider from '@/components/reusable/MainSlider.vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import ProductCard from '@/components/reusable/ProductCard.vue'
import { dataCards } from '@/components/mixins/data-cards'
import { useBasketStorage } from '@/components/composable/use-basket-storage'
import type { DataCards } from '@/components/mixins/data-cards'

const basketStorage = useBasketStorage()

function addToBasket(card: DataCards) {
  basketStorage.add({
    id: card.id,
    count: 1,
  })
}
</script>

<template>
  <div class="main container">
    <MainSlider class="main__slider" />

    <div class="main__info">
      <h1 class="main__title">Shop The Latest</h1>

      <BaseButtonText class="main__btn" to="/shope"> View All </BaseButtonText>
    </div>

    <ul class="main__cards">
      <ProductCard
        v-for="card in dataCards"
        :key="card.title"
        :data="card"
        @addToBasket="addToBasket(card)"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.main {
  &__slider {
    margin-bottom: 65px;

    @include mixins.media-down(sm) {
      margin-bottom: 20px;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 39px;

    @include mixins.media-down(sm) {
      margin-bottom: 13px;
    }
  }

  &__title {
    font-size: 33px;
    font-weight: 500;
    line-height: 43px;
    letter-spacing: 1px;

    @include mixins.media-down(sm) {
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
    transition: color 0.3s;

    &:hover {
      @media (hover: hover) {
        color: var(--text);
      }
    }

    &:active {
      transform: scale(0.98);
    }

    @include mixins.media-down(sm) {
      font-size: 12px;
      font-weight: 400;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 83px 55px;

    @include mixins.media-down(ml) {
      gap: 50px 30px;
    }

    @include mixins.media-down(sm) {
      gap: 23px 16px;
    }

    @include mixins.media-down(xs) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
