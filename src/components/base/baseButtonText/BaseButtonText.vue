<script setup lang='ts'>
interface Props {
  to: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink class="link" :to="to">
    <slot></slot>
  </RouterLink>
</template>

