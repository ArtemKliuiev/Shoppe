<script setup lang="ts">
interface Props {
  to: string
  className?: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="to" :class="className ? className : ''">
    <slot></slot>
  </RouterLink>
</template>
