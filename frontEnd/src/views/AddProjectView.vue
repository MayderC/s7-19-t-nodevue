<script>
import DSButton from '../components/common/DSButton.vue'
import DSProfile from '../components/profile/DSProfile.vue'
import DSProject from '../components/profile/DSProject.vue'
import DSActivity from '../components/profile/DSActivity.vue'

export default {
  components: {
    DSButton,
    DSProfile,
    DSProject,
    DSActivity
  },
  data() {
    return {
      view: "add-project",
    }
  },
};
</script>
<template>
  <main class="w-full grid place-items-center bg-background">
    <div class="container px-5 mx-auto max-w-6xl">
      <!--Encabezado de Foto-->
      <div class="flex flex-col items-center justify-center w-full mx-auto">
        <div class="w-full h-32 bg-second bg-center bg-cover rounded-2xl shadow-md">
          <div class="m-4">
            <label for="dropzone-file" class="flex flex-col items-end w-full cursor-pointer">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>

        <div class="w-full -mt-14 md:-mt-16 flex justify-start px-3 py-2">
          <!--<div class="w-24 h-24 md:w-32 md:h-32 border-4 border-background rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
            <h2 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Imagen</h2>
          </div>-->
          <!--<img class="object-cover w-24 h-24 md:w-32 md:h-32 border-4 border-background rounded-full " alt="Avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80">-->
          <label for="dropzone-file" class="flex flex-col items-center bg-white justify-center w-24 h-24 md:w-32 md:h-32 shadow  cursor-pointer rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>

            <h2 class="mt-1 font-light tracking-wide text-gray-400">Imagen</h2>
           <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        
        <div class="flex justify-end w-full -mt-14">
          <router-link to="/profile">
            <DSButton size="w-28 h-8"  text="Ver Proyectos"></DSButton>
          </router-link>
        </div>
      </div>
      
      <div class="mt-4">
        <div class="flex items-center">
          <div class="flex items-center">
            <h1 class="mx-2 font-semibold text-xl text-primary">Sobre el proyecto</h1>
          </div>
        </div>
      </div>

      <DSAddProjectForm></DSAddProjectForm>
    </div>
  </main>
</template>
<script setup>
import DSAddProjectForm from '../components/forms/DSAddProjectForm.vue'
</script>