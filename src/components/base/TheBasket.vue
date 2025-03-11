<script setup lang="ts">
import { onMounted, onUnmounted, computed, ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BasketCard from '@/components/reusable/BasketCard.vue'
import { dataCards } from '@/components/mixins/data-cards'
import type { DataBasketCards, DataCards } from '@/components/mixins/data-cards'
import type { DataBasket } from '@/components/composable/use-basket-storage'
import { useBasketStorage } from '@/components/composable/use-basket-storage'
import BaseSvg from './BaseSvg.vue'

interface Props {
  data: DataBasket[]
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const basketStorage = useBasketStorage()
const htmlEL = ref<HTMLDivElement | null>(null)

const dataBasketCard = computed(() => {
  const newArray: DataBasketCards[] = []

  props.data.forEach((basketData) => {
    const cardData: DataCards | undefined = dataCards.find((card) => card.id === basketData.id)

    if (cardData) {
      const basketCard = cardData as DataBasketCards

      basketCard.count = basketData.count

      newArray.push(basketCard)
    }
  })

  return newArray
})

function deletCard(id: number) {
  console.log('delet')
  basketStorage.del(id)
}

function listenerClick(e: MouseEvent) {
  if (!htmlEL.value?.contains(e.target as Node | null)) {
    emits('close')
  }
}

// onMounted(() => {
//   document.addEventListener('click', listenerClick)
// })

// onUnmounted(() => {
//   document.removeEventListener('click', listenerClick)
// })
</script>

<template>
  <div class="basket" ref="htmlEL">
    <div class="basket__main">
      <div class="basket__back">
        <BaseSvg id="back-arrow" />
      </div>

      <h3 class="basket__title">Shopping bag</h3>

      <p class="basket__info">
        {{ dataBasketCard.length }}
        items
      </p>

      <ul class="basket__cards">
        <BasketCard
          v-for="card in dataBasketCard"
          :key="card.id"
          :data="card"
          @deleteCard="deletCard"
        />
      </ul>
    </div>

    <div class="basket__bottom">
      <div class="basket__bottom-text">
        <p class="basket__bottom-info">Subtotal (5 items)</p>

        <p class="basket__bottom-sum">$ 100,00</p>
      </div>

      <div class="basket__btn">
        <BaseButton type="mode"> VIEW CART </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.basket {
  display: flex;
  flex-direction: column;

  &__main {
    padding: 73px 0 10px 36px;
    flex-grow: 1;

    @include media-down(sm) {
      padding: 16px;
    }
  }

  &__back {
    width: 50px;
    height: 30px;
    fill: red;
  }

  &__title {
    font-size: 16px;
    margin-bottom: 19px;
    color: var(--text);

    @include media-down(sm) {
      text-align: center;
    }
  }

  &__info {
    color: var(--text-second);
    font-size: 12px;
  }

  &__cards {
    height: calc(100vh - 306px);
    margin: 5px 0;
    overflow: auto;
  }

  &__bottom {
    border-top: 1px solid var(--gray);
    padding-top: 5px;

    &-text {
      display: flex;
      justify-content: space-between;
      padding: 0 36px;
      margin-bottom: 7px;
      color: var(--text);
    }
  }

  &__btn {
    margin: 0 36px 25px;
  }
}
</style>
