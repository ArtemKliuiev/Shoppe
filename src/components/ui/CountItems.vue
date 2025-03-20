<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'

interface Props {
  modelValue: number
  type?: 'big'
}

interface Emits {
  (e: 'update:modelValue', count: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const input = ref<HTMLInputElement | null>(null)

// const display = computed({
//   get() {
//     return String(props.modelValue)
//   },
//   set(value: string) {
//     emit('update:modelValue', Number(value))
//   },
// })

const display = ref('1')

const classObject = computed(() => ({
  count_two: display.value.length > 1,
  count_three: display.value.length > 2,
  count_big: props.type === 'big',
  count_default: !props.type,
}))

function addCount(condition: boolean) {
  const count: number = +display.value

  if (condition && count < 999) display.value = String(count + 1)

  if (!condition && count > 1) display.value = String(count - 1)
}

function validationCount() {
  const caretPosition = input.value?.selectionStart

  const newValue = display.value.replace(/^0+|[^0-9]/g, '').slice(0, 3)

  display.value = newValue.length ? newValue : '1'

  nextTick(() => {
    if (caretPosition) input.value?.setSelectionRange(caretPosition, caretPosition)
  })
}
</script>

<template>
  <div :class="classObject" class="count">
    <button class="count__btn count__btn-remove" @click="addCount(false)">-</button>

    <input
      v-model="display"
      class="count__display"
      type="text"
      ref="input"
      @input="validationCount"
    />

    <button class="count__btn count__btn-add" @click="addCount(true)">+</button>
  </div>
</template>

<style scoped lang="scss">
.count {
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
    text-align: center;
  }

  &_default {
    font-size: 14px;
    height: 23px;

    .count {
      &__display {
        width: 12px;
      }
    }

    &.count {
      &_two {
        .count__display {
          width: 22px;
        }
      }

      &_three {
        .count__display {
          width: 32px;
        }
      }
    }
  }

  &_big {
    background-color: var(--gray-two);
    transition: background-color 0.3s;
    height: 53px;
    width: 100px;
    border-radius: 4px;

    .count {
      &__display {
        width: 30px;
      }

      &__btn {
        flex-grow: 1;
        line-height: 53px;
      }
    }
  }
}
</style>
