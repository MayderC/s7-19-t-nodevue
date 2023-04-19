<template>
<router-link to='/detail-project'>
  <div class="w-full max-w-sm overflow-hidden bg-white rounded-2xl shadow-md p-3 cursor-pointer">
    <div class="flex items-end justify-end text-right px-6 pt-3">
      <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
      <p class="text-sm text-gray-500">3</p>
    </div>

    <div class="px-6 py-4">
      <p class="pt-2 text-2xl text-primary font-semibold">Desktop App C#</p>
      
      <div class="flex items-center justify-between">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span class="text-text -ml-8">
          Hace 5 dias
        </span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
        </svg>
        <span class="text-text -ml-8">
          10 Miembros
        </span>
      </div>
      <p class="py-2 text-text font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div
        class="flex flex-row px-6 pb-4 gap-3 flex-wrap w-full md:w-auto md:text-left text-center"
      >
        <span
          v-for="(i) in [1,2]"
          :key="i"
          class="inline-flex justify-between items-center px-3 py-2 text-sm font-semibold text-text bg-second rounded-2xl"
        >
          Etiqueta
        </span>
      </div>
  </div>
</router-link>
</template>