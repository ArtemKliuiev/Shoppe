<script setup lang="ts">
import BaseSvg from '@/components/base/BaseSvg.vue';
import { computed } from 'vue';

interface Props {
  count: number 
}

const props = withDefaults(
    defineProps<Props>(), { count: 0 }
)

const classObject = computed(() => {
    return {
        "basket-btn__count_empty" : props.count === 0,
        "basket-btn__count_one" : props.count < 10,
        "basket-btn__count_two" :  props.count >= 10 && props.count < 100,
        "basket-btn__count_three" :  props.count >= 100
    }
})
</script>

<template>
<div class="basket-btn">
    <BaseSvg id="basket"/>

    <div class="basket-btn__count" :class="classObject">
        <span class="basket-btn__count-text">
            {{ count < 999 ? count: '999' }}
        </span>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as *;

.basket-btn{
    position: relative;
    width: 21px;
    height: 21px;
    cursor: pointer;
    user-select: none;

    @include media-down(sm) {
        width: 18px;
        height: 18px;
        margin-right: 18px;
    }

    &__count{
        position: absolute;
        border: 1px solid var(--text);
        background-color: var(--background);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 8px;

        &-text {
            font-weight: 700;
            line-height: 100%;
        }

        &_empty{
            display: none;
        }

        &_one{
            right: -3px;
            top: -3px;
            height: 14px;
            width: 14px;

            @include media-down(sm) {
                right: -3px;
                top: -3px;
                height: 12px;
                width: 12px;
            }
        }

        &_two{
            right: -5px;
            top: -5px;
            height: 16px;
            width: 16px;
            
            @include media-down(sm) {
                font-size: 7px;
                height: 15px;
                width: 15px;
            }
        }

        &_three{
            right: -7px;
            top: -7px;
            height: 18px;
            width: 18px;
                        
            @include media-down(sm) {
                font-size: 7px;
                height: 17px;
                width: 17px;   
            }
        }
    }
}
</style>