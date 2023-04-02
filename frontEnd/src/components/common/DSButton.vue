<template>
  <button :class="['bg-low-color text-white rounded-md hover:bg-low-dark', size]">
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  size: {
    default: 'w-52 h-14',
    type: String
  }
})
</script>

<style lang="scss" scoped></style>
