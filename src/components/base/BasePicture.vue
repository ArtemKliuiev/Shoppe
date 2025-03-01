<script setup lang="ts">
interface Props {
  srcset: string,
  src: string,
  alt: string,
  width: string,
  height: string,
  lazy: string
}

defineProps<Props>()
</script>

<template>
  <picture>
    <source :srcset="srcset" type="image/webp" />
    <img
      :loading="lazy ? 'lazy' : 'eager'"
      :height="height"
      :width="width"
      :src="src"
      :alt="alt ? alt : 'img'"
    />
  </picture>
</template>

<style>
@import "./BasePicture.scss";
</style>