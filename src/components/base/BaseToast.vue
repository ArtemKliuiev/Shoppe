<template>
  <Transition name="toast" type="transition">
    <div v-if="toastData.show" class="toast">
      <div
        :style="{
          borderTopColor: toastData.status === 'success' ? 'var(--accent)' : 'var(--errors)',
        }"
        class="toast__main"
      >
        <div class="toast__info">
          <div v-if="toastData.status === 'success'" class="toast__check toast__check-success">
            <BaseSvg id="check-mark" class="toast__check-icon" />
          </div>

          <div v-else class="toast__check toast__check-error">
            <BaseSvg id="cancel" class="toast__check-icon" />
          </div>

          <p class="toast__text">
            {{ toastData.text }}
          </p>
        </div>

        <div class="toast__btn">
          <BaseButtonText v-if="toastData.link" :to="toastData.link.url" class="toast__btn-link">
            {{ toastData.link.text }}
          </BaseButtonText>

          <BaseButton v-else styles="text" @click="toastData.show = false"> CLOSE </BaseButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { reactive, nextTick } from 'vue'
import BaseSvg from '@/components/base/BaseSvg.vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useToast } from '@/components/composable/use-toast'
import type { Link, ToastStatus } from '@/components/composable/use-toast'

interface ToastData {
  text: string
  show: boolean
  link: Link | null
  status: ToastStatus
}

const toast = useToast()

const toastData = reactive<ToastData>({
  text: '',
  show: false,
  link: null,
  status: 'success',
})

let timeoutId: ReturnType<typeof setTimeout> | null = null

toast.on((message, status, link, time) => {
  if (toastData.show) {
    toastData.show = false

    nextTick(() => {
      toastData.show = true
    })
  } else toastData.show = true

  toastData.text = message
  toastData.status = status || 'success'

  if (link) toastData.link = link

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    toastData.show = false
    timeoutId = null
  }, time)
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;
.toast {
  position: absolute;
  top: calc(100% - 1px);
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  margin: 0 auto;
  max-width: 1278px;
  padding: 0 15px;

  &__main {
    border-top: 2px solid var(--accent);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: var(--gray-two);
    padding: 24px 24px 24px 40px;

    @include mixins.media-down(sm) {
      padding: 15px;
    }
  }

  &__info {
    display: flex;
    gap: 16px;

    @include mixins.media-down(sm) {
      gap: 6px;
    }
  }

  &__check {
    margin-top: 2px;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @include mixins.media-down(sm) {
      width: 14px;
      height: 14px;
    }

    &-success {
      background-color: var(--accent);
    }

    &-error {
      background-color: var(--errors);
    }

    &-icon {
      aspect-ratio: 1/1;
      fill: var(--background);
      width: 9px;

      @include mixins.media-down(sm) {
        width: 6px;
      }
    }
  }

  &__text {
    @include mixins.media-down(sm) {
      font-size: 12px;
    }
  }

  &__btn {
    flex-shrink: 0;

    &-link {
      color: var(--accent);
      font-weight: 700;

      @include mixins.media-down(sm) {
        font-size: 12px;
      }

      &:hover {
        @media (hover: hover) {
          background-color: unset;
          border: unset;
          color: var(--accent);
        }
      }
    }
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: transform 0.3s ease;
  z-index: -1;
}
.toast-enter-from,
.toast-leave-to {
  transform: translate(-50%, -100%);
}

.toast-enter-to,
.toast-leave-from {
  transform: translate(-50%, 0);
}
</style>
