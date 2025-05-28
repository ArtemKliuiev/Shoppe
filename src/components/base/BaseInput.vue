<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type: string
  ariaLabel?: string
  id?: string
  placeholder?: string
  name?: string
}

defineProps<Props>()

const inputValue = defineModel<string | number | boolean>({
  required: true,
})
</script>

<template>
  <input
    v-model="inputValue"
    :type="type"
    :aria-label="ariaLabel"
    :id="id"
    :placeholder="placeholder"
    :name="name"
    ref="inputEl"
  />
</template>

<style scoped lang="scss">
input[type='text'] {
  height: 50px;
  width: 100%;
  color: var(--text-second);
  border-bottom: 1px solid var(--gray);
  font-size: 14px;
}
</style>
