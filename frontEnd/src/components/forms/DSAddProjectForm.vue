<template>
  <form class="w-full flex flex-col items-center p-3">
    <div class="flex flex-col items-center gap-4 mt-10 w-full">
      <DSInput
        placeholder="Nombre del Proyecto"
        text="Nombre del Proyecto"
      ></DSInput>
      <DSText
        placeholder="Cuentanos de que se trata tu proyecto"
        text="Descripcion"
      ></DSText>
    </div>
    <div class="mt-5">
      <DSButton text="Guardar"></DSButton>
    </div>
  </form>
</template>

<script setup>
import DSButton from '../common/DSButton.vue'
import DSInput from '../common/DSInput.vue'
import DSText from '../common/DSTextTarea.vue'
</script>