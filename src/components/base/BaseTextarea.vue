<template>
  <div class="textarea" :class="{ textarea_focused: isFocused || inputValue }">
    <textarea
      v-model="inputValue"
      :aria-label="ariaLabel"
      :id="id"
      :name="name"
      :placeholder="basePlaceholder"
      rows="4"
      @focus="isFocused = true"
      @blur="isFocused = false"
    ></textarea>

    <label v-if="placeholder" class="textarea__placeholder" :for="id">{{ placeholder }}</label>

    <span class="textarea__error">
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  id: string
  error?: string
  ariaLabel?: string
  placeholder?: string
  basePlaceholder?: string
  name?: string
}

defineProps<Props>()

const inputValue = defineModel<string>({
  required: true,
})

const isFocused = ref(false)
</script>

<style scoped lang="scss">
.textarea {
  position: relative;

  textarea {
    background-color: unset;
    width: 100%;
    min-height: 57px;
    border: unset;
    border-bottom: 1px solid var(--gray);
    transition: border-color 0.2s;
    color: var(--text-second);
    resize: none;

    &:focus {
      outline: unset;
      border-color: var(--text);
    }
  }

  &__placeholder {
    pointer-events: none;
    position: absolute;
    top: 13px;
    left: 0;
    color: var(--text-second);
    transition:
      font-size 0.2s,
      color 0.2s,
      top 0.2s;
  }

  &__error {
    position: absolute;
    bottom: -10px;
    left: 0;
    color: var(--errors);
    font-size: 12px;
  }

  &_focused {
    textarea {
      color: var(--text);
    }

    .textarea__placeholder {
      font-size: 12px;
      top: -16px;
    }
  }
}
</style>
