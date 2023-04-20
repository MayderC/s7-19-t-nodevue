<script setup>
import { onMounted, ref } from 'vue'
import DSCardProject from '../cards/DSCardProject.vue'
import DSButton from '../common/DSButton.vue'
import { getProjectByUser } from '../../services/projects'
import { useProfileStore } from '../../stores/profile'

const store = useProfileStore()
const projects = ref([])

onMounted(async () => {
  const res = await getProjectByUser(store.user.id)
  projects.value = res
})
</script>
<template>
  <div>
    <div class="w-full p-4 bg-white bg-center bg-cover rounded-2xl shadow-md">
      <p class="text-xl text-primary font-semibold">
        {{ projects.length == 0 ? 'Aun no hay proyectos' : 'Proyectos activos' }}
      </p>

      <div class="flex justify-end w-full -mt-10">
        <router-link to="/add-project">
          <DSButton size="w-28 h-8" text="Crear Proyecto"></DSButton>
        </router-link>
      </div>

      <DSCardProject v-for="item in projects" class="shadow-2xl" />
    </div>
  </div>
</template>
