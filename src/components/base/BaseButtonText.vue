<script setup lang='ts'>
interface Props {
  to: string,
  className?: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink :class="className ? className : ''" :to="to">
    <slot></slot>
  </RouterLink>
</template>

