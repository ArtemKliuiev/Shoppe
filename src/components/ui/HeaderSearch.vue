<script setup lang="ts">
import { computed } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'

interface Props {
  modelValue: string
  isLoading: boolean
  type?: string
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
  input__search: props.type === 'search',
}
</script>

<template>
  <div class="input" :class="classObject">
    <input type="text" v-model="text" placeholder="Search" />

    <div class="input__search-line" :class="{ 'input__search-line_active': isLoading }"></div>

    <BaseSvg class="input__search-icon" id="search" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as *;

.input {
  &__search {
    position: relative;

    &-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
      width: 14px;
      height: 14px;
      fill: var(--text-second);
    }

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

    input {
      box-sizing: border-box;
      background-color: var(--gray-two);
      height: 32px;
      border-radius: 4px;
      width: 100%;
      padding: 10px 10px 10px 30px;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      color: var(--text-second);
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
