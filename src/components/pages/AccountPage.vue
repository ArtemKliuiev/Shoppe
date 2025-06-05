<template>
  <div class="account container">
    <h1 class="account__title">Account page</h1>

    <BaseButton class="account__btn" @click="signOut">LOG OUT</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { useToast } from '@/components/composable/use-toast'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()
const toast = useToast()

function signOut() {
  supabase.auth.signOut()

  toast.show('You have successfully logged out.', 'success')

  router.push('/')
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins/index.scss' as mixins;

.account {
  padding-top: 130px;

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

  &__btn {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
