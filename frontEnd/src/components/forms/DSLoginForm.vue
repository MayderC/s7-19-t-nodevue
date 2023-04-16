<template>
  <form @submit.prevent class="w-80 flex flex-col items-center p-3">
    <img class="w-52" src="@/assets/img/large-logo.svg" alt="" srcset="" />
    <div class="flex w-full flex-col items-center gap-4 mt-10">
      <DSInput
        placeholder="Ingrese w-full su email"
        text="Iniciar sesion"
        v-model="email"
      ></DSInput>
      <DSInput placeholder="Ingrese la contraseña" text="Registarse" v-model="password"></DSInput>
    </div>
    <div class="mt-5">
      <DSButton @click="handleLogin" text="Iniciar Sesion"></DSButton>
    </div>
    <div class="mt-5">
      <p>¿Olvidaste tu contraseña?</p>
      <RouterLink class="underline" to="recover"> accede aqui y recuperala </RouterLink>
    </div>
  </form>
</template>

<script setup>
import DSButton from '../common/DSButton.vue'
import DSInput from '../common/DSInput.vue'
import { login } from '../../services/auth'
import { onMounted, ref } from 'vue'
import { useProfileStore } from '../../stores/profile'
import { useRouter } from 'vue-router'
import { notify } from 'notiwind'

const password = ref('')
const email = ref('')
const store = useProfileStore()
const router = useRouter()

const handleLogin = async () => {
  const response = await login({ email: email.value, password: password.value })
  if (response.data?.user) {
    store.setProfile(response.data.user)
    store.setToken(response.data.token)
    router.push('/profile')
    return notify(
      {
        group: 'top',
        title: 'Success',
        text: 'Inicio de sesion exitoso 👌'
      },
      3000
    )
  }

  notify(
    {
      group: 'bottom',
      title: 'Error',
      text: 'Error de inicio de sesion 😥'
    },
    3000
  )
}
</script>

<style lang="scss" scoped></style>
