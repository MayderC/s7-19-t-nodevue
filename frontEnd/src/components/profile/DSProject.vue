<script>
import DSCard from '../cards/DSCardProject.vue'

export default {
  components: {
    DSCard
  },
};
</script>
<template>
  <div>
    <div class="w-full p-4 bg-white bg-center bg-cover rounded-2xl shadow-md">
      <p class="text-xl text-primary font-semibold">Proyectos activos</p>
      <DSCard class="shadow-2xl"/>
    </div>
  </div>
</template>