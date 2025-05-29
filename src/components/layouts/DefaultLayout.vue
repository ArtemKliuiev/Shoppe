<template>
  <div class="layout">
    <TheHeader />

    <main>
      <router-view />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/components/base/TheFooter.vue'
import TheHeader from '@/components/base/TheHeader.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  color: var(--text);
  background-color: var(--background);
  transition:
    background-color 0.3s,
    color 0.3s;

  &::selection {
    color: var(--background);
    background-color: var(--text);
  }
}

main {
  flex: 1;
}
</style>
