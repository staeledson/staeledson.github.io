<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (id) => {
  isMenuOpen.value = false;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about_me" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contacts", id: "contacts" },
];
</script>

<template>
  <nav
    class="fixed w-full z-50 top-0 start-0 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Stael Edson</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600"
          aria-controls="navbar-sticky"
          :aria-expanded="isMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-800 rounded-lg bg-slate-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent"
        >
          <li v-for="link in navLinks" :key="link.id">
            <a
              @click.prevent="scrollToSection(link.id)"
              href="#"
              class="block py-2 px-3 text-slate-300 rounded hover:bg-slate-800 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 transition-colors duration-200"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
