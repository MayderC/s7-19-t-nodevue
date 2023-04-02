<template>
  <form @submit.prevent class="w-80 bg-white p-3">
    <div class="w-full h-32">
      <img class="w-40" src="@/assets/img/logo.svg" alt="" srcset="" />
    </div>
    <TransitionGroup>
      <div v-if="step === 1" class="flex flex-col items-center gap-4 mt-3">
        <h2 class="text-lg self-start font-semibold mt-2">Datos personales</h2>
        <DSInput placeholder="Nombre" @click="roter.push('/login')"></DSInput>
        <DSInput placeholder="Apellido" @click="roter.push('/register')"></DSInput>
        <DSInput placeholder="Email" @click="roter.push('/login')"></DSInput>
        <DSInput placeholder="Contraseña" @click="roter.push('/register')"></DSInput>
      </div>
      <div v-if="step === 2" class="flex flex-col items-center gap-4 mt-3">
        <h2 class="text-lg self-start font-semibold mt-2">Completa tus habilidades</h2>
        <DSInputSearch v-model="skill" @send:item="addSkill" :from="technologies"></DSInputSearch>
        <ul class="flex flex-wrap gap-2 w-full mt-3">
          <li
            class="bg-neutral-400 px-3 py-2 flex items-center gap-1"
            v-for="skill in skills"
            :key="skill"
          >
            <p class="font-medium text-zinc-800">{{ skill }}</p>
            <img
              @click="removeSkill(skill)"
              class="cursor-pointer"
              src="../../assets/img/delete-tag.svg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </TransitionGroup>
    <div class="w-full flex justify-between mt-14">
      <DSButton size="w-24 h-8" @click="decreaseStep" text="Atras"></DSButton>
      <DSButton size="w-24 h-8" @click="increaseStep" text="Continuar"></DSButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import DSButton from '../common/DSButton.vue'
import DSInput from '../common/DSInput.vue'
import DSInputSearch from '../common/DSInputSearch.vue'
const step = ref(2)
const skill = ref('')
const skills = ref([])
const technologies = [
  'react',
  'vue',
  'angular',
  'Javascript',
  'Ts',
  'Java',
  'C#',
  '.NET',
  'Nest',
  'Next'
]

const removeSkill = (skill) => (skills.value = skills.value.filter((s) => s !== skill))

const addSkill = (arg) => {
  if (skills.value.includes(arg)) return
  skills.value.push(arg)
}

const increaseStep = () => {
  if (step.value >= 2) return
  step.value += 1
}

const decreaseStep = () => {
  if (step.value <= 1) return
  step.value -= 1
}
</script>

<style lang="scss" scoped></style>
