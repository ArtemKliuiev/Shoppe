<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Thumbs } from 'swiper/modules'
import type { Swiper as ISwiper } from 'swiper/types'
import type { DataImage } from '@/components/mixins/data-main-slider'
import BasePicture from '@/components/base/BasePicture.vue'

interface Props {
  images: DataImage[] | undefined
}

defineProps<Props>()
const modules = [Pagination, Thumbs]
const thumbsSwiper = ref<null | ISwiper>(null)

function setThumbsSwiper(swiper: ISwiper) {
  thumbsSwiper.value = swiper
}
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
        @swiper="setThumbsSwiper"
      >
        <swiper-slide v-for="image in images" :key="image.src" class="slider__nav-slide">
          <BasePicture
            :src="image.src"
            :srcset="image.srcset"
            :height="image.height"
            :width="image.width"
            :alt="image.alt"
          />
        </swiper-slide>
      </swiper>
    </div>

    <div class="slider__main">
      <swiper
        :spaceBetween="10"
        :zoom="true"
        :modules="modules"
        :thumbs="{ swiper: thumbsSwiper }"
        :pagination="{
          type: 'progressbar',
        }"
        class="slider__main-swiper"
      >
        <swiper-slide v-for="image in images" :key="image.src" class="slider__main-slide">
          <BasePicture
            :src="image.src"
            :srcset="image.srcset"
            :height="image.height"
            :width="image.width"
            :alt="image.alt"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.slider {
  position: relative;
  display: flex;
  margin-bottom: 40px;
  aspect-ratio: 1/0.859;
  gap: 5.5%;

  @include mixins.media-down(md) {
    aspect-ratio: 1/1.1;
  }

  @include mixins.media-down(sm) {
    aspect-ratio: 1/0.7;
  }

  @include mixins.media-down(xs) {
    margin-bottom: 30px;
    aspect-ratio: 1/0.9;
  }

  @include mixins.media-down(xxs) {
    aspect-ratio: 1/1.3;
  }

  &__nav {
    flex: 0 1 20%;

    @include mixins.media-down(md) {
      display: none;
    }

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
    bottom: -24px;
    height: 2px;
    top: unset;
    left: unset;
    width: 77%;
    right: 0;
    background-color: var(--gray);
    transition: background-color 0.3s;

    @include mixins.media-down(md) {
      width: 100%;
    }

    @include mixins.media-down(xs) {
      bottom: -15px;
    }

    span {
      background-color: var(--text-second);
      transition: background-color 0.3s;
    }
  }
}
</style>
