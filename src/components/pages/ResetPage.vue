<template>
  <div class="reset container">
    <h1 class="reset__title">Have you Forgotten Your Password ?</h1>

    <div class="reset__content">
      <p class="reset__text">If you've forgotten your password, enter your e-mail address and we'll send you an e-mail</p>

      <div class="reset__content">
        <form class="reset__form" @submit.prevent="validateAndSend(true)">
          <BaseInput
            v-model="email"
            :error="error"
            name="reset-email"
            id="reset-email"
            type="text"
            placeholder="Email"
            class="reset__input"
          />

          <BaseButton class="reset__btn" type="submit">RESET PASSWORD</BaseButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as yup from 'yup'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useRouter } from 'vue-router'
import { useToast } from '@/components/composable/use-toast'
import { supabase } from '@/lib/supabaseClient'
import type { WatchStopHandle } from 'vue'

const email = ref('')
const error = ref('')
const router = useRouter()
const toast = useToast()

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
})

let addWatch: WatchStopHandle | null = null

async function validateAndSend(send: boolean) {
  error.value = ''

  try {
    await schema.validate({ email: email.value })

    if (send) resetPassword()
  } catch (err) {
    if (err instanceof yup.ValidationError) error.value = err.message
  }

  if (addWatch) {
    addWatch()
    addWatch = null
  }

  addWatch = watch(email, () => {
    validateAndSend(false)
  })
}

async function resetPassword() {
  const { error: supabaseError } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${window.location.origin}/password`,
  })

  if (supabaseError) {
    error.value = supabaseError.message
    return
  }

  toast.show('Check your email for the reset link.', 'success', null, 5000)

  router.push('/')
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.reset {
  margin: 130px auto 0;

  &__title {
    font-size: 33px;
    font-weight: 500;
    text-align: center;
    max-width: 561px;
    margin: 0 auto 32px;

    @include mixins.media-down(sm) {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }

  &__content {
    max-width: 500px;
    margin: 0 auto;
  }

  &__text {
    text-align: center;
    font-size: 16px;
    color: var(--text-secondary);
    font-size: 20px;
    margin: 0 auto 60px;
    max-width: 480px;

    @include mixins.media-down(sm) {
      font-size: 12px;
    }
  }

  &__input {
    margin-bottom: 65px;

    @include mixins.media-down(sm) {
      margin-bottom: 40px;
    }
  }
}
</style>
