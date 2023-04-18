<script>
import DSCard from '../cards/DSCardProject.vue'
import DSButton from '../common/DSButton.vue'

export default {
  components: {
    DSCard,
    DSButton,
  },
};
</script>
<template>
  <div>
    <div class="w-full p-4 bg-white bg-center bg-cover rounded-2xl shadow-md">
        <p class="text-xl text-primary font-semibold">Proyectos activos</p>
 
      <div class="flex justify-end w-full -mt-10">
        <router-link to="/add-project">
          <DSButton size="w-28 h-8"  text="Crear Proyecto"></DSButton>
        </router-link>
      </div>     
      
      <DSCard class="shadow-2xl"/>
    </div>
  </div>
</template>