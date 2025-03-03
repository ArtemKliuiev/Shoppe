<script setup lang="ts">
import BaseButtonText from './BaseButtonText.vue'

interface Props {
  mode?: boolean
  to?: string
}

defineProps<Props>()
</script>

<template>
  <BaseButtonText class="button" :class="{ button_mode: mode }" v-if="to" :to="to">
    <slot></slot>
  </BaseButtonText>

  <button v-else class="button" :class="{ button_mode: mode }">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.button {
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  height: 53px;
  padding: 0 10px;
  background: var(--text);
  color: var(--background);
  border: unset;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.3s,
    background-color 0.3s,
    color 0.3s;

  @include media-down(sm) {
    height: 32px;
    font-size: 12px;
  }

  &:hover {
    @media (hover: hover) {
      background-color: unset;
      border: 1px solid var(--text);
      color: var(--text);
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &_mode {
    background-color: unset;
    border: 1px solid var(--text);
    color: var(--text);

    &:hover {
      @media (hover: hover) {
        background-color: var(--text);
        color: var(--background);
      }
    }
  }
}
</style>
