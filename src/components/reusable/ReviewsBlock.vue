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

      <form @submit.prevent="validateForm(true)" class="reviews__form">
        <div class="reviews__textarea">
          <p class="reviews__text">Your Review*</p>

          <BaseTextarea v-model="formData.text" />

          <span class="reviews__textarea-error reviews__error">
            {{ errors.text ? errors.text : '' }}
          </span>
        </div>

        <div class="reviews__input">
          <BaseInput
            v-model="formData.name"
            :error="errors.name"
            class="reviews__name"
            type="text"
            placeholder="Enter your name*"
          />
        </div>

        <div class="reviews__input">
          <BaseInput
            v-model="formData.email"
            :error="errors.email"
            class="reviews__email"
            type="text"
            placeholder="Enter your Email*"
          />
        </div>

        <div class="reviews__save">
          <CustomCheckbox v-model="formData.save" id="save-data" class="reviews__save-checkbox" />

          <label class="reviews__save-label" for="save-data">
            Save my name, email, and website in this browser for the next time I comment
          </label>
        </div>

        <p class="reviews__text reviews__bottom-text">Your Rating*</p>

        <div class="reviews__stars">
          <RaitingStars v-model="formData.rating" class="reviews__rating" />

          <span class="reviews__stars-error reviews__error">
            {{ errors.rating ? errors.rating : '' }}
          </span>
        </div>

        <BaseButton size="small">Submit</BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import type { WatchStopHandle } from 'vue'
import * as yup from 'yup'
import { dataPruductReviews } from '@/components/mixins/data-product-reviews'
import OneReview from '@/components/ui/OneReview.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import CustomCheckbox from '@/components/ui/CustomCheckbox.vue'
import RaitingStars from '@/components/ui/RaitingStars.vue'
import BaseButton from '@/components/base/BaseButton.vue'

type validationErrors = Record<string, string>

interface FormData {
  text: string
  email: string
  name: string
  rating: number
  save: boolean
}

const errors = ref<validationErrors>({})

const formData = reactive<FormData>({
  text: '',
  email: '',
  name: '',
  rating: 0,
  save: false,
})

const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup.string().required('Name is required').min(3, 'Minimum 3 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  text: yup.string().required('Text is required').min(10, 'Minimum 10 characters for the text'),
  rating: yup.number().required('Rating is required').min(1, 'Minimum 1').max(5, 'Maximum 5'),
  save: yup.boolean().default(false),
})

let addWatch: WatchStopHandle | null = null

async function validateForm(sendData: boolean) {
  try {
    await schema.validate(formData, { abortEarly: false })

    errors.value = {}

    if (sendData) alert('Коментар додано')
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      errors.value = err.inner.reduce((acc: validationErrors, curr) => {
        const fieldName = curr.path

        if (fieldName) acc[fieldName] = curr.message

        return acc
      }, {})
    }
  }

  if (addWatch) return

  addWatch = watch(formData, () => {
    validateForm(false)
  })
}
</script>

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
    position: relative;
    margin-bottom: 24px;

    @include mixins.media-down(sm) {
      margin-bottom: 15px;
    }

    &-error {
      left: 0;
      bottom: -12px;
    }
  }

  &__text {
    font-size: 14px;
    line-height: 30px;
    color: var(--text-second);
  }

  &__input {
    position: relative;
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
      flex-shrink: 0;
    }

    &-label {
      font-size: 12px;
      color: var(--text-second);
      user-select: none;
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

  &__stars {
    position: relative;

    &-error {
      bottom: -17px;
    }
  }

  &__error {
    position: absolute;
    font-size: 12px;
    color: var(--errors);
  }
}
</style>
