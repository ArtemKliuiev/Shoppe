<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type: string
  ariaLabel?: string
  id?: string
  placeholder?: string
  modelValue: string | boolean
}

interface Emits {
  (e: 'update:modelValue', value: string | boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue: string) {
    emit('update:modelValue', newValue)
  },
})
</script>

<template>
  <input
    v-model="inputValue"
    :type="type"
    :aria-label="ariaLabel"
    :id="id"
    :placeholder="placeholder"
  />
</template>

<style scoped lang="scss"></style>
