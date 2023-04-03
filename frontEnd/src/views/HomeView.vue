<template>
  <main class="w-full min-h-screen grid place-items-center bg-low-rose">
    <section class="w-80 flex flex-col items-center p-3">
      <img class="w-52" src="../assets/img/logo.svg" alt="" srcset="" />
      <h2 class="text-low-color font-bold text-[20px] mt-4">Te damos la vienvenida</h2>
      <div class="flex flex-col items-center gap-4 mt-10">
        <DSButton @click="roter.push('/login')" text="Iniciar sesion"></DSButton>
        <DSButton @click="roter.push('/register')" text="Registarse"></DSButton>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import DSButton from '../components/common/DSButton.vue'
const roter = useRouter()
</script>
