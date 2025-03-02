<script setup lang="ts">
import { reactive, ref, type ComponentCustomOptions } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import BurgerBtn from '@/components/ui/BurgerBtn.vue'
import BasketBtn from '@/components/ui/BasketBtn.vue'
import HeaderSearch from '@/components/ui/HeaderSearch.vue'
import TheBasket from './TheBasket.vue'
import TheSearch from './TheSearch.vue'
import {
  dataHeaderMenu,
  dataBurgerMenu,
  dataHeaderPages,
} from '@/components/mixins/data-header-shope'

const isOpenBurgerMenu = ref<boolean>(false)
const basketCount = ref<number>(0)
const search = ref<string>('')
const basketData = reactive<Array<string>>([])
const activeComponent = ref<string>('one')

const components = reactive<Record<string, ComponentCustomOptions | null>>({
  one: null,
  two: TheBasket,
  three: TheSearch,
})

function toggleBasketSearch(condition: string) {
  if (condition === activeComponent.value) {
    activeComponent.value = 'one'

    return
  }

  activeComponent.value = condition
}

function toggleBurger(): void {
  isOpenBurgerMenu.value = !isOpenBurgerMenu.value
  search.value = ''
}
</script>

<template>
  <header class="header">
    <div class="header__head">
      <div class="header__head-container">
        <div class="header__logo">
          <BaseButtonText to="/"> SHOPPE </BaseButtonText>
        </div>

        <div class="header__main">
          <ul class="header__list">
            <li
              class="header__list-item header__list-shope"
              :class="{ 'header__list-item_active': $route.name === 'shope' }"
            >
              Shope

              <div class="header__shop">
                <div class="header__shop-column" v-for="item in dataHeaderMenu" :key="item.title">
                  <p class="header__shop-title">{{ item.title }}</p>

                  <ul class="header__shop-list">
                    <li class="header__shop-list-item" v-for="li in item.list" :key="li.name">
                      <BaseButtonText :to="li.link">
                        {{ li.name }}
                      </BaseButtonText>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li
              class="header__list-item"
              :class="{ 'header__list-item_active': $route.name === item.namePages }"
              v-for="item in dataHeaderPages"
              :key="item.namePages"
            >
              <BaseButtonText :to="item.link">
                {{ item.text }}
              </BaseButtonText>
            </li>
          </ul>

          <div class="header__buttons">
            <div class="header__btn header__btn-search">
              <BaseSvg
                class="header__btn-icon"
                id="search"
                @click.stop="toggleBasketSearch('three')"
              />
            </div>

            <div class="header__btn header__btn-basket">
              <BasketBtn :count="basketCount" @click.stop="toggleBasketSearch('two')" />
            </div>

            <div class="header__btn header__btn-person">
              <BaseSvg class="header__btn-icon" id="person" />
            </div>

            <div class="header__btn header__btn-burger">
              <BurgerBtn @click="toggleBurger()" :isOpen="isOpenBurgerMenu" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="menu" type="transition">
      <div v-if="isOpenBurgerMenu" class="header__burger-menu" v-scroll-lock="true">
        <HeaderSearch v-model="search" :isLoading="false" />

        <Transition name="search" mode="out-in" type="transition">
          <ul class="header__burger-cards" v-if="search.length">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at magni
            excepturi, velit fugiat rem totam consequuntur saepe aut sunt vitae vero harum suscipit
            in! Labore architecto dolorem ab hic?
          </ul>

          <nav class="header__burger-nav" v-else>
            <ul class="header__burger-list">
              <li class="header__burger-list-item" v-for="item in dataBurgerMenu" :key="item.link">
                <BaseButtonText
                  className="header__burger-list-link"
                  @click="isOpenBurgerMenu = false"
                  :to="item.link"
                >
                  {{ item.name }}
                </BaseButtonText>
              </li>
            </ul>

            <div class="header__burger-bottom">
              <BaseButtonText
                className="header__burger-btn header__burger-btn-account"
                to="/account"
              >
                <BaseSvg class="header__burger-btn-icon header__burger-account-icon" id="person" />

                <span class="header__burger-btn-text"> My account </span>
              </BaseButtonText>

              <BaseButtonText className="header__burger-btn header__burger-btn-exit" to="/exit">
                <BaseSvg class="header__burger-btn-icon header__burger-exit-icon" id="exit" />

                <span class="header__burger-btn-text"> Logout </span>
              </BaseButtonText>
            </div>
          </nav>
        </Transition>
      </div>
    </Transition>
  </header>

  <Transition name="right-block" mode="out-in">
    <component
      :is="components[activeComponent]"
      :data="basketData"
      @close="activeComponent = 'one'"
    />
  </Transition>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.header {
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  &__head {
    background-color: var(--background);
    padding: 45px 15px 0;

    @include media-down(md) {
      padding: 10px 15px 0;
    }

    @include media-down(sm) {
      padding: 0;
    }

    &-container {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding-bottom: 7px;
      border-bottom: 1px solid var(--gray);
      background-color: var(--background);
      margin: 0 auto;
      max-width: 1248px;

      @include media-down(sm) {
        padding: 5px 15px;
        border-bottom: unset;
      }
    }
  }

  &__logo {
    font-family:
      Allerta Stencil,
      sans-serif;
    font-size: 35px;

    @include media-down(sm) {
      font-size: 25px;
    }

    &::first-letter {
      color: var(--accent);
    }
  }

  &__main {
    display: flex;
    width: 100%;
    max-width: 504px;

    @include media-down(sm) {
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

    @include media-down(sm) {
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
      transition: color 0.2s;
      position: relative;

      &:hover {
        color: var(--text-second);
        cursor: pointer;
        user-select: none;
      }

      &_active {
        &::before {
          content: '';
          position: absolute;
          bottom: -23px;
          z-index: 2;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--text);
        }
      }
    }

    &-shope {
      &:hover {
        .header__shop {
          opacity: 1;
          pointer-events: unset;
        }
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 50px;
      }
    }
  }

  &__buttons {
    padding-left: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    @include media-down(sm) {
      padding: 0;
    }
  }

  &__btn {
    flex-shrink: 0;

    &-icon {
      fill: var(--text);
      transition: fill 0.2s;

      &:hover {
        fill: var(--text-second);
        cursor: pointer;
        user-select: none;
      }
    }

    &-search {
      width: 19px;
      height: 19px;

      @include media-down(sm) {
        display: none;
      }
    }

    &-person {
      width: 20px;
      height: 20px;

      @include media-down(sm) {
        display: none;
      }
    }
  }

  &__shop {
    position: absolute;
    pointer-events: none;
    top: 46px;
    right: 0;
    transform: translateX(50%);
    background-color: var(--background);
    border: 1px solid var(--gray);
    display: flex;
    padding: 30px 0;
    opacity: 0;

    &-column {
      position: relative;
      width: 205px;
      padding-left: 30px;
      font-size: 14px;
      line-height: 22px;

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
        transition: color 0.2s;

        &:hover {
          color: var(--text);
        }
      }
    }
  }

  &__cards {
    position: relative;
    min-height: calc(100% - 53px);
    margin: 10px 16px;
    border-radius: 4px;
  }

  &__burger {
    &-menu {
      position: fixed;
      padding-top: 5px;
      z-index: -20;
      overflow: auto;
      top: 100px;
      left: 0;
      width: 100%;
      height: calc(100% - 100px);
      background-color: var(--background);

      @include media-down(sm) {
        top: 43px;
        height: calc(100% - 43px);
      }
    }

    &-cards {
      position: relative;
      min-height: 100px;
      margin: 10px 16px;
      border-radius: 4px;
    }

    &-nav {
      padding: 16px 6px;
      display: flex;
      flex-direction: column;
      height: calc(100% - 32px);
    }

    &-list {
      margin: 10px 0 20px;
      flex-grow: 1;

      &-item {
        font-size: 20px;
        line-height: 50px;
        cursor: pointer;
        user-select: none;
      }

      &-link {
        padding: 10px;
      }
    }

    &-bottom {
      border-top: 1px solid var(--gray);
      margin: 0 10px;
      padding-top: 10px;
    }

    &-btn {
      display: flex;
      align-items: center;
      padding: 10px 0;
      line-height: 30px;

      &-text {
        font-size: 20px;
      }

      &-icon {
        color: var(--text);
        margin-right: 10px;
      }
    }

    &-account-icon {
      width: 20px;
      height: 20px;
    }

    &-exit-icon {
      width: 18px;
      height: 18px;
    }
  }
}

.right-block-leave-to,
.right-block-enter-from {
  right: -100%;
}

.right-block-enter-active,
.right-block-leave-active {
  transition: right 0.2s ease-in-out;
}

.right-block-leave-from,
.right-block-enter-to {
  right: 0;
}

.menu-leave-to,
.menu-enter-from {
  top: -100%;
}

.menu-enter-active,
.menu-leave-active {
  transition: top 0.2s ease-in-out;
}

.menu-leave-from,
.menu-enter-to {
  top: 0;
}

.menu-leave-active {
  overflow: hidden;
}

.search-enter-from {
  left: -100%;
}

.search-enter-to {
  left: 0;
}

.search-leave-from {
  left: 0;
}

.search-leave-to {
  left: +100%;
}

.search-enter-active,
.search-leave-active {
  transition: left 0.3s;
}
</style>
