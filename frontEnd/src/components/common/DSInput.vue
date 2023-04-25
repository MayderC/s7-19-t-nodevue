<template>
  <input
    class="h-12 px-3 bg-low-ligth text-low-dark border-low-dark border-[0.5px] w-full outline-none rounded-md"
    :value="modelValue"
    @input="updateValue"
    :type="type"
    :placeholder="placeholder"
    id=""
  />
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  type: {
    default: 'text',
    type: String
  },
  placeholder: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped></style>
