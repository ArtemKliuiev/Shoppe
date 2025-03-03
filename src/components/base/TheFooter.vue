<script setup lang="ts">
import { ref } from 'vue'
import BaseButtonText from './BaseButtonText.vue'
import BaseInput from './BaseInput.vue'
import BaseSvg from './BaseSvg.vue'
import BaseCheckbox from './BaseCheckbox.vue'

const inputValue = ref<string>('')
const agree = ref<boolean>(false)
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

        <BaseInput
          class="footer__input"
          v-model="inputValue"
          type="footer"
          placeholder="Give an email, get the newsletter."
        />

        <div class="footer__agree">
          <BaseCheckbox class="footer__agree-checkbox" v-model="agree" id="agree" />

          <label class="footer__agree-label" for="agree"
            >i agree to the website’s terms and conditions</label
          >
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__bottom-text">© 2021 Shelly. Terms of use and privacy policy.</p>

        <ul class="footer__bottom-list">
          <li class="footer__bottom-list-item">
            <a
              class="footer__link"
              href="https://ua.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BaseSvg class="footer__link-icon" id="linkedin" />
            </a>
          </li>

          <li class="footer__bottom-list-item">
            <a
              class="footer__link"
              href="https://www.facebook.com/?locale=ru_RU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BaseSvg class="footer__link-icon" id="facebook" />
            </a>
          </li>

          <li class="footer__bottom-list-item">
            <a
              class="footer__link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BaseSvg class="footer__link-icon" id="insta" />
            </a>
          </li>

          <li class="footer__bottom-list-item">
            <a
              class="footer__link"
              href="https://x.com/?lang=ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BaseSvg class="footer__link-icon" id="twiter" />
            </a>
          </li>
        </ul>

        <span class="footer__bottom-follow"> Follow us </span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.footer {
  background-color: var(--background);
  padding: 20px 20px 100px;

  @include media-down(md) {
    padding: 20px 20px 50px;
  }

  &__main {
    max-width: 1248px;
    margin: 0 auto;

    padding-top: 27px;
    border-top: 1px solid var(--gray);
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;

    @include media-down(md) {
      margin-bottom: 20px;
    }

    @include media-down(sm) {
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

    @include media-down(md) {
      flex-direction: column;
      margin: 0;
    }

    @include media-down(sm) {
      order: 2;
    }

    &-item {
      text-transform: uppercase;
      color: var(--text-second);
      transition: color 0.3s;

      @include media-down(md) {
        margin-bottom: 10px;
      }

      @include media-down(sm) {
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
  }

  &__bottom {
    display: flex;
    justify-content: space-between;

    @include media-down(sm) {
      display: grid;
      grid-template: repeat(2, auto) / repeat(2, auto);
    }

    &-text {
      color: var(--text-second);
      margin-top: 10px;

      @include media-down(sm) {
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

      @include media-up(sm) {
        display: none;
      }

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
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

      @include media-down(sm) {
        grid-column: 2;
        grid-row: 1;
      }

      &-item {
        height: 20px;
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

      @include media-down(sm) {
        width: 14px;
        height: 14px;
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

    @include media-up(sm) {
      display: none;
    }

    &-checkbox {
      flex-shrink: 0;
      margin-top: 2px;
    }

    &-label {
      font-size: 12px;
      color: var(--text);
      margin-left: 2px;
    }
  }
}
</style>
