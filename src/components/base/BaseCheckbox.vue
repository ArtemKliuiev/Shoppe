<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: boolean
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
</script>

<template>
  <input class="checkbox" type="checkbox" v-model="checkboxValue" />
</template>

<style scoped lang="scss">
.checkbox {
  position: relative;
  width: 33px;
  border-radius: 10px;
  height: 20px;
  background-color: gray;
  cursor: pointer;
  user-select: none;

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
</style>
