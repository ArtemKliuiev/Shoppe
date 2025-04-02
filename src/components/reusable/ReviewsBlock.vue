<script setup lang="ts">
import { ref } from 'vue'
import { dataPruductReviews } from '@/components/mixins/data-product-reviews'
import OneReview from '@/components/ui/OneReview.vue'
import BaseTextarea from '../base/BaseTextarea.vue'
import BaseInput from '../base/BaseInput.vue'
import CustomCheckbox from '../ui/CustomCheckbox.vue'
import RaitingStars from '../ui/RaitingStars.vue'
import BaseButton from '../base/BaseButton.vue'

const reviewText = ref('')
const name = ref('')
const email = ref('')
const rating = ref(0)
const checkbox = ref(false)
</script>

<template>
  <div class="reviews">
    <div class="reviews__old">
      <h3 class="reviews__title reviews__old-title">2 Reviews for lira earings</h3>

      <ul class="reviews__list">
        <li v-for="review in dataPruductReviews" :key="review.name" class="reviews__list-item">
          <OneReview :data="review" />
        </li>
      </ul>
    </div>

    <div class="reviews__add">
      <h3 class="reviews__title reviews__add-title">Add a Review</h3>

      <p class="reviews__info">
        Your email address will not be published. Required fields are marked *
      </p>

      <form class="reviews__form">
        <div class="reviews__textarea">
          <p class="reviews__text">Your Review*</p>

          <BaseTextarea v-model="reviewText" />
        </div>

        <BaseInput
          class="reviews__name"
          v-model="name"
          type="text"
          placeholder="Enter your name*"
        />

        <BaseInput
          class="reviews__email"
          v-model="email"
          type="text"
          placeholder="Enter your Email*"
        />

        <div class="reviews__save">
          <CustomCheckbox v-model="checkbox" id="save-data" class="reviews__save-checkbox" />

          <label class="reviews__save-label" for="save-data">
            Save my name, email, and website in this browser for the next time I comment
          </label>
        </div>

        <p class="reviews__text reviews__bottom-text">Your Rating*</p>

        <RaitingStars class="reviews__rating" v-model="rating" />

        <BaseButton size="small">Submit</BaseButton>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.reviews {
  margin-bottom: 150px;
  display: flex;
  gap: 6.9%;

  @include mixins.media-down(sm) {
    display: block;
    margin-bottom: 70px;
  }

  &__old {
    flex-basis: 50%;

    &-title {
      margin-bottom: 70px;

      @include mixins.media-down(sm) {
        margin-bottom: 30px;
      }
    }
  }

  &__add {
    flex-basis: 50%;

    &-title {
      margin-bottom: 12px;
    }
  }

  &__title {
    font-size: 20px;

    @include mixins.media-down(sm) {
      font-size: 16px;
    }
  }

  &__list {
    &-item {
      border-bottom: 1px solid var(--gray);
      transition: border-bottom 0.3s;

      &:last-child {
        border-bottom: unset;
      }
    }
  }

  &__info {
    font-size: 13px;
    text-transform: capitalize;
    margin-bottom: 50px;

    @include mixins.media-down(sm) {
      margin-bottom: 20px;
    }
  }

  &__textarea {
    margin-bottom: 24px;

    @include mixins.media-down(sm) {
      margin-bottom: 15px;
    }
  }

  &__text {
    font-size: 14px;
    line-height: 30px;
    color: var(--text-second);
  }

  &__name {
    margin-bottom: 30px;

    @include mixins.media-down(sm) {
      margin-bottom: 15px;
    }
  }

  &__email {
    margin-bottom: 27px;

    @include mixins.media-down(sm) {
      margin-bottom: 15px;
    }
  }

  &__save {
    display: flex;
    gap: 10px;
    margin-bottom: 43px;

    @include mixins.media-down(sm) {
      margin-bottom: 20px;
    }

    &-checkbox {
      margin: 2px 0 0 2px;
    }

    &-label {
      font-size: 12px;
      color: var(--text-second);
    }
  }

  &__bottom-text {
    margin-bottom: 10px;

    @include mixins.media-down(sm) {
      margin-bottom: 15px;
    }
  }

  &__rating {
    margin-bottom: 41px;

    @include mixins.media-down(sm) {
      margin: 0 auto 20px;
    }
  }

  &__form {
  }
}
</style>
