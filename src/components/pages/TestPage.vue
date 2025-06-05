<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const email = ref('')
const password = ref('')
const loading = ref(false)

const handleRegister = async () => {
  if (!email.value || !password.value) {
    alert('Будь ласка, заповніть усі поля.')
    return
  }

  try {
    loading.value = true
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    alert('Перевірте пошту для підтвердження акаунту.')
    console.log('User registered:', data)
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleRegister" class="register-form">
    <h2>Реєстрація</h2>

    <div>
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" required placeholder="Введіть email" />
    </div>

    <div>
      <label for="password">Пароль</label>
      <input
        id="password"
        type="password"
        v-model="password"
        required
        placeholder="Введіть пароль"
        minlength="6"
      />
    </div>

    <button type="submit" :disabled="loading">
      {{ loading ? 'Реєстрація...' : 'Зареєструватися' }}
    </button>
  </form>
</template>

<style scoped>
.register-form {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input,
button {
  padding: 0.5rem;
  font-size: 1rem;
}
button {
  cursor: pointer;
}
</style>
