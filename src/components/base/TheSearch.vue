<script setup lang="ts">
import { computed } from 'vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

interface Props {
  search: string
  isLoading: boolean
}

interface Emits {
  (e: 'update:search', search: string): void
  (e: 'close'): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const searchValue = computed({
  get() {
    return props.search
  },
  set(newValue: string) {
    emits('update:search', newValue)
  },
})
</script>

<template>
  <div class="search">
    <div class="search__main">
      <h3 class="search__title">Search</h3>

      <SearchInput
        v-model="searchValue"
        :isLoading="isLoading"
        class="search__input"
        placeholder="Search"
        type="search"
      />

      <div class="search__cards">
        <ul class="search__cards-list"></ul>

        <div
          :class="{ 'search__cards-loader_active': isLoading }"
          class="search__cards-loader"
        ></div>
      </div>
    </div>

    <div class="search__bottom">
      <BaseButton to="/shope" type="mode" @click="$emit('close')"> Go to shope </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  padding: 73px 36px 25px;
  display: flex;
  flex-direction: column;

  &__main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__bottom {
    padding-top: 20px;
  }

  &__title {
    font-size: 16px;
    margin-bottom: 20px;
    color: var(--text);
  }

  &__input {
    margin-bottom: 20px;
  }

  &__cards {
    position: relative;

    &-list {
      height: calc(100vh - 267px);
      overflow: auto;
    }

    &-loader {
      position: absolute;
      top: calc(50% - 15px);
      left: calc(50% - 15px);
      border: 6px solid var(--gray);
      border-top: 6px solid var(--accent);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: spin 0.5s linear infinite;
      display: none;

      &_active {
        display: block;
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
