<script setup lang="ts">
import BaseInput from '../base/BaseInput.vue'
import { computed } from 'vue'
import BaseSvg from '../base/BaseSvg.vue'

interface Props {
  modelValue: number
  readonly?: boolean
}

interface Emit {
  (e: 'update:modelValue', value: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const ratingValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue: number) {
    emit('update:modelValue', newValue)
  },
})

const classObject = computed<Record<string, boolean>>(() => ({
  rating_one: ratingValue.value >= 1,
  rating_two: ratingValue.value >= 2,
  rating_three: ratingValue.value >= 3,
  rating_four: ratingValue.value >= 4,
  rating_five: ratingValue.value >= 5,
  rating_readonly: props.readonly,
}))
</script>

<template>
  <ul :class="classObject" class="rating">
    <li v-for="n in 5" :key="n" class="rating__star">
      <BaseInput
        v-model="ratingValue"
        :value="n"
        class="rating__star-input"
        type="radio"
        name="rating"
      />

      <BaseSvg class="rating__star-icon" id="star" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.rating {
  display: flex;
  user-select: none;
  justify-content: space-between;
  width: 130px;

  &__star {
    position: relative;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      @media (hover: hover) {
        transform: scale(1.07);
      }
    }

    &-input {
      width: 18px;
      height: 18px;
    }

    &-icon {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      height: 18px;
      width: 18px;
      fill: var(--background);
      transition: fill 0.2s;
    }
  }

  &_one {
    :nth-child(1) {
      .rating__star-icon {
        fill: var(--text);
      }
    }
  }

  &_two {
    :nth-child(2) {
      .rating__star-icon {
        fill: var(--text);
      }
    }
  }

  &_three {
    :nth-child(3) {
      .rating__star-icon {
        fill: var(--text);
      }
    }
  }

  &_four {
    :nth-child(4) {
      .rating__star-icon {
        fill: var(--text);
      }
    }
  }

  &_five {
    :nth-child(5) {
      .rating__star-icon {
        fill: var(--text);
      }
    }
  }

  &_readonly {
    pointer-events: none;
  }
}
</style>
