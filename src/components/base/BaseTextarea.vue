<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: string
  placeholder?: string
}

interface Emit {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const textareaValue = computed({
  get() {
    return props.modelValue
  },

  set(newValue) {
    emit('update:modelValue', newValue)
  },
})
</script>

<template>
  <textarea v-model="textareaValue" :placeholder="placeholder" class="textarea"></textarea>
</template>

<style scoped lang="scss">
.textarea {
  background-color: unset;
  width: 100%;
  min-height: 57px;
  border: unset;
  border-bottom: 1px solid var(--gray);
  color: var(--text-second);
  resize: none;

  &:focus {
    outline: unset;
  }
}
</style>
