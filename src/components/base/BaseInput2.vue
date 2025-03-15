<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type: string
  ariaLabel?: string
  id?: string
  placeholder?: string
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
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
  <div class="input">
    <input
      v-model="inputValue"
      :type="type"
      :aria-label="ariaLabel"
      :id="id"
      :placeholder="placeholder"
    />

    <label :for="id"></label>
  </div>
</template>

<style scoped lang="scss">
.input {
}
</style>
