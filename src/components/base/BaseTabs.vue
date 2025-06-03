<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.index"
      :class="{ tabs__tab_active: tab.index === activeTab.index }"
      class="tabs__tab"
      @click="() => changeTab(tab)"
    >
      {{ tab.name }}
    </button>

    <div
      :style="{
        width: tabWidth + '%',
        left: bgPosition,
      }"
      class="tabs__background"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { LoginTab } from '@/components/mixins/data-login-tabs'
import { ref } from 'vue'

const props = defineProps<{
  tabs: LoginTab[]
}>()

const activeTab = defineModel<LoginTab>({
  required: true,
})

const bgPosition = ref('0%')
const tabWidth = 100 / props.tabs.length

function changeTab(tab: LoginTab) {
  activeTab.value = tab

  bgPosition.value = `${tab.index * tabWidth - tabWidth}%`
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.tabs {
  display: flex;
  background-color: var(--gray-two);
  border-radius: 8px;
  width: 100%;
  position: relative;
  border: 5px solid var(--gray-two);
  box-sizing: border-box;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  @include mixins.media-down(md) {
    border-width: 4px;
  }

  @include mixins.media-down(sm) {
    border-width: 3px;
  }

  @include mixins.media-down(xs) {
    border-width: 2px;
  }

  &__tab {
    padding: 0;
    height: 50px;
    font-size: 20px;
    flex: 1;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    z-index: 1;
    color: var(--text);
    transition: color 0.3s;

    @include mixins.media-down(md) {
      height: 40px;
      font-size: 16px;
    }

    @include mixins.media-down(sm) {
      height: 32px;
      font-size: 14px;
    }

    @include mixins.media-down(xs) {
      height: 28px;
      font-size: 12px;
    }
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--background);
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    transition:
      left 0.3s,
      background-color 0.3s;
  }
}
</style>
