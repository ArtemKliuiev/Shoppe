<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as ISwiper } from 'swiper/types'
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules'

const modulesNav = [FreeMode, Navigation, Thumbs]
const modulesMain = [Pagination, Thumbs]

const thumbsSwiper = ref<null | ISwiper>(null)

const setThumbsSwiper = (swiper: ISwiper) => {
  console.log(swiper)
  thumbsSwiper.value = swiper
}
</script>

<template>
  <div class="slider">
    <div class="slider__nav">
      <swiper
        :slidesPerView="4"
        :spaceBetween="20"
        :modules="modulesNav"
        :breakpoints="{
          1024: {
            spaceBetween: 30,
          },
          1220: {
            spaceBetween: 40,
          },
        }"
        direction="vertical"
        class="slider__nav-swiper"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-2.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-3.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-5.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-6.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-7.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-8.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-9.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
        /></swiper-slide>
      </swiper>
    </div>

    <div class="slider__main">
      <swiper
        :spaceBetween="10"
        :zoom="true"
        :modules="modulesMain"
        :thumbs="{ swiper: thumbsSwiper }"
        :pagination="{
          type: 'progressbar',
        }"
        class="slider__main-swiper"
      >
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  position: relative;
  display: flex;
  margin-bottom: 50px;
  aspect-ratio: 1/0.855;
  gap: 5.5%;

  &__nav {
    flex: 0 1 20%;

    &-swiper {
      overflow: hidden;

      height: 100%;
    }

    &-slide {
      border-radius: 8px;
      aspect-ratio: 1/1;
    }
  }

  &__main {
    flex-grow: 1;
    overflow: hidden;

    &-swiper {
      position: static;
      width: 100%;
      height: 100%;
    }
  }

  :deep(.swiper-pagination) {
    position: absolute;
    bottom: -30px;
    top: unset;
    width: 70%;
    background-color: red;
  }
}
</style>
