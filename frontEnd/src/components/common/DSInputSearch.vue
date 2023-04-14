<template>
  <div class="w-full">
    <div class="w-full relative">
      <input
        class="h-12 px-3 rounded-md bg-low-ligth text-low-dark border-low-dark border-[0.5px] w-full outline-none"
        type="text"
        :value="modelValue"
        @input="updateValue"
        id="search-input"
        placeholder="Buscar habilidades.."
      />
      <img
        @click="resetInput"
        class="absolute top-1 right-0"
        src="../../assets/img/delete-search.svg"
        alt=""
        srcset=""
      />
    </div>
    <ul class="bg-neutral-300 rounded absolute w-full z-10" id="search-results">
      <li
        class="rounded cursor-pointer hover:bg-neutral-400 h-12 flex items-center px-3"
        v-for="item in matchs"
        :key="item.id"
        @click="sendItem(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: String,
  from: Object
})

const emit = defineEmits(['update:modelValue', 'send:item'])
const matchs = ref([])
const updateValue = (event) => {
  matchs.value = props.from.filter((i) =>
    event.target.value.length < 2
      ? false
      : i.name.toLowerCase().includes(event.target.value.toLowerCase())
  )
  emit('update:modelValue', event.target.value)
}
const resetInput = () => {
  emit('update:modelValue', '')
  matchs.value = []
}

const sendItem = (item) => {
  emit('send:item', item)
  resetInput()
}
</script>

<style lang="scss" scoped></style>
