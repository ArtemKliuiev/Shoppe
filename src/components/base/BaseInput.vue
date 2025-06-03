<script setup lang="ts">
interface Props {
  type: string
  error?: string
  ariaLabel?: string
  id?: string
  placeholder?: string
  name?: string
}

defineProps<Props>()

const inputValue = defineModel<string | number>({
  required: true,
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
      :name="name"
      ref="inputEl"
    />

    <span class="input__error">
      {{ error }}
    </span>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.input {
  position: relative;

  &__error {
    position: absolute;
    bottom: -17px;
    left: 0;
    color: var(--errors);
    font-size: 12px;
  }

  input[type='text'] {
    height: 50px;
    width: 100%;
    color: var(--text-second);
    border-bottom: 1px solid var(--gray);
    font-size: 14px;
  }
}
</style>
