<script setup>
import { ref } from 'vue'
import DSButton from '../components/common/DSButton.vue'
import DSInput from '../components/common/DSInput.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectById } from '../services/projects'

const view = ref('profile')
const route = useRoute()

onMounted(async () => {
  const res = await getProjectById(route.params.id)
  console.log(res)
})
</script>
<template>
  <main class="w-full grid place-items-center bg-background">
    <div class="container px-5 mx-auto max-w-6xl">
      <!--Encabezado de Foto-->
      <div class="flex flex-col items-center justify-center w-full mx-auto">
        <div class="w-full h-32 bg-second bg-center bg-cover rounded-2xl shadow-md"></div>

        <div class="w-full mt-2 md:-mt-16 flex justify-start px-3 py-2">
          <img
            class="object-cover w-24 h-24 md:w-32 md:h-32 rounded-full"
            alt="Avatar"
            src="https://cms.rootstack.com/sites/default/files/inline-images/20151014111043_csharp.png"
          />
        </div>
        <div class="flex justify-end w-full -mt-14">
          <DSButton size="w-28 h-8" text="Solicitar unirse"></DSButton>
        </div>
      </div>
      <div class="mt-2">
        <div class="flex items-center">
          <h1 class="mx-2 font-semibold text-2xl text-primary">Desktop App C#</h1>
        </div>
        <!--Miembros informacion-->
        <div class="flex flex-row items-start justify-between mx-2">
          <div class="flex items-center w-full">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span class="text-text ml-2"> Hace 5 dias </span>
          </div>
          <div class="flex items-center w-full">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              ></path>
            </svg>
            <span class="text-text ml-2"> 10 Miembros </span>
          </div>
        </div>
        <div class="mt-4 w-full p-4 bg-white bg-center bg-cover rounded-2xl shadow-md">
          <p class="text-xl text-primary font-semibold">Sobre el proyecto</p>
          <p class="text-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique corrupti dolorum eos
            ipsum aspernatur libero error, in nihil iusto veritatis neque atque numquam optio,
            placeat adipisci mollitia dicta voluptatem molestias.
          </p>
        </div>
        <div class="flex flex-row my-2 gap-3 flex-wrap w-full md:w-auto md:text-left text-center">
          <span
            v-for="i in [1, 2, 3]"
            :key="i"
            class="inline-flex justify-between items-center px-3 py-2 text-sm font-semibold text-text bg-second rounded-2xl"
          >
            Etiqueta
          </span>
        </div>
        <div class="mt-4 w-full p-4 bg-white bg-center bg-cover rounded-2xl shadow-md">
          <p class="text-xl text-primary font-semibold">Repositorio</p>
          <a class="flex items-center text-primary cursor-pointer" href="#">
            <svg
              class="w-6 h-6 fill-current mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <p class="text-sm">http://github.com</p>
          </a>
        </div>
        <!--Comentarios-->
        <div class="mt-4 w-full p-4 bg-white bg-center bg-cover rounded-2xl shadow-md">
          <DSInput placeholder="Escribe un comentario" text="Escribe un comentario"></DSInput>
          <p class="text-xl text-primary font-semibold">2 comentarios</p>
          <!--caja-->
          <div class="flex flex-row items-start justify-between mx-2">
            <div class="flex items-start pt-3">
              <img
                class="object-cover w-6 h-6 rounded-full"
                alt="Avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
              <p class="text-sm text-primary font-semibold ml-1">Laura Ramirez</p>
              <span class="text-text font-light text-sm ml-5"> Hace 5 dias </span>
            </div>
            <div class="flex items-end justify-end text-right px-6 pt-3">
              <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                />
              </svg>
              <p class="text-sm text-gray-500">3</p>
            </div>
          </div>
          <p class="ml-9 text-sm">Excelente Trabajo!</p>
        </div>
      </div>
    </div>
  </main>
</template>
