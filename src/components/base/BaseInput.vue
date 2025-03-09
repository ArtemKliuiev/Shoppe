<script setup lang="ts">
import { computed } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'

interface Props {
  modelValue: string
  placeholder?: string
  isLoading?: boolean
  type?: 'search' | 'footer'
  errorText?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const text = computed({
  get() {
    return props.modelValue
  },
  set(newValue: string) {
    emits('update:modelValue', newValue)
  },
})

const classObject: Record<string, boolean> = {
  input_default: !props.type,
  input_search: props.type === 'search',
  input_footer: props.type === 'footer',
  input_error: Boolean(props.errorText),
}
</script>

<template>
  <div :class="classObject" class="input">
    <input v-model="text" :placeholder="placeholder" type="text" />

    <template v-if="props.type === 'search'">
      <div :class="{ 'input__search-line_active': isLoading }" class="input__search-line"></div>

      <BaseSvg class="input__search-icon" id="search" />
    </template>

    <template v-if="props.type === 'footer'">
      <BaseSvg class="input__footer-icon" id="footer-arrow" />

      <label class="input__footer-error">
        {{ errorText }}
      </label>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as *;

input {
  box-sizing: border-box;
  width: 100%;
  color: var(--text-second);
}

.input {
  position: relative;

  &__search {
    &-line {
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 20px;
      background-color: var(--gray);
      pointer-events: none;
      clip-path: polygon(0 88%, 100% 88%, 100% 100%, 0 100%);
      border-radius: 0 0 4px 4px;
      width: 100%;
      transition: opacity 0.3s;
      overflow: hidden;
      opacity: 0;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        animation: loading 1.2s infinite ease;
        background-color: var(--accent);
      }

      &_active {
        opacity: 1;
      }
    }

    &-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
      width: 14px;
      height: 14px;
      fill: var(--text-second);
    }
  }

  &__footer {
    &-icon {
      padding: 5px;
      position: absolute;
      top: 18px;
      right: -5px;
      width: 35px;
      height: 19px;
      fill: var(--text-second);
      cursor: pointer;
      user-select: none;
      transition:
        fill 0.3s,
        transform 0.3s;

      @include media-down(sm) {
        padding: 3px;
        width: 21px;
        height: 12px;
        top: 15px;
        right: -3px;
      }

      &:hover {
        @media (hover: hover) {
          fill: var(--text);
        }
      }

      &:active {
        transform: translateX(7px);
      }
    }

    &-error {
      position: absolute;
      top: 50px;
      font-size: 12px;
      left: 0;
      color: var(--errors);

      @include media-down(sm) {
        font-size: 10px;
        top: 34px;
      }
    }
  }

  &_default {
    background-color: red;
  }

  &_footer {
    border-bottom: 1px solid var(--text);
    transition: border 0.3s;
    height: 51px;

    @include media-down(sm) {
      height: 35px;
    }

    input {
      font-size: 16px;
      line-height: 27px;
      padding: 10px 0;

      @include media-down(sm) {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

  &_search {
    input {
      height: 32px;
      font-size: 12px;
      padding: 10px 10px 10px 30px;
      border-radius: 4px;
      line-height: 20px;
      background-color: var(--gray-two);
    }
  }

  &_error {
    &.input {
      &_footer {
        border-bottom: 1px solid var(--errors);
      }
    }
  }
}

@keyframes loading {
  0% {
    left: 0;
  }
  100% {
    left: 105%;
  }
}
</style>
