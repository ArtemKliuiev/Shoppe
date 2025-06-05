<template>
  <div class="login container">
    <h1 class="login__title">My account</h1>

    <div class="login__content">
      <BaseTabs v-model="activeTab" :tabs="tabs" class="login__tabs" />

      <form v-if="activeTab.index === 1" class="login__sign" @submit.prevent="validateLoginForm(true)">
        <div class="login__inputs">
          <BaseInput
            v-model="signData.email"
            :error="errors.email"
            name="login-email"
            id="login-email"
            class="login__input"
            type="text"
            placeholder="Email"
            autocomplete="email"
          />

          <BaseInput
            v-model="signData.password"
            :error="errors.password"
            class="login__input"
            type="password"
            name="login-password"
            id="login-password"
            placeholder="Password"
            autocomplete="current-password"
            password
          />
        </div>

        <div class="login__check">
          <CustomCheckbox v-model="signData.save" id="remember" class="login__check-checkbox" />

          <label class="login__check-label" for="remember"> Remember me </label>
        </div>

        <BaseButton class="login__btn" type="submit"> Sign in </BaseButton>

        <BaseButtonText v-if="activeTab.index === 1" to="/reset" class="login__forget">Have you forgotten your password?</BaseButtonText>
      </form>

      <form v-else class="login__register" @submit.prevent="validateRegisterForm(true)">
        <div class="login__inputs">
          <BaseInput
            v-model="registerData.email"
            :error="errors.email"
            class="login__input"
            name="register-email"
            id="register-email"
            type="text"
            placeholder="Email"
          />

          <BaseInput
            v-model="registerData.password"
            :error="errors.password"
            class="login__input"
            name="register-password"
            id="register-password"
            type="password"
            placeholder="Password"
            autocomplete="new-password"
          />

          <BaseInput
            v-model="registerData.confirmPassword"
            :error="errors.confirmPassword"
            class="login__input"
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
        </div>

        <div class="login__check">
          <CustomCheckbox v-model="registerData.agree" id="agree" class="login__check-checkbox" />

          <label class="login__check-label" for="agree">
            I agree to the processing of my personal data in accordance with the
            <BaseButtonText to="#">Privacy Policy</BaseButtonText>
          </label>

          <span class="login__check-error" v-if="errors.agree">
            {{ errors.agree }}
          </span>
        </div>

        <BaseButton class="login__btn" type="submit"> Register </BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as yup from 'yup'
import BaseTabs from '@/components/base/BaseTabs.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButtonText from '@/components/base/BaseButtonText.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import CustomCheckbox from '@/components/ui/CustomCheckbox.vue'
import { useRouter } from 'vue-router'
import { useToast } from '@/components/composable/use-toast'
import { supabase } from '@/lib/supabaseClient'
import { tabs } from '@/components/mixins/data-login-tabs'
import type { WatchStopHandle } from 'vue'

interface SignData {
  email: string
  password: string
  save: boolean
}

interface RegisterData {
  email: string
  password: string
  confirmPassword: string
  agree: boolean
}

type validationErrors = Record<string, string>

const signData = ref<SignData>({
  email: '',
  password: '',
  save: false,
})

const registerData = ref<RegisterData>({
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
})

const activeTab = ref(tabs[0])
const errors = ref<validationErrors>({})
const toast = useToast()
const router = useRouter()

const signSchema: yup.ObjectSchema<SignData> = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(3, 'Minimum 3 characters').max(20, 'Maximum 20 characters'),
  save: yup.boolean().default(false),
})

const registerSchema: yup.ObjectSchema<RegisterData> = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(3, 'Minimum 3 characters').max(20, 'Maximum 20 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  agree: yup.boolean().oneOf([true], 'You must agree to continue').required('You must agree to continue'),
})

let addWatch: WatchStopHandle | null = null

watch(activeTab, () => {
  resetForms()
})

function resetForms() {
  if (addWatch) {
    addWatch()
    addWatch = null
  }

  signData.value = {
    email: '',
    password: '',
    save: false,
  }

  registerData.value = {
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  }

  errors.value = {}
}

async function validateLoginForm(sendData: boolean) {
  try {
    await signSchema.validate(signData.value, { abortEarly: false })

    errors.value = {}

    if (sendData) login()
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

  addWatch = watch(signData.value, () => {
    validateLoginForm(false)
  })
}

async function validateRegisterForm(sendData: boolean) {
  try {
    await registerSchema.validate(registerData.value, { abortEarly: false })

    errors.value = {}

    if (sendData) register()
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

  addWatch = watch(registerData.value, () => {
    validateRegisterForm(false)
  })
}

async function login() {
  const { error } = await supabase.auth.signInWithPassword({
    email: signData.value.email,
    password: signData.value.password,
  })

  if (error) {
    toast.show(error.message, 'error')

    return
  }

  toast.show('You have successfully logged in.', 'success')

  router.push('/account')
}

async function register() {
  const { error } = await supabase.auth.signUp({
    email: registerData.value.email,
    password: registerData.value.password,
  })

  if (error) {
    toast.show(error.message, 'error')
    return
  }

  toast.show('Check your email to confirm your account.', 'success', null, 5000)

  router.push('/')
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/index.scss' as mixins;

.login {
  margin: 128px auto 0;

  @include mixins.media-down(md) {
    margin: 100px auto 0;
  }

  @include mixins.media-down(sm) {
    margin: 50px auto 0;
  }

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
    margin: 0 auto;
  }

  &__tabs {
    margin-bottom: 115px;

    @include mixins.media-down(md) {
      margin-bottom: 90px;
    }

    @include mixins.media-down(sm) {
      margin-bottom: 72px;
    }
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-bottom: 30px;

    @include mixins.media-down(md) {
      gap: 30px;
    }

    @include mixins.media-down(sm) {
      gap: 21px;
      margin-bottom: 20px;
    }
  }

  &__check {
    gap: 8px;
    display: flex;
    margin-bottom: 70px;
    position: relative;

    @include mixins.media-down(md) {
      margin-bottom: 50px;
    }

    @include mixins.media-down(sm) {
      margin-bottom: 30px;
      font-size: 12px;
      gap: 3px;
    }

    &-checkbox {
      margin-top: 5px;
      flex-shrink: 0;

      @include mixins.media-down(sm) {
        margin-top: 2px;
      }
    }

    &-label {
      user-select: none;
    }

    &-error {
      color: var(--errors);
      font-size: 12px;
      margin-top: 5px;
      position: absolute;
      left: 0;
      bottom: -17px;
    }
  }

  &__forget {
    display: block;
    margin-top: 15px;
    text-align: center;

    @include mixins.media-down(sm) {
      font-size: 12px;
    }
  }
}
</style>
