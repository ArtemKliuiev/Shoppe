<script setup lang="ts">
import BasePicture from '@/components/base/BasePicture.vue'
import type { DataCards } from '@/components/mixins/data-cards'
import BaseButtonText from '../base/BaseButtonText.vue'

interface Props {
  data: DataCards
}

defineProps<Props>()
</script>

<template>
  <BaseButtonText :to="'/shope/' + data.id">
    <div class="card">
      <div class="card__image">
        <BasePicture
          :src="data.image.src"
          :srcset="data.image.srcset"
          :width="data.image.width"
          :height="data.image.height"
          alt="product photo"
        />
      </div>

      <div class="card__main">
        <h4 class="card__title">
          {{ data.title }}
        </h4>

        <p class="card__price">
          <span>$</span>

          {{ data.price }}
        </p>
      </div>
    </div>
  </BaseButtonText>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.card {
  width: 100%;
  user-select: none;
  cursor: pointer;

  &:hover {
    @media (hover: hover) {
      :deep(img) {
        transform: scale(1.1);
      }
    }
  }

  &__image {
    aspect-ratio: 377/ 380;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;

    @include media-down(sm) {
      margin-bottom: 8px;
    }

    :deep(img) {
      transition: transform 0.3s;
    }
  }

  &__main {
  }

  &__title {
    font-size: 20px;
    margin-bottom: 12px;

    @include media-down(sm) {
      margin-bottom: 5px;
      font-size: 14px;
    }
  }

  &__price {
    color: var(--accent);
    font-size: 20px;
    font-weight: 500;

    @include media-down(sm) {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
