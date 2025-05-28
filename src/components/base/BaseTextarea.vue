<script setup lang="ts">

interface Props {
  modelValue: string
  placeholder?: string
}

defineProps<Props>()

const textareaValue = defineModel<string>({
  required: true,
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
