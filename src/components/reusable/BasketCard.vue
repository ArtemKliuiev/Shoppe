<script setup lang="ts">
import BasePicture from '@/components/base/BasePicture.vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import type { DataBasketCards } from '@/components/mixins/data-cards'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  data: DataBasketCards
}

interface Emit {
  (e: 'addToBasket'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const router = useRouter()
const like = ref(false)

function cardClick() {
  router.push('/shope/' + props.data.id)
}
</script>

<template>
  <div class="basket-card" @click="cardClick">
    <div class="basket-card__image">
      <BasePicture
        :src="data.image.src"
        :srcset="data.image.srcset"
        :width="data.image.width"
        :height="data.image.height"
        alt="product photo"
      />
    </div>

    <div class="basket-card__main">
      <div class="basket-card__info">
        <h4 class="basket-card__title">
          {{ data.title }}
        </h4>

        <p class="basket-card__text">
          {{ data.type }}
        </p>

        <p class="basket-card__price">
          <span>$</span>

          {{ data.price }}
        </p>
      </div>

      <div class="basket-card__count">+ 0 -</div>
    </div>

    <div class="basket-card__close"></div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

// @media (hover: hover) {}

// @include media-down(sm) {}
.basket-card {
  position: relative;
  display: flex;
  gap: 8px;

  &__image {
    width: 136px;
    flex-grow: 0;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    border-radius: 4px;
    overflow: hidden;
  }

  &__main {
    font-size: 14px;
  }

  &__info {
  }

  &__title {
  }

  &__text {
    color: var(--text-second);
    margin-bottom: 2px;
  }

  &__price {
    color: var(--accent);
  }

  &__count {
  }

  &__close {
    position: absolute;
    user-select: none;
    cursor: pointer;
    top: 4px;
    right: 3px;
    width: 10px;
    height: 10px;
    transition: transform 0.3s;

    &:hover {
      @media (hover: hover) {
        &::before,
        &::after {
          background-color: var(--text-second);
        }
      }
    }

    &:active {
      transform: scale(0.8);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: center;
      height: 1px;
      background-color: var(--text);
      transition: background-color 0.3s;
      width: 7px;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
