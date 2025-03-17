<script setup lang="ts">
import { ref } from 'vue'
import { dataCards } from '@/components/mixins/data-cards'
import { useRoute } from 'vue-router'
import ProductSlider from '@/components/reusable/ProductSlider.vue'
import CountItems from '@/components/ui/CountItems.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import CustomCheckbox from '@/components/ui/CustomCheckbox.vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import RaitingStars from '@/components/ui/RaitingStars.vue'

const route = useRoute()

const id = route.params.id

const count = ref(0)

const raiting = ref(5)

const like = ref(false)

const currentProduct = dataCards.find((el) => el.id === +id)

console.log(currentProduct)
</script>

<template>
  <div class="product container">
    <div class="product__main">
      <div class="product__slider">
        <ProductSlider :images="currentProduct?.images" />
      </div>

      <div class="product__content">
        <h1 class="product__title">
          {{ currentProduct?.title }}
        </h1>

        <div class="product__price">
          $
          {{ currentProduct?.price }}
        </div>

        <div class="product__reviews">
          <div class="product__reviews-rating">
            <RaitingStars v-model="raiting" :readonly="true" />
          </div>

          <span class="product__reviews-text">
            {{ currentProduct?.reviews.length }}

            customer review
          </span>
        </div>

        <div class="product__text">
          {{ currentProduct?.text }}
        </div>

        <div class="product__add">
          <CountItems class="product__add-count" v-model="count" />

          <BaseButton type="mode"> ADD TO CART </BaseButton>
        </div>

        <div class="product__link-row">
          <CustomCheckbox class="product__like" v-model="like" type="like" />

          <ul class="product__links">
            <li class="product__links-item">
              <a
                class="product__link"
                href="https://ua.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BaseSvg class="product__link-icon" id="letter" />
              </a>
            </li>

            <li class="product__links-item">
              <a
                class="product__link"
                href="https://www.facebook.com/?locale=ru_RU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BaseSvg class="product__link-icon" id="facebook" />
              </a>
            </li>

            <li class="product__links-item">
              <a
                class="product__link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BaseSvg class="product__link-icon" id="insta" />
              </a>
            </li>

            <li class="product__links-item">
              <a
                class="product__link"
                href="https://x.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BaseSvg class="product__link-icon" id="twiter" />
              </a>
            </li>
          </ul>
        </div>

        <div class="product__more product__more-sku">
          <span>SKU:</span>

          {{ currentProduct?.sku }}
        </div>

        <div class="product__more product__more-categories">
          <span>Categories:</span>

          {{ currentProduct?.categories }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.product {
  &__main {
    display: flex;
    margin-top: 130px;
    gap: 5.2%;

    @include mixins.media-down(md) {
      margin-top: 50px;
    }

    @include mixins.media-down(sm) {
      margin-top: 2px;
      display: block;
    }
  }

  &__slider {
    flex: 0 0 56%;
    overflow: hidden;

    @include mixins.media-down(md) {
      flex: 0 0 50%;
    }
  }

  &__content {
    flex-grow: 1;
  }

  &__title {
    font-size: 26px;
    margin-bottom: 23px;
    line-height: 35px;
  }

  &__price {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: var(--accent);
    margin-bottom: 66px;
  }

  &__reviews {
    display: flex;
    align-items: center;
    gap: 23px;
    margin-bottom: 20px;

    &-rating {
      height: 18px;
    }

    &-text {
      color: var(--text-second);
    }
  }

  &__text {
    margin-bottom: 48px;
    line-height: 27px;
    color: var(--text-second);
  }

  &__add {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 80px;

    &-count {
      width: 155px;
    }
  }

  &__link-row {
    display: flex;
  }

  &__like {
  }

  &__links {
    display: flex;
    align-items: center;

    &-item {
    }
  }

  &__link {
    &-icon {
      width: 20px;
      height: 20px;
    }
  }

  &__more {
    &-sku {
    }

    &-categories {
    }
  }
}
</style>
