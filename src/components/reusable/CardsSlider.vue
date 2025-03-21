<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { useBasketStorage } from '@/components/composable/use-basket-storage'
import ProductCard from '@/components/reusable/ProductCard.vue'
import type { DataCards } from '@/components/mixins/data-cards'

interface Props {
  data: DataCards[]
}

defineProps<Props>()

const basketStorage = useBasketStorage()
const modules = [Navigation]

function addToBasket(card: DataCards) {
  basketStorage.add({
    id: card.id,
    count: 1,
  })
}
</script>

<template>
  <swiper
    :spaceBetween="12"
    :modules="modules"
    :slidesPerView="2.13"
    :breakpoints="{
      768: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1024: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
      1220: {
        spaceBetween: 54,
        slidesPerView: 3,
      },
    }"
    class="card-slider"
    loop
  >
    <swiper-slide v-for="card in data" :key="card.title" class="card-slider__slide">
      <ProductCard :data="card" @addToBasket="addToBasket(card)" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;
</style>
