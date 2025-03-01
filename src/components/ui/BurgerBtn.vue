<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const isOpen = computed({
  get(){
    return props.modelValue
  },
  set(newValue: boolean){
    emits('update:modelValue', newValue)
  }
})

</script>

<template>
  <div class="burger" :class="{ burger_active: isOpen}" @click="isOpen = !isOpen">
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as *;

.burger {
  position: relative;
  width: 20px;
  height: 23px;
  cursor: pointer;
  user-select: none;
  display: none;

  @include media-down(sm) {
    display: block;
  }

  &::after,
  &::before,
  span {
    position: absolute;
    width: 100%;
    height: 2px;
    right: 0;
    content: '';
    background-color: var(--text);
    border-radius: 1px;
    transition: all 500ms ease;
    transform-origin: 50% 50%;
  }

  span {
    top: 50%;
    left: 50%;
    transition: width 500ms ease;
    transform: translate(-50%, -50%);
  }

  &::after {
    top: 15%;
  }

  &::before {
    bottom: 15%;
    width: 70%
  }

  &_active {
    span {
      width: 0;
    }

    &::after {
      top: 45%;
      transform: rotate(45deg);
    }

    &::before {
      bottom: 43%;
      width: 100%;
      transform: rotate(-45deg);
    }
  }
}

</style>