<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: boolean
  type?: string
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

const classObject = {
  checkbox_custom: props.type === 'custom',
  checkbox_default: !props.type,
}
</script>

<template>
  <input
    class="checkbox"
    :class="classObject"
    type="checkbox"
    v-model="checkboxValue"
    :id="id || undefined"
  />
</template>

<style scoped lang="scss">
.checkbox {
  position: relative;
  cursor: pointer;

  &_default {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    border: 1px solid var(--text-second);
    border-radius: 2px;

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

  &_custom {
    width: 33px;
    border-radius: 10px;
    height: 20px;
    background-color: gray;

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
</style>
