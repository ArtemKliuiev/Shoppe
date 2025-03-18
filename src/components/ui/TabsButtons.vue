<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

// const width = computed(() => {
//   const el = document.querySelector('tabs__tab_active')

//   const widthEl = el?.clientWidth

//   console.log(widthEl)
// })

const tabs = reactive([
  {
    title: 'Description',
    active: true,
  },
  {
    title: 'Aditional information',
    active: false,
  },
  {
    title: 'Reviews',
    active: false,
    count: 0,
  },
])

function toggle(id: number) {
  tabs.forEach((tab) => (tab.active = false))

  tabs[id].active = true
  console.log(id)
}
</script>

<template>
  <ul class="tabs">
    <li
      v-for="(tab, index) in tabs"
      :key="tab.title"
      :class="{ tabs__tab_active: tab.active }"
      class="tabs__tab"
      @click="toggle(index)"
    >
      {{ tab.title }} {{ tab.count || tab.count === 0 ? `(${tab.count})` : '' }}
    </li>
  </ul>

  <div class="tabs__progress"></div>
</template>

<style scoped lang="scss">
.tabs {
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--gray);
  transition: border-bottom 0.3s;
  gap: 5%;

  &__tab {
    position: relative;
    user-select: none;
    cursor: pointer;
    color: var(--text-second);
    transition: color 0.3s;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -21px;
      height: 1px;
      background-color: var(--text);
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s;
    }

    &_active {
      cursor: default;
      color: var(--text);

      &::after {
        transform: scaleX(1);
        transition: transform 0.3s 0.15s;
      }
    }
  }

  &__progress {
  }
}
</style>
