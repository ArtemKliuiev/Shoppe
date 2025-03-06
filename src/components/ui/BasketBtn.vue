<script setup lang="ts">
import BaseSvg from '@/components/base/BaseSvg.vue'

interface Props {
  count: number
}

const props = defineProps<Props>()

const classObject: Record<string, boolean> = {
  'basket-btn__count_empty': props.count === 0,
  'basket-btn__count_one': props.count < 10,
  'basket-btn__count_two': props.count >= 10 && props.count < 100,
  'basket-btn__count_three': props.count >= 100,
}
</script>

<template>
  <div class="basket-btn">
    <BaseSvg class="basket-btn__icon" id="basket" />

    <div class="basket-btn__count" :class="classObject">
      <span class="basket-btn__count-text">
        {{ count < 999 ? count : '999' }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as *;

.basket-btn {
  position: relative;
  width: 21px;
  height: 21px;
  cursor: pointer;
  user-select: none;

  @include media-down(sm) {
    width: 18px;
    height: 18px;
    margin-right: 18px;
  }

  &:hover {
    @include media-up(md) {
      @media (hover: hover) {
        .basket-btn {
          &__icon {
            fill: var(--text-second);
          }

          &__count {
            transform: scale(1.1);
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
    transition: transform 0.3s;

    &-text {
      font-weight: 700;
      line-height: 100%;
      font-size: 8px;

      @include media-down(sm) {
        font-size: 7px;
      }
    }

    &_empty {
      display: none;
    }

    &_one {
      right: -4px;
      top: -4px;
      height: 14px;
      width: 14px;

      @include media-down(sm) {
        right: -3px;
        top: -3px;
        height: 12px;
        width: 12px;
      }
    }

    &_two {
      right: -5px;
      top: -6px;
      height: 16px;
      width: 16px;

      @include media-down(sm) {
        height: 15px;
        width: 15px;
      }
    }

    &_three {
      right: -7px;
      top: -8px;
      height: 18px;
      width: 18px;

      @include media-down(sm) {
        height: 17px;
        width: 17px;
      }
    }
  }

  &__icon {
    fill: var(--text);
    transition: fill 0.3s;
  }
}
</style>
