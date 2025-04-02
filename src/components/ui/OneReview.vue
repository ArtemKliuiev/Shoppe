<script setup lang="ts">
import type { DataPruductReviews } from '@/components/mixins/data-product-reviews'
import RaitingStars from '@/components/ui/RaitingStars.vue'

interface Props {
  data: DataPruductReviews
}

const props = defineProps<Props>()

const date = props.data.date.toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

const raiting = props.data.rating
</script>

<template>
  <div class="review">
    <div class="review__head">
      <div class="review__name">
        {{ data.name }}
      </div>

      <div class="review__date">
        {{ date }}
      </div>
    </div>

    <div class="review__rating">
      <RaitingStars v-model="raiting" :readonly="true" />
    </div>

    <div class="review__text">
      {{ data.text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

// @include mixins.media-down(sm) {

//   }

.review {
  margin: 21px 0 39px;

  &__head {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
  }

  &__name {
    font-size: 20px;
  }

  &__date {
    font-size: 14px;
    color: var(--text-second);
  }

  &__rating {
    margin-bottom: 18px;
  }

  &__text {
    color: var(--text-second);
    line-height: 27px;
  }
}
</style>
