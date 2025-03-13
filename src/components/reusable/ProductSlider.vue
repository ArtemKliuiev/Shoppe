<script lang="ts" setup>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const modules = [FreeMode, Navigation, Thumbs]

const thumbsSwiper = ref(null)

// const setThumbsSwiper = (swiper) => {
//   thumbsSwiper.value = swiper
// }
</script>

<template>
  <div class="slider">
    <div class="slider__nav">
      <swiper
        :slidesPerView="4"
        :spaceBetween="20"
        :modules="modules"
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
      >
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-2.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-2.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
        /></swiper-slide>
        <swiper-slide class="slider__nav-slide"
          ><img src="https://swiperjs.com/demos/images/nature-2.jpg"
        /></swiper-slide>
      </swiper>
    </div>

    <div class="slider__main">
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="slider__main-swiper"
      >
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
        ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  display: flex;
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
      width: 100%;
      height: 100%;
    }
  }
}
</style>
