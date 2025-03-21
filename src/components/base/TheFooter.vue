<script setup lang="ts">
import { ref } from 'vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import FooterInput from '@/components/ui/FooterInput.vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import CustomCheckbox from '@/components/ui/CustomCheckbox.vue'
import { dataFooterLinks } from '@/components/mixins/data-footer-links'

const inputValue = ref('')
const agree = ref(false)
</script>

<template>
  <footer class="footer">
    <div class="footer__main border-top: 1px solid var(--gray);">
      <div class="footer__top">
        <ul class="footer__list">
          <li class="footer__list-item">
            <BaseButtonText to="/contact"> Contact</BaseButtonText>
          </li>

          <li class="footer__list-item">
            <BaseButtonText to="/404"> Terms of services </BaseButtonText>
          </li>

          <li class="footer__list-item">
            <BaseButtonText to="/404"> Shipping and returns</BaseButtonText>
          </li>
        </ul>

        <FooterInput
          v-model="inputValue"
          class="footer__input"
          type="footer"
          placeholder="Give an email, get the newsletter."
        />

        <div class="footer__agree">
          <CustomCheckbox v-model="agree" class="footer__agree-checkbox" id="agree" />

          <label class="footer__agree-label" for="agree"
            >i agree to the website’s terms and conditions</label
          >
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__bottom-text">© 2021 Shelly. Terms of use and privacy policy.</p>

        <ul class="footer__bottom-list">
          <li v-for="link in dataFooterLinks" :key="link.link" class="footer__bottom-list-item">
            <a class="footer__link" :href="link.link" target="_blank" rel="noopener noreferrer">
              <BaseSvg class="footer__link-icon" :id="link.iconId" />
            </a>
          </li>
        </ul>

        <span class="footer__bottom-follow"> Follow us </span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.footer {
  background-color: var(--background);
  transition: background-color 0.3s;
  padding: 250px 20px 100px;

  @include mixins.media-down(md) {
    padding: 150px 20px 50px;
  }

  @include mixins.media-down(sm) {
    padding: 50px 20px 30px;
  }

  @include mixins.media-down(xs) {
    padding: 80px 20px 20px;
  }

  &__main {
    max-width: 1248px;
    margin: 0 auto;
    padding-top: 27px;
    border-top: 1px solid var(--gray);
    transition: border 0.3s;

    @include mixins.media-down(xs) {
      padding-top: unset;
      border-top: unset;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;

    @include mixins.media-down(md) {
      margin-bottom: 24px;
    }

    @include mixins.media-down(xs) {
      flex-direction: column;
    }
  }

  &__list {
    display: flex;
    margin-top: 27px;
    justify-content: space-between;
    flex-grow: 1;
    max-width: 500px;
    padding-right: 15px;

    @include mixins.media-down(md) {
      flex-direction: column;
      margin: 0;
    }

    @include mixins.media-down(xs) {
      order: 2;
    }

    &-item {
      text-transform: uppercase;
      color: var(--text-second);
      transition: color 0.3s;

      @include mixins.media-down(md) {
        margin-bottom: 8px;
      }

      @include mixins.media-down(sm) {
        font-size: 12px;
        line-height: 20px;
      }

      &:hover {
        @media (hover: hover) {
          color: var(--text);
        }
      }
    }
  }

  &__input {
    flex-grow: 1;
    max-width: 396px;

    @include mixins.media-down(xs) {
      max-width: unset;
      margin-bottom: 13px;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;

    @include mixins.media-down(xs) {
      display: grid;
      grid-template: repeat(2, auto) / auto 1fr;
    }

    &-text {
      color: var(--text-second);
      margin-top: 10px;

      @include mixins.media-down(sm) {
        font-size: 14px;
        line-height: 21px;
      }

      @include mixins.media-down(xs) {
        margin-top: 36px;
        font-size: 12px;
        line-height: 20px;
        grid-column: 1/3;
        grid-row: 2;
      }
    }

    &-follow {
      position: relative;
      font-size: 12px;
      line-height: 20px;
      grid-column: 1;
      grid-row: 1;
      width: 119px;

      @include mixins.media-up(xs) {
        display: none;
      }

      &:before {
        content: '';
        position: absolute;
        bottom: 6px;
        right: 5px;
        width: 47px;
        height: 1px;
        background-color: var(--text);
      }
    }

    &-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      max-width: 157px;

      @include mixins.media-down(xs) {
        grid-column: 2;
        justify-content: flex-start;
        gap: 16px;
        grid-row: 1;
      }

      &-item {
        height: 20px;

        &:first-child {
          @include mixins.media-down(xs) {
            display: none;
          }
        }
      }
    }
  }

  &__link {
    cursor: pointer;
    user-select: none;

    &-icon {
      width: 20px;
      height: 20px;
      fill: var(--text-second);
      transition:
        fill 0.3s,
        transform 0.3s;

      @include mixins.media-down(sm) {
        width: 16px;
        height: 16px;
      }

      @include mixins.media-down(xs) {
        width: 12px;
        height: 12px;
      }

      &:hover {
        @media (hover: hover) {
          fill: var(--text);
        }
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  &__agree {
    display: flex;
    margin-bottom: 40px;

    @include mixins.media-up(xs) {
      display: none;
    }

    &-checkbox {
      flex-shrink: 0;
      margin-top: 2px;
    }

    &-label {
      font-size: 12px;
      color: var(--text);
      padding-left: 5px;
      user-select: none;
      cursor: pointer;
    }
  }
}
</style>
