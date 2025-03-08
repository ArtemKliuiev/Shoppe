<script setup lang="ts">
import { computed, inject } from 'vue'
import { dataBurgerMenu } from '@/components/mixins/data-header-shope'
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseInput from '@/components/base/BaseInput.vue'

interface Props {
  search: string
}

interface Emits {
  (e: 'update:search', search: string): void
  (e: 'closeBurger'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const blackTheme = inject<boolean>('blackTheme', false)

const searchValue = computed({
  get() {
    return props.search
  },
  set(newValue: string) {
    emit('update:search', newValue)
  },
})
</script>

<template>
  <div class="burger-menu" v-scroll-lock="true">
    <div class="burger-menu__search">
      <BaseInput
        v-model="searchValue"
        :isLoading="searchValue.length !== 0"
        placeholder="Search"
        type="search"
      />
    </div>

    <Transition name="search" mode="out-in" type="transition">
      <ul class="burger-menu__cards" v-if="searchValue.length"></ul>

      <nav class="burger-menu__nav" v-else>
        <div class="burger-menu__theme">
          <BaseCheckbox v-model="blackTheme" type="custom" />
        </div>

        <ul class="burger-menu__list">
          <li class="burger-menu__list-item" v-for="item in dataBurgerMenu" :key="item.link">
            <BaseButtonText
              className="burger-menu__list-link"
              @click="$emit('closeBurger')"
              :to="item.link"
            >
              {{ item.name }}
            </BaseButtonText>
          </li>
        </ul>

        <div class="burger-menu__bottom">
          <BaseButtonText
            className="burger-menu__btn burger-menu__btn-account"
            @click="$emit('closeBurger')"
            to="/account"
          >
            <BaseSvg class="burger-menu__btn-icon burger-menu__btn-icon-account" id="person" />

            <span class="burger-menu__btn-text"> My account </span>
          </BaseButtonText>

          <BaseButtonText
            className="burger-menu__btn burger-menu__btn-exit"
            @click="$emit('closeBurger')"
            to="/exit"
          >
            <BaseSvg class="burger-menu__btn-icon burger-menu__btn-icon-exit" id="exit" />

            <span class="burger-menu__btn-text"> Logout </span>
          </BaseButtonText>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.burger-menu {
  position: fixed;
  padding-top: 5px;
  z-index: -20;
  overflow: auto;
  left: 0;
  width: 100%;

  top: 43px;
  height: calc(100% - 43px);
  background-color: var(--background);
  color: var(--text);

  @include media-up(sm) {
    display: none;
  }

  &__search {
    padding: 0 16px;
  }

  &__cards {
    position: relative;
    min-height: 100px;
    margin: 10px 16px;
    border-radius: 4px;
  }

  &__nav {
    position: relative;
    padding: 16px 6px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 32px);
  }

  &__theme {
    position: absolute;
    right: 16px;
    top: 40px;
    height: 20px;
  }

  &__list {
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

  &__bottom {
    border-top: 1px solid var(--gray);
    margin: 0 10px;
    padding-top: 10px;
  }

  &__btn {
    display: flex;
    align-items: center;
    padding: 10px 0;
    line-height: 30px;

    &-text {
      font-size: 20px;
    }

    &-icon {
      fill: var(--text);
      margin-right: 10px;
      width: 20px;
      height: 20px;

      &-exit {
        transform: scaleX(-1);
      }
    }
  }
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
