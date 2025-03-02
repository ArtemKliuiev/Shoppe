<script setup lang="ts">
import { computed } from 'vue'
import { dataBurgerMenu } from '@/components/mixins/data-header-shope'
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import HeaderSearch from '@/components/ui/HeaderSearch.vue'

interface Props {
  search: string
}

interface Emits {
  (e: 'update:search', search: string): void
  (e: 'closeBurger'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

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
    <HeaderSearch v-model="searchValue" :isLoading="searchValue.length !== 0" />

    <Transition name="search" mode="out-in" type="transition">
      <ul class="burger-menu__cards" v-if="searchValue.length">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at magni excepturi,
        velit fugiat rem totam consequuntur saepe aut sunt vitae vero harum suscipit in! Labore
        architecto dolorem ab hic?
      </ul>

      <nav class="burger-menu__nav" v-else>
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
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
  background-color: var(--background);
  color: var(--text);

  @include media-down(sm) {
    top: 43px;
    height: calc(100% - 43px);
  }

  &__cards {
    position: relative;
    min-height: 100px;
    margin: 10px 16px;
    border-radius: 4px;
  }

  &__nav {
    padding: 16px 6px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 32px);
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
      color: var(--text);
      margin-right: 10px;

      &-account {
        width: 20px;
        height: 20px;
      }

      &-exit {
        width: 18px;
        height: 18px;
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
