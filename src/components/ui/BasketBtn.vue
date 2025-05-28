<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import type { DataBasket } from '../composable/use-basket-storage'

interface Props {
  data: DataBasket[]
}

const props = defineProps<Props>()
const animation = ref(false)
const classObject = computed(() => ({
  'basket-btn_empty': props.data.length === 0,
  'basket-btn_one': props.data.length < 10,
  'basket-btn_two': props.data.length >= 10 && props.data.length < 100,
  'basket-btn_three': props.data.length >= 100,
  'basket-btn_animation': animation.value,
}))

watch(props, () => {
  animation.value = true

  setTimeout(() => {
    animation.value = false
  }, 300)
})

const currenCount = computed(() => {
  const quantity = props.data.reduce((acc, item) => acc + item.count, 0)

  return quantity < 999 ? quantity : '999'
})

</script>

<template>
  <div :class="classObject" class="basket-btn">
    <BaseSvg class="basket-btn__icon" id="basket" />

    <div class="basket-btn__count">
      <span class="basket-btn__count-text">
        {{ currenCount }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as mixins;

.basket-btn {
  position: relative;
  width: 21px;
  height: 21px;
  cursor: pointer;
  user-select: none;

  @include mixins.media-down(sm) {
    width: 18px;
    height: 18px;
    margin-right: 18px;
  }

  &:hover {
    @include mixins.media-up(md) {
      @media (hover: hover) {
        .basket-btn {
          &__icon {
            fill: var(--text-second);
          }

          &__count {
            border: 1px solid var(--text-second);
            color: var(--text-second);
          }
        }
      }
    }
  }

  &__count {
    position: absolute;
    border: 1px solid var(--text);
    color: var(--text);
    background-color: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition:
      border 0.3s,
      color 0.3s,
      background-color 0.3s;

    &-text {
      font-weight: 700;
      font-size: 8px;

      @include mixins.media-down(sm) {
        font-size: 7px;
      }
    }
  }

  &_empty {
    .basket-btn {
      &__count {
        display: none;
      }
    }
  }

  &_one {
    .basket-btn {
      &__count {
        right: -4px;
        top: -4px;
        height: 14px;
        width: 14px;

        @include mixins.media-down(sm) {
          right: -3px;
          top: -3px;
          height: 12px;
          width: 12px;
        }
      }
    }
  }

  &_two {
    .basket-btn {
      &__count {
        right: -5px;
        top: -6px;
        height: 16px;
        width: 16px;

        @include mixins.media-down(sm) {
          height: 15px;
          width: 15px;
        }
      }
    }
  }

  &_three {
    .basket-btn {
      &__count {
        right: -7px;
        top: -8px;
        height: 18px;
        width: 18px;

        @include mixins.media-down(sm) {
          height: 17px;
          width: 17px;
        }
      }
    }
  }

  &_animation {
    animation: basket-add 0.3s;
  }

  &__icon {
    fill: var(--text);
    transition: fill 0.3s;
  }
}

@keyframes basket-add {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px) scale(1.05);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
