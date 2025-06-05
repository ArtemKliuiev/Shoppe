<template>
  <div class="input" :class="{ input_focused: isFocused || inputValue }">
    <input
      v-model="inputValue"
      :type="type"
      :aria-label="ariaLabel"
      :id="id"
      :name="name"
      :placeholder="basePlaceholder"
      :autocomplete="autocomplete"
      ref="inputEl"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <label v-if="placeholder" class="input__placeholder" :for="id">{{ placeholder }}</label>

    <span class="input__error">
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  type: string
  id: string
  error?: string
  ariaLabel?: string
  placeholder?: string
  basePlaceholder?: string
  name?: string
  autocomplete?: string
}

defineProps<Props>()

const inputValue = defineModel<string | number>({
  required: true,
})

const isFocused = ref(false)
</script>

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

    @include mixins.media-down(sm) {
      font-size: 12px;
      top: 6px;
    }
  }

  input {
    height: 50px;
    width: 100%;
    color: var(--text-second);
    border-bottom: 1px solid var(--gray);
    transition: border-color 0.2s;
    font-size: 14px;

    @include mixins.media-down(sm) {
      height: 30px;
    }

    &:focus {
      outline: unset;
      border-color: var(--text);
    }
  }

  &_focused {
    input {
      color: var(--text);
    }

    .input__placeholder {
      top: -5px;
      font-size: 12px;

      @include mixins.media-down(sm) {
        top: -10px;
        font-size: 10px;
      }
    }
  }
}
</style>
