<template>
  <input v-model="text" type="text" @input="send" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Emits {
  (e: 'input', val: string): void
}

const emits = defineEmits<Emits>()

const text = ref('')

function useDebounce(fn, delay) {
  let timeout = null

  return (...args) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
      console.log(12)
    }, delay)
  }
}

const send = useDebounce(() => {
  emits('input', text.value)
}, 500)
</script>
