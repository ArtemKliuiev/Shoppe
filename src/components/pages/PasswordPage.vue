<template>
  <div class="password container">
    <h1 class="password__title">Reset your password</h1>

    <div class="password__content">
      <p class="password__text">Enter a new password to complete the reset process.</p>

      <form class="password__sign" @submit.prevent="validateForm(true)">
        <div class="password__inputs">
          <BaseInput
            v-model="formData.password"
            :error="errors.password"
            name="new-password"
            id="new-password"
            type="password"
            placeholder="New Password"
            class="password__input"
          />

          <BaseInput
            v-model="formData.confirmPassword"
            :error="errors.confirmPassword"
            name="confirm-password"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            class="password__input"
          />
        </div>

        <BaseButton class="password__btn" type="submit">Set Password</BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as yup from 'yup'
import { ref, watch } from 'vue'
import { useToast } from '@/components/composable/use-toast'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import type { WatchStopHandle } from 'vue'

type validationErrors = Record<string, string>

interface FormData {
  password: string
  confirmPassword: string
}

const toast = useToast()
const router = useRouter()
const errors = ref<validationErrors>({})
const formData = ref<FormData>({
  password: '',
  confirmPassword: '',
})

const schema = yup.object({
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required'),
})

let addWatch: WatchStopHandle | null = null

async function validateForm(send: boolean) {
  errors.value = {}

  try {
    await schema.validate(formData.value, { abortEarly: false })

    if (!send) return

    const { error } = await supabase.auth.updateUser({ password: formData.value.password })

    if (error) {
      toast.show(error.message, 'error')

      return
    }

    toast.show('Password updated successfully', 'success')
    router.push('/')
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      errors.value = err.inner.reduce((acc: validationErrors, curr) => {
        const fieldName = curr.path

        if (fieldName) acc[fieldName] = curr.message

        return acc
      }, {})
    }
  }

  if (addWatch) return

  addWatch = watch(formData.value, () => {
    validateForm(false)
    console.log('weqe')
  })
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as mixins;

.password {
  margin: 128px auto 0;

  &__title {
    font-size: 33px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 60px;

    @include mixins.media-down(md) {
      margin-bottom: 50px;
    }

    @include mixins.media-down(sm) {
      margin-bottom: 23px;
      font-size: 28px;
    }

    @include mixins.media-down(xs) {
      font-size: 20px;
    }
  }

  &__content {
    max-width: 500px;
    margin: 0 auto 30px;
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
      margin-bottom: 40px;
    }
  }
  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-bottom: 30px;
  }

  &__btn {
    width: 100%;
  }
}
</style>
