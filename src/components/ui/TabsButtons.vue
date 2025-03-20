<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { reactive, ref } from 'vue'
import BaseSvg from '../base/BaseSvg.vue'
import type { Swiper as ISwiper } from 'swiper/types'

interface Props {
  spaceDesktop: string
}

interface Emit {
  (e: 'change', value: number): void
}

defineProps<Props>()

const emit = defineEmits<Emit>()

const tabs = reactive([
  {
    title: 'Description',
  },
  {
    title: 'Aditional information',
  },
  {
    title: 'Reviews',
    count: 0,
  },
])

const activeId = ref(0)
let swiperInst: ISwiper | null = null

function getSwiper(value: ISwiper) {
  swiperInst = value
}

function toggle(id: number) {
  activeId.value = id

  emit('change', activeId.value)
}

function add() {
  if (activeId.value > tabs.length - 2) return

  activeId.value++

  swiperInst?.slideTo(activeId.value - 1)

  emit('change', activeId.value)
}

function remove() {
  if (activeId.value < 1) return

  activeId.value--

  swiperInst?.slideTo(activeId.value - 1)

  emit('change', activeId.value)
}
</script>

<template>
  <div class="tabs">
    <swiper
      spaceBetween="24"
      :breakpoints="{
        768: {
          spaceBetween: spaceDesktop,
        },
      }"
      slidesPerView="auto"
      wrapperClass="tabs__wrapper"
      :modules="[Navigation]"
      :navigation="{
        prevEl: 'prevBtn',
        nextEl: 'nextBtn',
      }"
      class="tabs__slider"
      @swiper="getSwiper"
    >
      <swiper-slide
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="{ tabs__tab_active: activeId === index }"
        :ref="activeId === index ? 'activeBat' : undefined"
        class="tabs__tab"
        @click="toggle(index)"
      >
        {{ tab.title }}{{ tab.count ? `(${tab.count})` : '' }}
      </swiper-slide>
    </swiper>

    <button
      :class="{ tabs__btn_disabled: activeId < 1 }"
      class="tabs__btn tabs__btn-prev"
      @click="remove()"
    >
      <BaseSvg class="tabs__btn-icon" id="back-arrow" />
    </button>

    <button
      :class="{ tabs__btn_disabled: tabs.length - 1 <= activeId }"
      class="tabs__btn tabs__btn-next"
      @click="add()"
    >
      <BaseSvg class="tabs__btn-icon" id="back-arrow" />
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.tabs {
  position: relative;

  @include mixins.media-down(sm) {
    padding: 0 15px;
  }

  &__slider {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--gray);
      transition: background-color 0.3s;
    }
  }

  &__tab {
    display: inline;
    width: unset;
    position: relative;
    user-select: none;
    cursor: pointer;
    color: var(--text-second);
    transition: color 0.3s;
    margin-bottom: 34px;
    font-size: 20px;

    @include mixins.media-down(md) {
      margin-bottom: 25px;
    }

    @include mixins.media-down(sm) {
      margin-bottom: 17px;
      font-size: 16px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -34px;
      height: 1px;
      background-color: var(--text);
      width: 100%;
      transform: scaleX(0);
      transition:
        transform 0.3s,
        background-color 0.3s;

      @include mixins.media-down(md) {
        bottom: -25px;
      }

      @include mixins.media-down(sm) {
        bottom: -17px;
      }
    }

    &_active {
      cursor: default;
      color: var(--text);

      &::before {
        transform: scaleX(1);
        transition: transform 0.3s 0.15s;
      }
    }
  }

  &__btn {
    position: absolute;
    z-index: 2;
    top: 2px;
    padding: 0;
    background: unset;
    border: unset;
    width: 9px;
    height: 20px;
    fill: var(--text);
    cursor: pointer;
    display: none;
    transition:
      fill 0.3s,
      opacity 0.3s;

    &:hover {
      @media (hover: hover) {
        fill: var(--text-second);
      }
    }

    @include mixins.media-down(sm) {
      display: block;
    }

    &-prev {
      left: -2px;
    }

    &-next {
      transform: rotate(180deg);
      right: -2px;
    }

    &-icon {
    }

    &_disabled {
      fill: var(--gray);
      cursor: default;

      &:hover {
        fill: var(--gray);
      }
    }
  }
}
</style>
