<script setup lang="ts">
import type { DataCards } from '@/components/mixins/data-cards'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseSvg from '@/components/base/BaseSvg.vue'
import BasePicture from '@/components/base/BasePicture.vue'
import CustomCheckbox from '@/components/ui/CustomCheckbox.vue'

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
        :src="data.images[0].src"
        :srcset="data.images[0].srcset"
        :width="data.images[0].width"
        :height="data.images[0].height"
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
            <CustomCheckbox v-model="like" type="like" />
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
@use '@/assets/styles/mixins/index.scss' as mixins;

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

    @include mixins.media-down(sm) {
      margin-bottom: 8px;
      border-radius: 4px;
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

    @include mixins.media-down(sm) {
      gap: 14px;
    }

    @include mixins.media-down(xxs) {
      gap: 4px;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    @include mixins.media-down(sm) {
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

      @include mixins.media-down(xxs) {
        height: 15px;
        width: 15px;
      }
    }

    &-eye {
      height: 32px;
      width: 32px;

      @include mixins.media-down(xxs) {
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

    @include mixins.media-down(sm) {
      margin-bottom: 5px;
      font-size: 14px;
    }
  }

  &__price {
    color: var(--accent);
    font-size: 20px;
    font-weight: 500;

    @include mixins.media-down(sm) {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
