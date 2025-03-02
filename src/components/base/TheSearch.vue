<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import HeaderSearch from '../ui/HeaderSearch.vue'
import BaseButton from './BaseButton.vue'

interface Props {
  search: string
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

const htmlEL = ref<HTMLDivElement | null>(null)
const listenerClick = (e: MouseEvent) =>
  !htmlEL.value?.contains(e.target as Node | null) ? emits('close') : null

onMounted(() => {
  document.addEventListener('click', listenerClick)
})

onUnmounted(() => {
  document.removeEventListener('click', listenerClick)
})
</script>

<template>
  <div class="search" ref="htmlEL">
    <div class="search__main">
      <h3 class="search__title">Search</h3>

      <HeaderSearch class="search__input" v-model="searchValue" :isLoading="false" />

      <ul class="search__cards"></ul>
    </div>

    <div class="search__bottom">
      <BaseButton to="/shope" mode @click="$emit('close')"> Go to shope </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as *;

.search {
  padding: 73px 36px 25px;
  display: flex;
  flex-direction: column;

  &__main {
    flex-grow: 1;
  }

  &__bottom {
    padding-top: 20px;
  }

  &__title {
    font-size: 16px;
    margin-bottom: 20px;
  }

  &__input {
    margin-bottom: 20px;
  }

  &__cards {
  }
}
</style>
