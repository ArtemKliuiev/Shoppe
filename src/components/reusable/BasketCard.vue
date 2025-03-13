<script setup lang="ts">
import { ref, watch } from 'vue'
import BasePicture from '@/components/base/BasePicture.vue'
import CountItems from '@/components/ui/CountItems.vue'
import type { DataBasketCards } from '@/components/mixins/data-cards'
import BaseButtonText from '../base/BaseButtonText.vue'

interface Props {
  data: DataBasketCards
}

interface Emit {
  (e: 'deleteCard', id: number): void
  (e: 'changeCount', id: number, value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const count = ref(props.data.count)

watch(count, () => {
  emit('changeCount', props.data.id, count.value)
})
</script>

<template>
  <div class="basket-card">
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
          <BaseButtonText :to="'/product/' + data.id">
            {{ data.title }}
          </BaseButtonText>
        </h4>

        <p class="basket-card__text">
          {{ data.type }}
        </p>

        <p class="basket-card__price">
          <span>$</span>

          {{ data.price }}
        </p>
      </div>

      <div class="basket-card__count">
        <span class="basket-card__count-text">QTY:</span>

        <CountItems v-model="count" />
      </div>
    </div>

    <div class="basket-card__close" @click.stop="$emit('deleteCard', data.id)"></div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.basket-card {
  max-width: 293px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  gap: 7px;

  @include media-down(sm) {
    max-width: 93vw;
  }

  @include media-down(xs) {
    max-width: 88vw;
    margin-bottom: 25px;
  }

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    padding-right: 20px;
  }

  &__text {
    color: var(--text-second);
    margin-bottom: 2px;
  }

  &__price {
    color: var(--accent);
  }

  &__count {
    display: flex;
    align-items: center;

    &-text {
      font-size: 12px;
      color: var(--text-second);
    }
  }

  &__close {
    position: absolute;
    user-select: none;
    cursor: pointer;
    top: 4px;
    right: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition:
      transform 0.3s,
      background-color 0.3;

    @include media-down(sm) {
      width: 16px;
      height: 16px;
      top: 1px;
      right: 2px;
    }

    &:hover {
      @media (hover: hover) {
        background-color: var(--text);

        &::before,
        &::after {
          background-color: var(--background);
        }
      }
    }

    &:active {
      transform: scale(0.9);
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

      @include media-down(sm) {
        width: 8px;
      }
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
