<script setup lang="ts">
import SvgManager from '@/components/base/SvgManager.vue'
import { provide, ref, watch, onMounted } from 'vue'

const blackTheme = ref<boolean>(true)

provide('blackTheme', blackTheme)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) blackTheme.value = Boolean(JSON.parse(savedTheme))
  else blackTheme.value = true
})

watch(blackTheme, () => {
  localStorage.setItem('theme', blackTheme.value.toString())
})
</script>

<template>
  <div :class="{ 'black-theme': blackTheme }">
    <RouterView />
  </div>
  <SvgManager />
</template>

<style scoped></style>
