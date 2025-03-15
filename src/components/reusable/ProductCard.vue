<script setup lang="ts">
import BasePicture from '@/components/base/BasePicture.vue'
import type { DataCards } from '@/components/mixins/data-cards'
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  data: DataCards
}

interface Emit {
  (e: 'addToBasket'): void
}

const props = defineProps<Props>()
defineEmits<Emit>()

const router = useRouter()
const like = ref(false)

function cardClick() {
  router.push('/product/' + props.data.id)
}
</script>

<template>
  <div class="card" @click="cardClick">
    <div class="card__image">
      <BasePicture
        :src="data.image.src"
        :srcset="data.image.srcset"
        :width="data.image.width"
        :height="data.image.height"
        alt="product photo"
      />

      <div class="card__hover">
        <div class="card__buttons">
          <div class="card__btn" @click.stop="$emit('addToBasket')">
            <BaseSvg class="card__icon card__icon-basket" id="basket" />
          </div>

          <div class="card__btn">
            <BaseSvg class="card__icon card__icon-eye" id="eye" />
          </div>

          <div class="card__btn" @click.stop>
            <BaseCheckbox v-model="like" type="like" />
          </div>
        </div>
      </div>
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

      .card {
        &__hover {
          &::before {
            transform: scaleX(1);
          }
        }

        &__buttons {
          opacity: 1;
        }
      }
    }
  }

  &__image {
    position: relative;
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

  &__hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--background);
      opacity: 0.6;
      left: 0;
      transform: scaleX(0);
      top: 0;
      transition: transform 0.3s;
    }
  }

  &__buttons {
    position: relative;
    opacity: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 20px;

    @include media-down(sm) {
      gap: 14px;
    }

    @include media-down(xxs) {
      gap: 4px;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    @include media-down(sm) {
      gap: 3px;
    }

    &:hover {
      .card__icon {
        fill: var(--accent);
      }
    }
  }

  &__icon {
    fill: var(--text);
    transition:
      fill 0.3s,
      transform 0.3s;

    &:active {
      transform: scale(0.95);
    }

    &-basket {
      height: 25px;
      width: 25px;

      @include media-down(xxs) {
        height: 15px;
        width: 15px;
      }
    }

    &-eye {
      height: 32px;
      width: 32px;

      @include media-down(xxs) {
        height: 20px;
        width: 20px;
      }
    }
  }

  &__title {
    font-size: 20px;
    margin-bottom: 12px;
    display: -webkit-box;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;

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
