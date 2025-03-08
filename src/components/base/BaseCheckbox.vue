<script setup lang="ts">
import { computed } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'

interface Props {
  modelValue: boolean
  type?: 'custom' | 'like'
  id?: string
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const checkboxValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue: boolean) {
    emits('update:modelValue', newValue)
  },
})

const classObject: Record<string, boolean> = {
  checkbox_custom: props.type === 'custom',
  checkbox_like: props.type === 'like',
  checkbox_default: !props.type,
}
</script>

<template>
  <div :class="classObject" class="checkbox">
    <input v-model="checkboxValue" :id="id || undefined" type="checkbox" />

    <BaseSvg class="checkbox__icon checkbox__icon-empty" id="heart" />

    <BaseSvg class="checkbox__icon checkbox__icon-fill" id="heart-fill" />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.checkbox {
  position: relative;
  cursor: pointer;

  &__icon {
    display: none;
  }

  &_default {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    border: 1px solid var(--text-second);
    border-radius: 2px;

    input {
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

  &_custom {
    height: 20px;
    width: 33px;
    width: 33px;
    border-radius: 10px;
    height: 20px;
    background-color: var(--text-second);

    input {
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 14px;
        border-radius: 50%;
        height: 14px;
        background-color: var(--background);
        transition: left 0.3s;
      }

      &:checked {
        &::after {
          left: 16px;
        }
      }
    }
  }

  &_like {
    width: 25px;
    height: 25px;

    @include media-down(xs) {
      height: 15px;
      width: 15px;
    }

    &:hover {
      .checkbox {
        &__icon {
          fill: var(--accent);
        }
      }
    }

    .checkbox {
      &__icon {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        fill: var(--text);
        transition: fill 0.2s;

        &-fill {
          opacity: 0;
          transition:
            opacity 0.2s,
            fill 0.2s;
        }
      }
    }

    input {
      position: relative;
      z-index: 2;

      &:checked ~ .checkbox__icon {
        &-fill {
          opacity: 1;
        }
      }
    }
  }

  input {
    width: 100%;
    height: 100%;
  }
}
</style>
