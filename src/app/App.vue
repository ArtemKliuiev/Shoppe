<script setup lang="ts">
import TheFooter from '@/components/base/TheFooter.vue'
import TheHeader from '@/components/base/TheHeader.vue'
import SvgManager from '@/components/base/SvgManager.vue'
import { provide, ref } from 'vue'

const blackTheme = ref<boolean>(false)

provide('blackTheme', blackTheme)
</script>

<template>
  <div class="wrapper" :class="{ 'black-theme': blackTheme }">
    <TheHeader />
    <main class="main">
      <RouterView />
    </main>
    <TheFooter />
  </div>

  <SvgManager />
</template>

<style scoped></style>
