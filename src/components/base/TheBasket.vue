<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BaseButton from './BaseButton.vue'

interface Props {
  data: Array<string>
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const htmlEL = ref<HTMLDivElement | null>(null)
const listenerClick = (e: MouseEvent) =>
  !htmlEL.value?.contains(e.target as Node | null) ? emits('close') : null

onMounted(() => {
  document.addEventListener('click', listenerClick)
})

onUnmounted(() => {
  document.removeEventListener('click', listenerClick)
})
</script>

<template>
  <div class="basket" ref="htmlEL">
    <div class="basket__main">
      <h3 class="basket__title">Shopping bag</h3>

      <p class="basket__info">5 items</p>

      <ul class="basket__cards"></ul>
    </div>

    <div class="basket__bottom">
      <div class="basket__bottom-text">
        <p class="basket__bottom-info">Subtotal (5 items)</p>

        <p class="basket__bottom-sum">$ 100,00</p>
      </div>

      <div class="basket__btn">
        <BaseButton mode> VIEW CART </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.basket {
  display: flex;
  flex-direction: column;

  &__main {
    padding: 73px 10px 10px 36px;
    flex-grow: 1;
  }

  &__title {
    font-size: 16px;
    margin-bottom: 20px;
  }

  &__info {
    color: var(--text-second);
    font-size: 12px;
  }

  &__cards {
  }

  &__bottom {
    border-top: 1px solid var(--gray);
    padding-top: 5px;

    &-text {
      display: flex;
      justify-content: space-between;
      padding: 0 36px;
      margin-bottom: 7px;
    }

    &-info {
    }

    &-sum {
    }
  }

  &__btn {
    margin: 0 36px 25px;
  }
}
</style>
