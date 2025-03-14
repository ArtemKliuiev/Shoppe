<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import MainSlide from '@/components/ui/MainSlide.vue'
import { dataMainSlider } from '@/components/mixins/data-main-slider'

const modules = [Autoplay, EffectFade, Navigation, Pagination]
</script>

<template>
  <swiper
    :spaceBetween="30"
    :autoplay="{
      delay: 5000,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    navigation
    loop
    effect="fade"
  >
    <swiper-slide v-for="slide in dataMainSlider" :key="slide.title">
      <MainSlide :data="slide" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
@use '@/assets/styles/libs/swiper-bundle.css' as *;
@use '@/assets/styles/mixins/index.scss' as *;

.swiper {
  &-slide {
    aspect-ratio: 1/0.518;
    border-radius: 16px;
    overflow: hidden;
    user-select: none;

    @include media-down(sm) {
      border-radius: 12px;
      aspect-ratio: 1/0.7;
    }

    @include media-down(xs) {
      border-radius: 8px;
      aspect-ratio: 1/1;
    }

    @include media-down(xxs) {
      aspect-ratio: 1/1.23;
    }
  }

  &-pagination {
    --swiper-pagination-bottom: 20px;
    --swiper-pagination-bullet-horizontal-gap: 6px;

    @include media-down(sm) {
      --swiper-pagination-bottom: 10px;
      --swiper-pagination-bullet-horizontal-gap: 4px;
    }

    @include media-down(xxs) {
      --swiper-pagination-bottom: 2px;
      --swiper-pagination-bullet-horizontal-gap: 3px;
    }

    &-bullet {
      position: relative;
      width: 10px;
      height: 10px;
      opacity: 1;
      border: 0 solid var(--background);
      background-color: var(--background);
      transition: background-color 0.3s;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
      }

      @include media-down(sm) {
        width: 6px;
        height: 6px;
      }

      @include media-down(xxs) {
        width: 4px;
        height: 4px;
      }

      &-active {
        background-color: unset;
        border: 1px solid var(--background);
        transition: border 0.3s;
        width: 18px;
        height: 18px;
        transform: translateY(4px);

        @include media-down(sm) {
          width: 12px;
          height: 12px;
          transform: translateY(3px);
        }

        @include media-down(xxs) {
          width: 8px;
          height: 8px;
          transform: translateY(2px);
        }
      }
    }
  }
}
</style>
