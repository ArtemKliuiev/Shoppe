<script setup lang="ts">
import BasePicture from '@/components/base/BasePicture.vue'
import type { DataSlide } from '@/components/mixins/data-main-slider'

interface Props {
  data: DataSlide
}

defineProps<Props>()
</script>

<template>
  <div class="main-slide">
    <BasePicture
      class="main-slide__image"
      :src="data.image.src"
      :srcset="data.image.srcset"
      :width="data.image.width"
      :height="data.image.height"
    />
  </div>
</template>

<style scoped lang="scss">
.main-slide {
  position: relative;
  width: 100%;
  height: 100%;

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
