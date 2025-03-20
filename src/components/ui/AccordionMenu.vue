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
          {{ item.text }}{{ item.count || item.count === 0 ? `(${item.count})` : '' }}
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

.accordion {
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  padding: 16px 0 5px;

  &__item {
    display: grid;
    grid-template-rows: 40px 0fr;
    transition: grid-template-rows 0.3s;
    margin-bottom: 20px;
    gap: 20px;

    @include mixins.media-down(xs) {
      grid-template-rows: 20px 0fr;
      margin-bottom: 4px;
      gap: 5px;
    }

    &_active {
      grid-template-rows: 40px 1fr;

      @include mixins.media-down(xs) {
        grid-template-rows: 20px 1fr;
      }

      .accordion {
        &__icon {
          transform: rotate(90deg);
        }

        &__content {
          padding: 10px 0;
        }
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

    @include mixins.media-down(xs) {
      height: 20px;
    }
  }

  &__title {
    @include mixins.media-down(xs) {
      font-size: 12px;
    }
  }

  &__content {
    transition: padding 0.3s;
    overflow: hidden;
  }

  &__icon {
    fill: var(--text);
    transform: rotate(-90deg);
    transition: transform 0.3s;
    width: 20px;
    height: 20px;

    @include mixins.media-down(xs) {
      width: 8px;
      height: 8px;
    }
  }
}
</style>
