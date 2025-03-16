<script setup lang="ts">
import { inject, onMounted, ref, shallowReactive, type ComponentCustomOptions } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import BurgerBtn from '@/components/ui/BurgerBtn.vue'
import BasketBtn from '@/components/ui/BasketBtn.vue'
import CustomCheckbox from '@/components/ui/CustomCheckbox.vue'
import TheBasket from '@/components/base/TheBasket.vue'
import TheSearch from '@/components/base/TheSearch.vue'
import BurgerMenu from '@/components/ui/BurgerMenu.vue'
import { useBasketStorage } from '@/components/composable/use-basket-storage'
import { dataHeaderMenu, dataHeaderPages } from '@/components/mixins/data-header-shope'
import { useScrollLock } from '@/components/composable/use-scroll-lock'
import type { DataBasket } from '@/components/composable/use-basket-storage'

interface Components {
  [key: string]: ComponentCustomOptions | null
}

const isOpenBurgerMenu = ref(false)
const search = ref('')
const blackTheme = inject('blackTheme', false)
const activeComponent = ref('one')
const basketStorage = useBasketStorage()
const dataBasket = ref<Array<DataBasket>>([])

const components = shallowReactive<Components>({
  one: null,
  two: TheBasket,
  three: TheSearch,
})

onMounted(() => {
  dataBasket.value = basketStorage.get()
})

basketStorage.on((data) => {
  dataBasket.value = data
})

function toggleBasketSearch(condition: string): void {
  switch (condition) {
    case activeComponent.value:
      activeComponent.value = 'one'

      useScrollLock(false)
      break

    case 'one':
      activeComponent.value = condition

      useScrollLock(false)
      break

    default:
      activeComponent.value = condition

      useScrollLock(true)
      break
  }
}

function toggleBurger(): void {
  isOpenBurgerMenu.value = !isOpenBurgerMenu.value

  useScrollLock(isOpenBurgerMenu.value)

  search.value = ''
}
</script>

