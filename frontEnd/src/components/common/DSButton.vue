<template>
  <button :class="['bg-primary text-white rounded-2xl hover:bg-second my-2', size]">
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
