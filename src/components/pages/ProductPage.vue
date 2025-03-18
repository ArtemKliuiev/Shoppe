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
import { dataProductLinks } from '@/components/mixins/data-product-links'

const route = useRoute()
const id = route.params.id
const count = ref(0)
const raiting = ref(1)
const like = ref(false)
const currentProduct = dataCards.find((el) => el.id === +id)
const isShowText = ref(false)
const isShowMore = ref(false)

function toggleShowText() {
  isShowText.value = !isShowText.value

  if (isShowText.value) return (isShowMore.value = true)

  setTimeout(() => {
    isShowMore.value = false
  }, 500)
}
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

        <div class="product__block">
          <div :class="{ product__text_show: isShowText }" class="product__text">
            <div class="product__text-container">
              <p
                :class="{ 'product__text-article_show': isShowMore }"
                class="product__text-article"
              >
                {{ currentProduct?.text }}
              </p>
            </div>

            <div class="product__text-more" @click="toggleShowText()">
              <span>View more</span>

              <BaseSvg class="product__text-icon" id="back-arrow" />
            </div>
          </div>

          <div class="product__add">
            <CountItems v-model="count" class="product__add-count" type="big" />

            <BaseButton type="mode"> ADD TO CART </BaseButton>
          </div>
        </div>

        <div class="product__link-row">
          <CustomCheckbox class="product__like" v-model="like" type="like-two" />

          <ul class="product__links">
            <li v-for="link in dataProductLinks" :key="link.link" class="product__links-item">
              <a
                class="product__link"
                :href="link.link"
                :target="link.target"
                rel="noopener noreferrer"
              >
                <BaseSvg class="product__link-icon" :id="link.iconId" />
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

    @include mixins.media-down(xs) {
      font-size: 20px;
      margin-bottom: 2px;
    }
  }

  &__price {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: var(--accent);
    margin-bottom: 66px;

    @include mixins.media-down(sm) {
      margin-bottom: 24px;
    }

    @include mixins.media-down(xs) {
      font-size: 16px;
    }
  }

  &__reviews {
    display: flex;
    align-items: center;
    gap: 23px;
    margin-bottom: 20px;

    @include mixins.media-down(sm) {
      display: none;
    }

    &-rating {
      height: 18px;
    }

    &-text {
      color: var(--text-second);
    }
  }

  &__block {
    @include mixins.media-down(sm) {
      display: flex;
      flex-direction: column;
    }
  }

  &__text {
    margin-bottom: 48px;

    @include mixins.media-down(sm) {
      order: 1;
      margin-bottom: 35px;
    }

    @include mixins.media-down(xs) {
      margin-bottom: 10px;
    }

    &-container {
      @include mixins.media-down(xs) {
        display: grid;
        grid-template-rows: 44px 0fr;
        transition: grid-template-rows 0.5s ease-in-out;
        overflow: hidden;
      }
    }

    &-article {
      line-height: 27px;
      color: var(--text-second);
      grid-row: 1/3;

      @include mixins.media-down(xs) {
        margin-bottom: 8px;
        font-size: 12px;
        line-height: 20px;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;

        overflow: hidden;
      }

      &_show {
        line-clamp: unset;
        -webkit-line-clamp: unset;
      }
    }

    &-more {
      display: none;
      align-items: center;
      cursor: pointer;
      gap: 5px;
      font-size: 12px;
      color: var(--accent);
      fill: var(--accent);
      user-select: none;
      transition:
        color 0.3s,
        transform 0.3s;

      &:hover {
        @media (hover: hover) {
          color: var(--text);
          fill: var(--text);
        }
      }

      @include mixins.media-down(xs) {
        display: inline-flex;
      }
    }

    &-icon {
      width: 6px;
      height: 8px;
      transform: rotate(180deg);
      transition: transform 0.3s;
    }

    &_show {
      .product {
        &__text {
          &-icon {
            transform: rotate(90deg);
          }

          &-container {
            grid-template-rows: 45px 1fr;
          }

          // &-article {
          //   line-clamp: unset;
          //   -webkit-line-clamp: unset;
          // }
        }
      }
    }
  }

  &__add {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 77px;

    @include mixins.media-down(sm) {
      margin-bottom: 35px;
    }

    @include mixins.media-down(xs) {
      margin-bottom: 15px;
    }

    &-count {
      flex-shrink: 0;

      @include mixins.media-down(xs) {
        display: none;
      }
    }
  }

  &__link-row {
    display: flex;
    align-items: center;
    margin-bottom: 35px;

    @include mixins.media-down(xs) {
      display: none;
    }
  }

  &__like {
    margin-right: 79px;

    &::before {
      content: '';
      position: absolute;
      pointer-events: none;
      right: -40px;
      top: 0;
      width: 1px;
      transition: background-color 0.3s;
      background-color: var(--gray);
      height: 20px;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 141px;

    &-item {
    }
  }

  &:hover {
    @media (hover: hover) {
      fill: var(--text);
    }
  }

  &__link {
    height: 27px;
    display: flex;
    align-items: center;
    fill: var(--text-second);
    transition: fill 0.3s;

    &:hover {
      @media (hover: hover) {
        fill: var(--text);
      }
    }

    &-icon {
      width: 20px;
      height: 20px;
    }
  }

  &__more {
    color: var(--text-second);

    @include mixins.media-down(xs) {
      display: none;
    }

    span {
      margin-right: 12px;
      color: var(--text);
    }

    &-sku {
      margin-bottom: 9px;
    }
  }
}
</style>
