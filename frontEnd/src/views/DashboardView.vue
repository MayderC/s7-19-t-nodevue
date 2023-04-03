<template>
  <main class="w-full grid place-items-center bg-low-rose">
    <div class="container px-5 py-10 mx-auto max-w-6xl">
      <form @submit.prevent="search">
        <div
          class="w-full p-1 bg-transparent border rounded-lg focus-within:border-neutral-900 focus-within:ring focus-within:ring-neutral-900 focus-within:ring-opacity-10"
        >
          <div class="relative w-full">
            <input
              v-model="searchTerm"
              type="text"
              placeholder="¿Qué proyecto buscas?"
              class="flex h-10 w-full text-gray-700 placeholder-gray-500 bg-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0 pl-12"
              required
            />
            <button
              type="submit"
              class="absolute inset-y-0 flex btn btn-sm normal-case h-10 py-2 m-1"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <!--Etiquetas-->
      <div
        class="flex flex-row my-2 gap-3 flex-wrap w-full md:w-auto md:text-left text-center"
      >
        <span
          v-for="(i) in [1,2,3]"
          :key="i"
          class="inline-flex justify-between items-center px-2 py-1 text-sm font-medium text-neutral-600 bg-gray-200 rounded-sm"
        >
          Etiqueta
        </span>
      </div>
      <!--Recomendado-->
      <h1 class="text-2xl self-start font-semibold mt-8 mb-4">Recomendados</h1>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/3" v-for="item in [1,2,3]" :key="item">
          <DSCardProject />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import DSCardProject from '../components/cards/DSCardProject.vue'
</script>