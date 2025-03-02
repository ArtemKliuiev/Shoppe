<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

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
  <div class="search" ref="htmlEL"></div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.search {
}
</style>
