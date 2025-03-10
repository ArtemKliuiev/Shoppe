<script setup lang="ts">
import { onMounted, onUnmounted, computed, ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BasketCard from '@/components/reusable/BasketCard.vue'
import { dataCards } from '@/components/mixins/data-cards'
import type { DataBasketCards, DataCards } from '@/components/mixins/data-cards'
import type { DataBasket } from '@/components/composable/use-basket-storage'

interface Props {
  data: DataBasket[]
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const htmlEL = ref<HTMLDivElement | null>(null)
const listenerClick = (e: MouseEvent) =>
  !htmlEL.value?.contains(e.target as Node | null) ? emits('close') : null

const dataBasketCard = computed(() => {
  const newArray: DataBasketCards[] = []

  props.data.forEach((basketData) => {
    const cardData: DataCards | undefined = dataCards.find((card) => card.id === basketData.id)

    if (cardData) {
      cardData.count = basketData.count

      newArray.push(cardData as DataBasketCards)
    }
  })

  return newArray
})

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
      <h3 class="basket__title">Shopping bag</h3>

      <p class="basket__info">5 items</p>

      <ul class="basket__cards">
        <BasketCard :data="dataBasketCard[0]" />
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
    padding: 73px 30px 10px 36px;
    flex-grow: 1;
  }

  &__title {
    font-size: 16px;
    margin-bottom: 20px;
    color: var(--text);
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
