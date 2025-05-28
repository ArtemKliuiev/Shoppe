<script setup lang="ts">
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseInput from '@/components/base/BaseInput.vue'

interface Props {
  type?: 'custom' | 'like' | 'like-two'
  id?: string
}

const props = defineProps<Props>()

const checkboxValue = defineModel<boolean>({
  required: true,
})

const classObject: Record<string, boolean> = {
  checkbox_custom: props.type === 'custom',
  checkbox_default: !props.type,
  checkbox_like: props.type === 'like' || props.type === 'like-two',
  'checkbox_like-two': props.type === 'like-two',
}
</script>

<template>
  <div :class="classObject" class="checkbox">
    <BaseInput v-model="checkboxValue" :id="id" class="checkbox__input" type="checkbox" />

    <BaseSvg class="checkbox__icon checkbox__icon-empty" id="heart" />

    <BaseSvg class="checkbox__icon checkbox__icon-fill" id="heart-fill" />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.checkbox {
  position: relative;
  cursor: pointer;

  &__input {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__icon {
    display: none;
  }

  &_default {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    border: 1px solid var(--text-second);
    border-radius: 2px;

    .checkbox {
      &__input {
        position: absolute;
        top: 0;
        left: 0;

        &::after {
          content: '';
          position: absolute;
          top: 1px;
          left: 1px;
          width: 10px;
          border-radius: 1px;
          height: 10px;
          background-color: var(--text-second);
          transition: opacity 0.3s;
          opacity: 0;
        }

        &:checked {
          &::after {
            opacity: 1;
          }
        }
      }
    }
  }

  &_custom {
    height: 20px;
    width: 33px;
    width: 33px;
    border-radius: 10px;
    height: 20px;
    background-color: var(--text-second);

    .checkbox {
      &__input {
        width: 100%;
        height: 100%;

        &::before {
          content: '';
          position: absolute;
          width: 130%;
          height: 140%;
          left: -15%;
          top: -20%;
          opacity: 0.3;

          @include mixins.media-up(sm) {
            display: none;
          }
        }

        &::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 14px;
          border-radius: 50%;
          height: 14px;
          background-color: var(--background);
          transition:
            background-color 0.3s,
            left 0.3s;
        }

        &:checked {
          &::after {
            left: 16px;
          }
        }
      }
    }
  }

  &_like {
    width: 25px;
    height: 25px;

    @include mixins.media-down(xxs) {
      height: 15px;
      width: 15px;
    }

    &:hover {
      @media (hover: hover) {
        .checkbox {
          &__icon {
            fill: var(--accent);
          }
        }
      }
    }

    .checkbox {
      &__icon {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        fill: var(--text);
        transition: fill 0.3s;

        &-fill {
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition:
            opacity 0.3s,
            fill 0.3s;
        }
      }

      &__input {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 2;

        &:checked ~ .checkbox__icon {
          &-fill {
            opacity: 1;
          }
        }
      }
    }

    &-two {
      height: 18px;
      width: 20px;

      &:hover {
        @media (hover: hover) {
          .checkbox {
            &__icon {
              fill: var(--text);
            }
          }
        }
      }

      .checkbox {
        &__icon {
          top: 2px;
          fill: var(--text-second);
        }
      }
    }
  }
}
</style>
