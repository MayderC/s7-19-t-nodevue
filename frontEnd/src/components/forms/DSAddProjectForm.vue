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
      <div class="flex flex-wrap w-full">
        <DSInput type="text" placeholder="Miembros" text="Miembros" v-model="newTagMembers" @keydown.enter.prevent="addTagMembers" @keydown.comma.prevent="addTagMembers"></DSInput>
        <div v-for="tag in tagsMembers" :key="tag" 
          class="inline-flex justify-between items-center px-3 py-2 text-sm font-semibold text-text bg-second rounded-2xl mr-2 mt-2"
        >
          {{ tag }}
          <button
            @click.prevent="removeTagMembers(index)"
            class="inline-block ml-2 mt-1 text-text hover:text-gray-700"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
    <p class="w-full text-base text-primary font-semibold mt-2">Stacks requeridos</p>
    <div class="flex flex-wrap w-full">
        <DSInput type="text" placeholder="Stack" text="Stack" v-model="newTagStacks" @keydown.enter.prevent="addTagStacks" @keydown.comma.prevent="addTagStacks"></DSInput>
        <div v-for="tag in tagsStacks" :key="tag" 
          class="inline-flex justify-between items-center px-3 py-2 text-sm font-semibold text-text bg-second rounded-2xl mr-2 mt-2"
        >
          {{ tag }}
          <button
            @click.prevent="removeTagStacks(index)"
            class="inline-block ml-2 mt-1 text-text hover:text-gray-700"
          >
            &times;
          </button>
        </div>
      </div>
    <p class="w-full text-base text-primary font-semibold mt-2">Repositorio</p>
    <div class="flex items-center w-full  text-primary">
      <svg class="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      <DSInput
        placeholder="Link de Github"
        text="Link de Github"
      ></DSInput>
    </div>
    <div class="mt-5">
      <DSButton text="Guardar proyecto"></DSButton>
    </div>
  </form>
</template>

<script>
import DSButton from '../common/DSButton.vue'
import DSInput from '../common/DSInput.vue'
import DSText from '../common/DSTextTarea.vue'

export default {
  components: {
    DSButton,
    DSInput,
    DSText
  },
  data() {
    return {
      tagsMembers: [],
      newTagMembers: '',
      tagsStacks: [],
      newTagStacks: ''
    }
  },
  methods: {
    addTagMembers() {
      if (this.newTagMembers.trim() !== '') {
        this.tagsMembers.push(this.newTagMembers.trim())
        this.newTagMembers = ''
      }
    },
    removeTagMembers(index) {
      this.tagsMembers.splice(index, 1);
    },
    addTagStacks() {
      if (this.newTagStacks.trim() !== '') {
        this.tagsStacks.push(this.newTagStacks.trim())
        this.newTagStacks = ''
      }
    },
    removeTagStacks(index) {
      this.tagsStacks.splice(index, 1);
    }
  }
};
</script>