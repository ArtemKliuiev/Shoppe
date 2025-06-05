<script setup lang="ts">
import BaseButtonText from './BaseButtonText.vue'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  styles?: 'mode' | 'bold' | 'text'
  size?: 'small'
  submit?: boolean
  to?: string
}

const props = defineProps<Props>()

const classObject: Record<string, boolean> = {
  button_mode: props.styles === 'mode',
  button_bold: props.styles === 'bold',
  button_text: props.styles === 'text',
  button_small: props.size === 'small',
}
</script>

<template>
  <BaseButtonText v-if="to" :class="classObject" :to="to" class="button">
    <slot></slot>
  </BaseButtonText>

  <button v-else :class="classObject" :type="type" class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

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
    border 0.3s,
    color 0.3s;

  @include mixins.media-down(sm) {
    height: 32px;
    font-size: 14px;
  }

  @include mixins.media-down(xs) {
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

  &_small {
    display: inline-block;
    width: unset;
    padding: 0 34px;

    &:hover {
      @media (hover: hover) {
        border: unset;
        outline: 1px solid var(--text);
      }
    }

    @include mixins.media-down(sm) {
      width: 100%;
      padding: 0 10px;
    }
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

  &_bold {
    background-color: unset;
    border: 2px solid var(--background);

    @include mixins.media-down(xs) {
      border: 1px solid var(--background);
      font-size: 12px;
      font-weight: 400;
      padding: 0 5px;
    }

    &:hover {
      @media (hover: hover) {
        background-color: var(--text);
        color: var(--background);
      }
    }
  }

  &_text {
    background-color: unset;
    border: unset;
    color: var(--accent);
    font-weight: 700;
    height: unset;

    &:hover {
      @media (hover: hover) {
        background-color: unset;
        border: unset;
        color: var(--accent);
      }
    }
  }
}
</style>