<template>
  <header :class="{ 'header_main-page': $route.name === 'home' }" class="header">
    <div class="header__head">
      <div class="header__head-container">
        <div class="header__logo">
          <BaseButtonText to="/"> SHOPPE </BaseButtonText>
        </div>

        <div class="header__main">
          <ul class="header__list">
            <li
              :class="{ 'header__list-item_active': $route.name === 'shope' }"
              class="header__list-item header__list-shope"
            >
              Shope

              <div class="header__shop">
                <div v-for="item in dataHeaderMenu" :key="item.title" class="header__shop-column">
                  <p class="header__shop-title">{{ item.title }}</p>

                  <ul class="header__shop-list">
                    <li v-for="li in item.list" :key="li.name" class="header__shop-list-item">
                      <BaseButtonText :to="li.link">
                        {{ li.name }}
                      </BaseButtonText>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li
              v-for="item in dataHeaderPages"
              :key="item.namePages"
              :class="{ 'header__list-item_active': $route.name === item.namePages }"
              class="header__list-item"
            >
              <BaseButtonText :to="item.link">
                {{ item.text }}
              </BaseButtonText>
            </li>
          </ul>

          <div class="header__buttons">
            <div class="header__btn header__btn-theme">
              <CustomCheckbox v-model="blackTheme" type="custom" />
            </div>

            <div class="header__btn header__btn-search">
              <BaseSvg
                class="header__btn-icon"
                id="search"
                @click.stop="toggleBasketSearch('three')"
              />
            </div>

            <div class="header__btn header__btn-basket">
              <BasketBtn :data="dataBasket" @click="toggleBasketSearch('two')" />
            </div>

            <div class="header__btn header__btn-person">
              <BaseSvg class="header__btn-icon" id="person" />
            </div>

            <div class="header__btn header__btn-burger">
              <BurgerBtn :isOpen="isOpenBurgerMenu" @click="toggleBurger()" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="menu" type="transition">
      <BurgerMenu
        v-if="isOpenBurgerMenu"
        v-model:search="search"
        @closeBurger="isOpenBurgerMenu = false"
      />
    </Transition>
  </header>

  <Transition name="right-block" type="transition">
    <component
      v-model:search="search"
      :is="components[activeComponent]"
      :isLoading="true"
      :data="dataBasket"
      class="right-block"
      @close="toggleBasketSearch('one')"
    />
  </Transition>

  <Transition name="right-block-bg">
    <div
      v-if="activeComponent !== 'one'"
      class="right-block-bg"
      @click="toggleBasketSearch('one')"
    ></div>
  </Transition>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.header {
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;

  &__head {
    background-color: var(--background);
    transition: background-color 0.3s;
    padding: 45px 15px 0;

    @include mixins.media-down(lg) {
      padding: 20px 15px 0;
    }

    @include mixins.media-down(md) {
      padding: 0 15px;
    }

    @include mixins.media-down(sm) {
      padding: 0;
    }

    &-container {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding-bottom: 6px;
      border-bottom: 1px solid var(--gray);
      background-color: var(--background);
      transition:
        background-color 0.3s,
        border-bottom 0.3s;
      margin: 0 auto;
      max-width: 1248px;

      @include mixins.media-down(md) {
        padding: 0 15px;
      }

      @include mixins.media-down(sm) {
        padding: 5px 15px;
        border-bottom: unset;
        transition: unset;
      }
    }
  }

  &__logo {
    font-family:
      Allerta Stencil,
      sans-serif;
    font-size: 35px;
    color: var(--text);
    transition: color 0.3s;

    @include mixins.media-down(sm) {
      font-size: 25px;
    }

    &::first-letter {
      color: var(--accent);
    }
  }

  &__main {
    display: flex;
    width: 100%;
    max-width: 550px;

    @include mixins.media-down(md) {
      max-width: 420px;
    }

    @include mixins.media-down(sm) {
      width: unset;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 319px;
    position: relative;
    padding-right: 50px;

    @include mixins.media-down(md) {
      max-width: 230px;
      padding-right: 30px;
    }

    @include mixins.media-down(sm) {
      display: none;
      width: unset;
    }

    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 16px;
      height: 17px;
      width: 1px;
      background-color: var(--text-second);
    }

    &-item {
      transition: color 0.3s;
      position: relative;
      color: var(--text);
      cursor: pointer;
      user-select: none;

      &:hover {
        @media (hover: hover) {
          color: var(--text-second);
        }
      }

      &_active {
        &::before {
          content: '';
          position: absolute;
          bottom: -21px;
          z-index: 2;
          left: 0;
          width: 100%;
          height: 2px;
          transition: background-color 0.3s;
          background-color: var(--text);

          @include mixins.media-down(md) {
            bottom: -15px;
          }
        }
      }
    }

    &-shope {
      &:hover {
        .header__shop {
          opacity: 1;
          transition: unset;
          pointer-events: unset;
        }

        &::after {
          content: '';
          position: absolute;
          width: 400px;
          left: 50%;
          transform: translateX(-50%);
          top: 5px;
          height: 40px;
        }
      }
    }
  }

  &__buttons {
    padding-left: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    @include mixins.media-down(md) {
      padding-left: 30px;
    }

    @include mixins.media-down(sm) {
      padding: 0;
    }
  }

  &__btn {
    flex-shrink: 0;

    &-icon {
      fill: var(--text);
      transition: fill 0.3s;
      cursor: pointer;
      user-select: none;

      &:hover {
        @media (hover: hover) {
          fill: var(--text-second);
        }
      }
    }

    &-search {
      width: 19px;
      height: 19px;

      @include mixins.media-down(sm) {
        display: none;
      }
    }

    &-person {
      width: 20px;
      height: 20px;

      @include mixins.media-down(sm) {
        display: none;
      }
    }

    &-theme {
      height: 20px;

      @include mixins.media-down(sm) {
        display: none;
      }
    }

    &-burger {
      @include mixins.media-up(sm) {
        display: none;
      }
    }
  }

  &__shop {
    position: absolute;
    pointer-events: none;
    top: 44px;
    right: 0;
    transform: translateX(50%);
    background-color: var(--background);
    border: 1px solid var(--gray);
    display: flex;
    padding: 30px 0;
    opacity: 0;
    transition: opacity 0.3s;

    @include mixins.media-down(md) {
      top: 39px;
    }

    &-column {
      position: relative;
      width: 205px;
      padding-left: 30px;
      font-size: 14px;
      line-height: 22px;

      &:last-child {
        &::before {
          display: none;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 1px;
        background-color: var(--gray);
      }
    }

    &-title {
      margin-bottom: 15px;
      color: var(--text);
    }

    &-list {
      color: var(--text-second);

      &-item {
        margin-bottom: 10px;
        transition: color 0.3s;

        &:hover {
          @media (hover: hover) {
            color: var(--text);
          }
        }
      }
    }
  }

  &_main-page {
    .header {
      &__head-container {
        border-bottom: unset;
      }
    }
  }
}

.right-block {
  position: fixed;
  z-index: 100;
  top: 0;
  background-color: var(--background);
  border: 1px solid var(--gray);
  border-right: unset;
  width: 360px;
  height: 100%;
  right: 0;

  @include mixins.media-down(sm) {
    width: 100%;
  }

  &-bg {
    position: fixed;
    z-index: 11;
    bottom: -1vh;
    left: -1vw;
    width: 102vw;
    height: 102vh;
    opacity: 0.2;
    background-color: var(--text-second);

    &-leave-to,
    &-enter-from {
      opacity: 0;
    }

    &-enter-active {
      transition: opacity 0.4s;
    }
    &-leave-active {
      transition: opacity 0.2s;
    }
  }

  &-leave-to,
  &-enter-from {
    right: -100%;
  }

  &-enter-active {
    transition: right 0.2s ease-in-out;
  }

  &-leave-active {
    transition: right 0.4s ease-in-out;
  }

  &-block-leave-from,
  &-enter-to {
    right: 0;
  }
}

.menu {
  &-leave-to,
  &-enter-from {
    top: -100%;
  }

  &-enter-active,
  &-leave-active {
    transition: top 0.2s ease-in-out;
  }

  &-leave-from,
  &-enter-to {
    top: 0;
  }

  &-leave-active {
    overflow: hidden;
  }
}
</style>
