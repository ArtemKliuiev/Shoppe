<script setup lang="ts">
import { computed } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'

interface Props {
  modelValue: string
  isLoading: boolean
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
</script>

<template>
  <div class="search">
    <input type="text" v-model="text" placeholder="Search" />

    <div class="search__load-line" :class="{ 'search__load-line_active': isLoading }"></div>

    <BaseSvg class="search__icon" id="search" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as *;

.search {
  position: relative;

  @include media-down(sm) {
    padding: 0 16px;
    width: 100%;
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    width: 14px;
    height: 14px;
    fill: var(--text-second);

    @include media-down(sm) {
      left: 25px;
    }
  }

  &__load-line {
    position: absolute;
    bottom: -1px;
    left: 16px;
    height: 20px;
    background-color: var(--gray);
    pointer-events: none;
    clip-path: polygon(0 87%, 100% 87%, 100% 100%, 0 100%);
    border-radius: 0 0 4px 4px;
    width: calc(100% - 32px);
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

@keyframes loading {
  0% {
    left: 0;
  }
  100% {
    left: 105%;
  }
}
</style>
