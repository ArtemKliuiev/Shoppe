<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import MainSlide from '@/components/ui/MainSlide.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BasePicture from '@/components/base/BasePicture.vue'
import { dataMainSlider } from '@/components/mixins/data-main-slider'

const modules = [Autoplay, EffectFade, Pagination]
const slideIndex = ref(0)

</script>

<template>
  <div class="main-slider">
    <swiper
    :spaceBetween="30"
    :autoplay="{
      delay: 5000000000,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="main-slider__swiper"
    navigation
    loop
    effect="fade"
    @slideChange="slideIndex = $event.activeIndex"
  >
    <swiper-slide v-for="slide in dataMainSlider" :key="slide.title" class="main-slider__swiper-slide">
      <BasePicture
        :src="slide.image.src"
        :srcset="slide.image.srcset"
        :width="slide.image.width"
        :height="slide.image.height"
        class="main-slider__image"
      />
    </swiper-slide>
  </swiper>

    <div class="main-slider__content">
      <h2 class="main-slider__title">
        {{ dataMainSlider[slideIndex].title }}
      </h2>

      <p class="main-slider__price">
        <span>$</span>

        {{ dataMainSlider[slideIndex].price }}
      </p>

      <BaseButton :to="dataMainSlider[slideIndex].link" class="main-slider__btn" type="bold"> View Product </BaseButton>
    </div>

    <div class="main-slider__background"></div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;



.main-slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 16px;

  &__swiper{
    &-slide {
      aspect-ratio: 1/0.518;
      border-radius: 16px;
      overflow: hidden;
      user-select: none;

      @include mixins.media-down(sm) {
        border-radius: 12px;
        aspect-ratio: 1/0.7;
      }

      @include mixins.media-down(xs) {
        border-radius: 8px;
        aspect-ratio: 1/1;
      }

      @include mixins.media-down(xxs) {
        aspect-ratio: 1/1.23;
      }
    }
  }

  &__content {
    position: absolute;
    z-index: 3;
    bottom: 50%;
    left: 40px;
    color: var(--background);
    transition: color 0.3s;
    bottom: 35%;

    @include mixins.media-down(ml) {
      left: 4%;
    }

    @include mixins.media-down(sm) {
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


    @include mixins.media-down(sm) {
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
    margin-bottom: 50px;

    @include mixins.media-down(sm) {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 10px;
    }
  }

  &__btn {
    max-width: 193px;

    @include mixins.media-down(xs) {
      max-width: 90px;
    }

    &:hover {
      @media (hover: hover) {
        .main-slider {
          &__image {
            display: none;
          }
        }
      }
    }
  }

  &__background {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--text);
    opacity: 0.1;
    z-index: 2;

    @include mixins.media-down(sm) {
     display: none;
    }
  }
}

.swiper {
  &-pagination {
    --swiper-pagination-bottom: 20px;
    --swiper-pagination-bullet-horizontal-gap: 6px;

    @include mixins.media-down(sm) {
      --swiper-pagination-bottom: 10px;
      --swiper-pagination-bullet-horizontal-gap: 4px;
    }

    @include mixins.media-down(xxs) {
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

      @include mixins.media-down(sm) {
        width: 6px;
        height: 6px;
      }

      @include mixins.media-down(xxs) {
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

        @include mixins.media-down(sm) {
          width: 12px;
          height: 12px;
          transform: translateY(3px);
        }

        @include mixins.media-down(xxs) {
          width: 8px;
          height: 8px;
          transform: translateY(2px);
        }
      }
    }
  }
}
</style>
