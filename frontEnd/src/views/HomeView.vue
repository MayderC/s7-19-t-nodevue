<template>
  <main class="w-full min-h-[80vh] grid place-items-center bg-background">
    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <section class="flex flex-col items-center p-3">
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
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full max-w-md" src="../assets/img/home.jpg" alt="email illustration vector art">
            </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import DSButton from '../components/common/DSButton.vue'
const roter = useRouter()
</script>
