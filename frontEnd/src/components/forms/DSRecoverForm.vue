<template>
  <form @submit.prevent class="w-80 flex flex-col items-center p-3">
    <h2 class="text-lg self-start font-semibold mt-2 text-primary">Recuperar contraseña</h2>
    <TransitionGroup>
      <div v-if="step === 1" class="flex flex-col items-center gap-4 mt-3">
        <p class="mt-2 text-text">
          Te enviaremos un link para que puedas reestablecer tu contraseña
        </p>
        <DSInput placeholder="email@mail.com" text="Recuperar contraseña"></DSInput>
      </div>
      <div v-if="step === 2" class="flex flex-col items-center gap-4 mt-3">
        <p class="mt-2">
          Te hemos enviado un correo electronico con instrucciones para que puedas recuperar tu
          contraseña.
        </p>
      </div>
    </TransitionGroup>
    <div class="mt-5 self-end">
      <DSButton size="w-24 h-8" @click="increaseStep" text="Continuar"></DSButton>
    </div>
  </form>
</template>

<script setup>
import { notify } from 'notiwind'
import DSButton from '../common/DSButton.vue'
import DSInput from '../common/DSInput.vue'
import { ref } from 'vue'

const step = ref(1)
const email = ref('')
const increaseStep = () => {
  if (email.value.length == 0) {
    return notify({
      group: 'bottom',
      title: 'Error',
      text: 'Ingresa todos los campos 😥'
    })
  }
  step.value += 1
}
</script>

<style lang="scss" scoped></style>
