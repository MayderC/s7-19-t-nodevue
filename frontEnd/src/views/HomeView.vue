<template>
  <main class="w-full min-h-[80vh] grid place-items-center bg-low-rose">
    <section class="w-80 flex flex-col items-center p-3">
      <img class="w-52" src="../assets/img/large-logo.svg" alt="" srcset="" />
      <h2 class="text-low-color font-normal text-[20px] mt-4 text-center">
        Descubre y forma parte de nuevos proyectos
      </h2>
      <div class="flex flex-col items-center gap-4 mt-10">
        <DSButton
          :size="'rounded-full py-2 px-3 w-full'"
          @click="roter.push('/login')"
          text="Iniciar sesion"
        ></DSButton>
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
