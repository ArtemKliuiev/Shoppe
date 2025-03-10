<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', count: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const classObject = ref({})

const display = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)

    classObject.value = {
      count__display_two: value.length > 1,
      count__display_three: value.length > 2,
    }
  },
})

function addCount(condition: boolean) {
  const count: number = +display.value

  if (condition && count < 999) display.value = String(count + 1)

  if (!condition && count > 1) display.value = String(count - 1)
}

function validationCount() {
  display.value = display.value.replace(/\D/g, '')

  if (display.value[0] === '0' && display.value.length > 1) display.value = display.value.slice(1)

  if (+display.value > 999) display.value = display.value.slice(0, -1)

  if (display.value === '0') display.value = '1'
}
</script>

<template>
  <div class="count">
    <button class="count__btn count__btn-remove" @click="addCount(false)">-</button>

    <input
      v-model="display"
      :class="classObject"
      class="count__display"
      type="text"
      @input="validationCount"
      @paste.prevent
    />

    <button class="count__btn count__btn-add" @click="addCount(true)">+</button>
  </div>
</template>

<style scoped lang="scss">
.count {
  font-size: 14px;
  height: 23px;
  display: flex;
  align-items: center;
  user-select: none;

  &__btn {
    border: unset;
    background: unset;
    cursor: pointer;
    color: var(--text-second);
    transition:
      color 0.3s,
      transform 0.3;

    &:hover {
      @media (hover: hover) {
        color: var(--text);
      }
    }
  }

  &__display {
    color: var(--text-second);
    width: 12px;
    text-align: center;

    &_two {
      width: 22px;
    }

    &_three {
      width: 32px;
    }
  }
}
</style>
