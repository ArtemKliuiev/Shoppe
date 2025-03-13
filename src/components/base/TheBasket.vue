<script setup lang="ts">
import { onMounted, onUnmounted, watch, computed, ref, onUpdated } from 'vue'
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

const dataBasketCards = computed(() => {
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

const price = computed(() => {
  return dataBasketCards.value.reduce((acc: number, el: DataBasketCards) => {
    const priceOne = parseFloat(el.price.replace(',', '.'))

    const price = +el.count * priceOne

    acc = acc + price

    return acc
  }, 0)
})

function deletCard(id: number) {
  basketStorage.del(id)
}

function changeCard(id: number, value: string) {
  basketStorage.change(id, value)
}
</script>

<template>
  <div class="basket" ref="htmlEL">
    <div class="basket__main">
      <div class="basket__back" @click="$emit('close')">
        <BaseSvg id="back-arrow" />
      </div>

      <h3 class="basket__title">Shopping bag</h3>

      <p class="basket__info">
        {{ dataBasketCards.length }}

        items
      </p>

      <TransitionGroup class="basket__cards" name="cards" tag="ul">
        <BasketCard
          v-for="card in dataBasketCards"
          :key="card.id"
          :data="card"
          @deleteCard.once="deletCard"
          @changeCount="changeCard"
        />
      </TransitionGroup>
    </div>

    <div class="basket__bottom">
      <div class="basket__bottom-text">
        <p class="basket__bottom-info">Subtotal ( {{ dataBasketCards.length }} items)</p>

        <p class="basket__bottom-sum">
          $

          {{ price ? price.toFixed(2).replace('.', ',') : '0,00' }}
        </p>
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
  position: relative;

  &__main {
    padding: 73px 0 0 36px;
    flex-grow: 1;

    @include media-down(sm) {
      padding: 16px 0 0 16px;
      flex-grow: 0;
    }
  }

  &__back {
    position: absolute;
    left: 5px;
    top: 14px;
    width: 30px;
    height: 26px;
    padding: 5px 10px;
    fill: var(--text);
    cursor: pointer;
    user-select: none;
    transition: transform 0.3s;

    &:active {
      transform: translateX(-5px);
    }

    @include media-up(sm) {
      display: none;
    }
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
    height: calc(100vh - 272px);
    margin-top: 5px;
    overflow-x: hidden;
    overflow-y: auto;

    @include media-down(sm) {
      height: calc(100vh - 175px);
    }
  }

  &__bottom {
    border-top: 1px solid var(--gray);
    padding-top: 20px;

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

.cards-leave-active {
  transition: all 0.3s ease;
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
