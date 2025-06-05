<script setup lang="ts">
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseInput from '@/components/base/BaseInput.vue'

interface Props {
  placeholder?: string
  isLoading?: boolean
}

defineProps<Props>()

const model = defineModel({
  default: '',
  type: String,
})
</script>

<template>
  <div class="search-input">
    <BaseInput v-model="model" :basePlaceholder="placeholder" id="search-input" type="text" />

    <div :class="{ 'search-input__line_active': isLoading }" class="search-input__line"></div>

    <BaseSvg class="search-input__icon" id="search" />
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  position: relative;

  :deep(input) {
    width: 100%;
    height: 32px;
    font-size: 12px;
    padding: 10px 10px 10px 30px;
    border-radius: 4px;
    line-height: 20px;
    color: var(--text-second);
    background-color: var(--gray-two);
  }

  &__line {
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

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    width: 14px;
    height: 14px;
    fill: var(--text-second);
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
