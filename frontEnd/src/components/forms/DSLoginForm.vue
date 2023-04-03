<template>
  <form class="w-80 flex flex-col items-center p-3">
    <img class="w-52" src="@/assets/img/logo.svg" alt="" srcset="" />
    <div class="flex flex-col items-center gap-4 mt-10">
      <DSInput
        placeholder="Ingrese su usuario"
        @click="roter.push('/login')"
        text="Iniciar sesion"
      ></DSInput>
      <DSInput
        placeholder="Ingrese la contraseña"
        @click="roter.push('/register')"
        text="Registarse"
      ></DSInput>
    </div>
    <div class="mt-5">
      <DSButton text="Iniciar Sesion"></DSButton>
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
</script>

<style lang="scss" scoped></style>
