<script setup lang="ts">
import { computed } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue';

interface Props {
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const text = computed({
  get(){
    return props.modelValue
  },
  set(newValue: string){
    emits('update:modelValue', newValue)
  }
})

</script>

<template>
<div class="search">
    <input type="text" v-model="text" placeholder="Search">

    <BaseSvg class="search__icon" id="search"/>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as *;

.search{
    position: relative;
    padding: 0 16px;

    &__icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 25px;
        width: 14px;
        height: 14px;
        fill: var(--text-second);
    }

    input{
        box-sizing: border-box;
        background-color: var(--gray-two);
        height: 32px;
        border-radius: 4px;
        width: 100%;
        padding: 10px 10px 10px 30px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: var(--text-second);
    }
}

</style>