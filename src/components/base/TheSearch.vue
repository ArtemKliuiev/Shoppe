<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Props {
  data: string
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
  <div class="search" ref="htmlEL"></div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.search {
  position: fixed;
  top: 105px;
  background-color: blue;
  width: 400px;
  height: calc(100% - 105px);
  right: 0;

  @include media-down(md) {
    top: 70px;
    height: calc(100% - 70px);
  }
}
</style>
