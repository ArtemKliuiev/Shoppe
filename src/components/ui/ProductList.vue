<script setup lang="ts">
import type { Aditional } from '@/components/mixins/data-cards'

interface Props {
  listData: Aditional[]
}

defineProps<Props>()
</script>

<template>
  <ul class="product-list">
    <li v-for="item in listData" :key="item.title">
      {{ item.title }}:

      <span> {{ item.value }} </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.product-list {
  li {
    color: var(--text);
    transition: color 0.3s;
    margin-bottom: 13px;

    &::first-letter {
      text-transform: uppercase;
    }

    span {
      color: var(--text-second);
      display: inline-block;
      margin-left: 8px;
    }
  }
}
</style>
