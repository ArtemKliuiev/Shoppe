<script setup lang="ts"></script>

<template>
  <div class="card"></div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.card {
  width: 100%;
  aspect-ratio: 1/1.25;
  background-color: var(--accent);
}
</style>
