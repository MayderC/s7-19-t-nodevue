<script setup>
import DSButton from '../components/common/DSButton.vue'
import DSProfile from '../components/profile/DSProfile.vue'
import DSProject from '../components/profile/DSProject.vue'
import DSActivity from '../components/profile/DSActivity.vue'
import { ref } from 'vue'
import { useProfileStore } from '../stores/profile'

const store = useProfileStore()

const view = ref('profile')
</script>
<template>
  <main class="w-full grid place-items-center bg-background">
    <div class="container px-5 mx-auto max-w-6xl">
      <!--Encabezado de Foto-->
      <div class="flex flex-col items-center justify-center w-full mx-auto">
        <div class="w-full h-64 bg-second bg-center bg-cover rounded-2xl shadow-md">
          <div class="m-4">
            <label for="dropzone-file" class="flex flex-col items-end w-full cursor-pointer">
              <svg
                class="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                ></path>
              </svg>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>

        <div class="w-full -mt-14 md:-mt-16 flex justify-start px-3 py-2">
          <img
            class="object-cover w-24 h-24 md:w-32 md:h-32 border-4 border-background rounded-full"
            alt="Avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>
        <div class="flex justify-end w-full -mt-14">
          <DSButton size="w-24 h-8" text="Editar Perfil"></DSButton>
        </div>
      </div>

      <!--Data del programador-->
      <div class="mt-4">
        <div class="flex items-center">
          <div class="flex items-center">
            <h1 class="mx-2 font-semibold text-2xl text-primary">{{ store.user.name }}</h1>
          </div>
          <svg
            class="w-3 h-3 mt-1 text-primary"
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
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            ></path>
          </svg>
          <span class="mx-1 mt-1 text-xs text-primary">Argentina</span>
        </div>
      </div>
      <p class="mx-2 text-text">Backend Developer</p>
      <!--Menu-->
      <div class="flex items-center justify-center my-4">
        <div class="flex items-center p-1 border border-sac-300 rounded-2xl bg-white shadow-lg">
          <button
            class="px-4 py-1 text-sm font-medium capitalize md:py-3 rounded-2xl md:px-12"
            :class="
              view === 'profile'
                ? 'text-white bg-primary '
                : 'text-text transition-colors duration-300 focus:outline-none hover:bg-white hover:text-text'
            "
            @click="view = 'profile'"
          >
            PERFIL
          </button>
          <button
            class="px-4 py-2 text-sm font-medium capitalize md:py-3 rounded-xl md:px-12"
            :class="
              view === 'projects'
                ? 'text-white bg-primary '
                : 'text-text transition-colors duration-300 focus:outline-none hover:bg-white hover:text-text '
            "
            @click="view = 'projects'"
          >
            PROYECTOS
          </button>
          <button
            class="px-4 py-2 text-sm font-medium capitalize md:py-3 rounded-xl md:px-12"
            :class="
              view === 'activities'
                ? 'text-white bg-primary '
                : 'text-text transition-colors duration-300 focus:outline-none hover:bg-white hover:text-text '
            "
            @click="view = 'activities'"
          >
            ACTIVIDADES
          </button>
        </div>
      </div>
      <DSProfile v-if="view === 'profile'" />
      <DSProject v-if="view === 'projects'" />
      <DSActivity v-if="view === 'activities'" />
    </div>
  </main>
</template>
