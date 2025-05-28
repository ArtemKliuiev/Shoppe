<template>
  {{ sortId }}
  <table>
    <caption>
      Графік роботи
    </caption>
    <thead>
      <tr>
        <th @click="change('id')">id</th>
        <th @click="change('name')">name</th>
        <th @click="change('age')">age</th>
        <th @click="change('isActive')">isActive</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in result" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.isActive }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const arr = [
  { id: 1, name: 'Alice', age: 30, isActive: true },
  { id: 2, name: 'Bob', age: 25, isActive: true },
  { id: 3, name: 'Charlie', age: 35, isActive: false },
]

const sortId = ref(0)
const sortKey = ref('')

function change(data) {
  if (sortKey.value !== data) sortId.value = 0

  sortKey.value = data

  if (sortId.value < 2) return sortId.value++

  sortId.value = 0
}

const result = computed(() => {
  console.log(sortKey.value)

  if (sortId.value === 1) {
    return [...arr].sort((a, b) => {
      if (typeof a[sortKey.value] === 'string') {
        return a[sortKey.value] < b[sortKey.value] ? 1 : -1
      }

      return a[sortKey.value] - b[sortKey.value]
    })
  }

  if (sortId.value === 2) {
    return [...arr].sort((a, b) => {
      if (typeof a[sortKey.value] === 'string') {
        return a[sortKey.value] > b[sortKey.value] ? 1 : -1
      }

      return b[sortKey.value] - a[sortKey.value]
    })
  }

  return arr
})
</script>
