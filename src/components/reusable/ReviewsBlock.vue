<script setup lang="ts">
import { ref } from 'vue'
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

const formData = ref<FormData>({
  text: '',
  email: '',
  name: '',
  rating: 0,
  save: false,
})

const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup.string().required('Ім’я обов’язкове').min(3, 'Мінімум 3 символи'),
  email: yup.string().email('Некоректний email').required('Email обов’язковий'),
  text: yup.string().required('Текст обов’язковий').min(10, 'Мінімум 10 символів для тексту'),
  rating: yup.number().required('Рейтинг обов’язковий').min(1, 'Мінімум 1').max(5, 'Максимум 5'),
  save: yup.boolean().required('Необхідно вибрати збереження'),
})

const errors = ref<validationErrors>({})

const validateForm = async () => {
  try {
    await schema.validate(formData.value, { abortEarly: false })

    errors.value = {}
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      errors.value = err.inner.reduce((acc: validationErrors, curr) => {
        const fieldName = curr.path

        if (fieldName) acc[fieldName] = curr.message

        return acc
      }, {})
    }
  }
}
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

      <form @submit.prevent="validateForm" class="reviews__form">
        {{ errors }}
        <div class="reviews__textarea reviews__form-field">
          <p class="reviews__text">Your Review*</p>

          <BaseTextarea v-model="formData.text" />

          <span class="reviews__form-error">
            {{ errors.text ? errors.text : '' }}ww wdawdeffgrgergerg
          </span>
        </div>

        <div class="reviews__form-field">
          <BaseInput
            class="reviews__name"
            v-model="formData.name"
            type="text"
            placeholder="Enter your name*"
          />

          <span class="reviews__form-error">
            {{ errors.name }}
          </span>
        </div>

        <div class="reviews__form-field">
          <BaseInput
            class="reviews__email"
            v-model="formData.email"
            type="text"
            placeholder="Enter your Email*"
          />

          <span class="reviews__form-error">
            {{ errors.email ? errors.email : '' }}
          </span>
        </div>

        <div class="reviews__save reviews__form-field">
          <CustomCheckbox v-model="formData.save" id="save-data" class="reviews__save-checkbox" />

          <label class="reviews__save-label" for="save-data">
            Save my name, email, and website in this browser for the next time I comment
          </label>

          <span class="reviews__form-error">
            {{ errors.save ? errors.save : '' }}
          </span>
        </div>

        <p class="reviews__text reviews__bottom-text">Your Rating*</p>

        <div class="reviews__form-field">
          <RaitingStars class="reviews__rating" v-model="formData.rating" />

          <span class="reviews__form-error">
            {{ errors.rating ? errors.rating : '' }}
          </span>
        </div>

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
    &-field {
      position: relative;
    }

    &-error {
      position: absolute;
      left: 0;
      bottom: -10px;
      font-size: 12px;
      color: red;
    }
  }
}
</style>
