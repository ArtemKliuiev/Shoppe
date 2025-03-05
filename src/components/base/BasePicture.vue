<script setup lang="ts">
interface Props {
  srcset: string
  src: string
  width: string
  height: string
  alt?: string
  lazy?: string
}

defineProps<Props>()
</script>

<template>
  <picture>
    <source :srcset="srcset" type="image/webp" />
    <img
      :loading="lazy ? 'lazy' : undefined"
      :height="height"
      :width="width"
      :src="src"
      :alt="alt ? alt : undefined"
    />
  </picture>
</template>
