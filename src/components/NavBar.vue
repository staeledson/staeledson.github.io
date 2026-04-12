<script setup>
import { ref } from "vue";
import { useLocale } from "../composables/useLocale.js";

const { locale, t, setLocale } = useLocale();
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
  { labelKey: "nav.home", id: "home" },
  { labelKey: "nav.about", id: "about_me" },
  { labelKey: "nav.skills", id: "skills" },
  { labelKey: "nav.projects", id: "projects" },
  { labelKey: "nav.contacts", id: "contacts" },
];
</script>

<template>
  <nav
    class="fixed w-full z-50 top-0 start-0 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md"
  >
    <div
      class="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-4"
    >
      <a
        href="#home"
        class="flex items-center space-x-3 rtl:space-x-reverse"
        @click.prevent="scrollToSection('home')"
      >
        <span
          class="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-white"
          >Stael Edson</span
        >
      </a>
      <div
        class="flex items-center gap-2 md:order-2 md:gap-3 rtl:space-x-reverse"
      >
        <div
          class="flex rounded-lg border border-slate-700 overflow-hidden text-xs font-semibold"
          role="group"
          :aria-label="t('nav.langSwitch')"
        >
          <button
            type="button"
            class="px-2.5 py-1.5 min-w-[2.5rem] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            :class="
              locale === 'pt'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800/80 text-slate-400 hover:text-white'
            "
            :aria-pressed="locale === 'pt'"
            @click="setLocale('pt')"
          >
            PT
          </button>
          <button
            type="button"
            class="px-2.5 py-1.5 min-w-[2.5rem] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            :class="
              locale === 'en'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800/80 text-slate-400 hover:text-white'
            "
            :aria-pressed="locale === 'en'"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
          aria-controls="navbar-sticky"
          :aria-expanded="isMenuOpen"
        >
          <span class="sr-only">{{ t("nav.openMenu") }}</span>
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
          class="flex flex-col w-full p-4 md:p-0 mt-2 md:mt-0 font-medium border border-slate-800 rounded-lg bg-slate-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-transparent"
        >
          <li v-for="link in navLinks" :key="link.id">
            <a
              @click.prevent="scrollToSection(link.id)"
              href="#"
              class="block py-2 px-3 text-slate-300 rounded hover:bg-slate-800 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 transition-colors duration-200"
            >
              {{ t(link.labelKey) }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
