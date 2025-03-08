<script setup lang="ts">
interface Props {
  srcset: string
  src: string
  width: string
  height: string
  alt?: string
  lazy?: 'lazy' | 'eager'
}

defineProps<Props>()
</script>

<template>
  <picture>
    <source :srcset="srcset" type="image/webp" />
    <img :loading="lazy" :height="height" :width="width" :src="src" :alt="alt" />
  </picture>
</template>
