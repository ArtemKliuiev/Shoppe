<script setup lang="ts">
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseInput from '@/components/base/BaseInput.vue'

interface Props {
  placeholder?: string
  errorText?: string
}

defineProps<Props>()

const text = defineModel<string>({
  required: true,
})
</script>

<template>
  <div class="footer-input">
    <BaseInput v-model="text" :base-placeholder="placeholder" id="footer-input" type="text" />

    <BaseSvg class="footer-input__icon" id="footer-arrow" />

    <label class="footer-input__error">
      {{ errorText }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as mixins;

.footer-input {
  position: relative;
  border-bottom: 1px solid var(--text);
  transition: border 0.3s;
  height: 51px;

  @include mixins.media-down(sm) {
    height: 35px;
  }

  &:deep(input[type='text']) {
    border: none;
    height: 100%;
    font-size: 16px;
    line-height: 27px;
    padding: 10px 35px 10px 0;
    width: 100%;
    color: var(--text-second);

    @include mixins.media-down(sm) {
      font-size: 12px;
      line-height: 20px;
    }
  }

  &__icon {
    padding: 5px;
    position: absolute;
    top: 18px;
    right: -5px;
    width: 35px;
    height: 19px;
    fill: var(--text-second);
    cursor: pointer;
    user-select: none;
    transition:
      fill 0.3s,
      transform 0.3s;

    @include mixins.media-down(sm) {
      top: 7px;
      right: -3px;
    }

    &:hover {
      @media (hover: hover) {
        fill: var(--text);
      }
    }

    &:active {
      transform: translateX(7px);
    }
  }

  &__error {
    position: absolute;
    top: 50px;
    font-size: 12px;
    left: 0;
    color: var(--errors);

    @include mixins.media-down(sm) {
      font-size: 10px;
      top: 34px;
    }
  }
}
</style>
