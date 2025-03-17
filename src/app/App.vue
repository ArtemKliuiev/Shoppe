<script setup lang="ts">
import TheFooter from '@/components/base/TheFooter.vue'
import TheHeader from '@/components/base/TheHeader.vue'
import SvgManager from '@/components/base/SvgManager.vue'
import { provide, ref, watch, onMounted } from 'vue'

const blackTheme = ref<boolean>(true)

provide('blackTheme', blackTheme)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) blackTheme.value = savedTheme === 'true'
})

watch(blackTheme, () => {
  localStorage.setItem('theme', blackTheme.value.toString())
})
</script>

<template>
  <div :class="{ 'black-theme': blackTheme }" class="theme-bg">
    <div class="wrapper">
      <TheHeader />
      <main class="main">
        <RouterView />
      </main>
      <TheFooter />
    </div>
  </div>
  <SvgManager />
</template>

<style scoped></style>
