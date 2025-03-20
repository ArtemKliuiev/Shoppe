<script setup lang="ts">
import { ref } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import type { ProductAccordionTitle } from '@/components/mixins/data-pruduct-accordion'

interface Props {
  accordinData: Record<string, ProductAccordionTitle>
}

defineProps<Props>()

const activeItem = ref('')

function toggle(value: string) {
  if (activeItem.value === value) {
    activeItem.value = ''

    return
  }
  activeItem.value = value
}
</script>

<template>
  <ul class="accordion">
    <li
      v-for="item in accordinData"
      :key="item.name"
      :class="{ accordion__item_active: item.name === activeItem }"
      class="accordion__item"
    >
      <div class="accordion__head" @click="toggle(item.name)">
        <h3 class="accordion__title">
          {{ item.text }}
          {{ item.count || item.count === 0 ? `(${item.count})` : '' }}
        </h3>

        <BaseSvg class="accordion__icon" id="back-arrow" />
      </div>

      <div class="accordion__content">
        <slot :name="item.name"></slot>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as mixins;

// @include mixins.media-down(sm) {
//
//   }

.accordion {
  &__item {
    display: grid;
    grid-template-rows: 40px 0fr;
    transition: grid-template-rows 0.3s;
    margin-bottom: 20px;
    gap: 20px;

    &_active {
      grid-template-rows: 40px 1fr;

      .accordion__icon {
        transform: rotate(90deg);
      }
    }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    cursor: pointer;
    user-select: none;
  }

  &__title {
  }

  &__content {
    overflow: hidden;
  }

  &__icon {
    fill: var(--text);
    transform: rotate(-90deg);
    transition: transform 0.3s;
    width: 20px;
    height: 20px;
  }
}
</style>
