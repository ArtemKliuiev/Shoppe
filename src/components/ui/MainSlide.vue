<script setup lang="ts">
import BasePicture from '@/components/base/BasePicture.vue'
import type { DataSlide } from '@/components/mixins/data-main-slider'
import BaseButton from '@/components/base/BaseButton.vue'

interface Props {
  data: DataSlide
}

defineProps<Props>()
</script>

<template>
  <div class="main-slide">
    <BasePicture
      :src="data.image.src"
      :srcset="data.image.srcset"
      :width="data.image.width"
      :height="data.image.height"
      class="main-slide__image"
    />
  </div>

  <div class="main-slide__content">
    <h2 class="main-slide__title">
      {{ data.title }}
    </h2>

    <p class="main-slide__price">
      <span>$</span>

      {{ data.price }}
    </p>

    <BaseButton :to="data.link" class="main-slide__btn" type="bold"> View Product </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.main-slide {
  position: relative;
  width: 100%;
  height: 100%;

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__content {
    position: absolute;
    bottom: 50%;
    left: 40px;
    color: var(--background);
    transform: translateY(50%);

    @include media-down(ml) {
      left: 4%;
    }

    @include media-down(sm) {
      transform: unset;
      bottom: 25px;
      left: 3%;
    }
  }

  &__title {
    font-size: 33px;
    font-weight: 500;
    line-height: 43px;
    margin-bottom: 16px;
    letter-spacing: 0.7px;

    @include media-down(ml) {
      margin-bottom: 5%;
    }

    @include media-down(sm) {
      font-size: 20px;
      letter-spacing: 0;
      line-height: 26px;
      margin-bottom: 3%;
    }
  }

  &__price {
    font-size: 26px;
    font-weight: 400;
    line-height: 35px;
    margin-bottom: 49px;

    @include media-down(ml) {
      margin-bottom: 20%;
    }

    @include media-down(sm) {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 8%;
    }
  }

  &__btn {
    max-width: 193px;

    @include media-down(sm) {
      max-width: 90px;
    }
  }
}
</style>
