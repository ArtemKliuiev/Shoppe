<script setup lang="ts">
interface Props {
  mode?: boolean
}

defineProps<Props>()
</script>

<template>
  <button class="button" :class="{ button_mode: mode }">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.button {
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
  transition:
    transform 0.3s,
    background-color 0.3s,
    color 0.3s;

  @include media-down(sm) {
    height: 32px;
    font-size: 12px;
  }

  &:hover {
    background-color: unset;
    border: 1px solid var(--text);
    color: var(--text);
  }

  &:active {
    transform: scale(0.98);
  }

  &_mode {
    background-color: unset;
    border: 1px solid var(--text);
    color: var(--text);

    &:hover {
      background-color: var(--text);
      color: var(--background);
    }
  }
}
</style>
