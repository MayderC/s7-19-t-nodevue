<script>
import Logo from '../shared/Logo.vue'
export default {
  name: 'NavBar',
  components: {
    Logo
  },
  data() {
    return {
      isOpen: false,
      showSubMenu: false
    }
  },

  methods: {
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu
    }
  }
}
</script>

<template>
  <header class="bg-center bg-cover bg-background">
    <div class="container mx-auto max-w-6xl">
      <nav class="relative bg-background">
        <div class="container py-4 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <Logo />
            <!-- Mobile menu button -->
            <div class="flex mr-5 lg:hidden md:hidden xl:hidden 2xl:hidden z-10">
              <button
                @click="isOpen = !isOpen"
                type="button"
                class="text-second hover:text-primary focus:outline-none focus:text-neutral"
                aria-label="toggle menu"
              >
                <svg
                  v-show="!isOpen"
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  v-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div
            :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
            class="absolute bg-background text-text inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
          >
            <nav class="flex font-montserrat flex-col md:flex-row">
              <div
                v-show="isOpen"
                class="w-10 h-10 inline-flex items-center justify-center rounded-full ring-2 ring-stone-600 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <ul :class="[!isOpen ? 'flex' : '']">
                <li>
                  <RouterLink
                    class="flex items-center my-2 font-semibold transition-colors duration-300 transform hover:text-primary-color-100 md:mx-4 md:my-2"
                    to="/"
                  >
                    <svg
                      v-show="isOpen"
                      class="mx-2"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z"
                      />
                    </svg>
                    Inicio
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center my-2 font-semibold transition-colors duration-300 transform hover:text-primary-color-100 md:mx-4 md:my-2"
                    to="/profile"
                  >
                    <svg
                      v-show="isOpen"
                      class="mx-2"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189"
                      />
                    </svg>
                    Perfil
                  </RouterLink>
                </li>
                <li>
                  <!--
                    
                    <RouterLink
                    class="flex items-center my-2 font-semibold transition-colors duration-300 transform hover:text-primary-color-100 md:mx-4 md:my-2"
                    to="/messages"
                    >
                    <svg
                    v-show="isOpen"
                    class="mx-2"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    >
                    <path
                    d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"
                    />
                  </svg>
                  Mensajes
                </RouterLink>
              -->
                </li>
                <li>
                  <RouterLink
                    class="flex items-center my-2 font-semibold transition-colors duration-300 transform hover:text-primary-color-100 md:mx-4 md:my-2"
                    to="/dashboard"
                    @click="toggleSubMenu"
                  >
                    <svg
                      v-show="isOpen"
                      class="mx-2"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z"
                      />
                    </svg>
                    Dashboard
                  </RouterLink>
                  <ul v-show="showSubmenu">
                    <li>
                      <RouterLink
                        class="flex items-center my-2 font-semibold transition-colors duration-300 transform hover:text-primary-color-100 md:mx-4 md:my-2"
                        to="/add-project"
                      >
                        Crear Proyectos
                      </RouterLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center my-2 font-semibold transition-colors duration-300 transform hover:text-primary-color-100 md:mx-4 md:my-2"
                    to="/logout"
                  >
                    <svg
                      v-show="isOpen"
                      class="mx-2"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M16 1c-4.418 0-8 3.582-8 8 0 .585.063 1.155.182 1.704l-8.182 7.296v5h6v-2h2v-2h2l3.066-2.556c.909.359 1.898.556 2.934.556 4.418 0 8-3.582 8-8s-3.582-8-8-8zm-6.362 17l3.244-2.703c.417.164 1.513.703 3.118.703 3.859 0 7-3.14 7-7s-3.141-7-7-7c-3.86 0-7 3.14-7 7 0 .853.139 1.398.283 2.062l-8.283 7.386v3.552h4v-2h2v-2h2.638zm.168-4l-.667-.745-7.139 6.402v1.343l7.806-7zm10.194-7c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm-1 0c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"
                      />
                    </svg>
                    Salir
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
