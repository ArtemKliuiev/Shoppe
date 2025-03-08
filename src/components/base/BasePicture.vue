<script setup lang="ts">
interface Props {
  srcset: string
  src: string
  width: string
  height: string
  className?: string
  alt?: string
  lazy?: 'lazy' | 'eager'
}

defineProps<Props>()
</script>

<template>
  <picture>
    <source :srcset="srcset" type="image/webp" />
    <img :class="className" :loading="lazy" :height="height" :width="width" :src="src" :alt="alt" />
  </picture>
</template>
