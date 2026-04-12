<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();

const skills = [
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://devicon-website.vercel.app/api/laravel/plain.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://devicon-website.vercel.app/api/nodejs/original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
  // },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];
</script>

<template>
  <section class="w-full" aria-labelledby="skills-heading">
    <h2
      id="skills-heading"
      class="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-12 text-center"
    >
      {{ t("skills.title") }}
      <span class="text-blue-500">{{ t("skills.titleHighlight") }}</span>
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center justify-center gap-3 sm:gap-4 min-w-0"
      >
        <img
          :src="skill.icon"
          :alt="skill.name"
          class="w-12 h-12 sm:w-16 sm:h-16 shrink-0 group-hover:scale-110 transition-transform duration-300"
        />
        <span
          class="text-sm sm:text-lg font-medium text-slate-300 group-hover:text-white text-center leading-tight break-words hyphens-auto"
          >{{ skill.name }}</span
        >
      </div>
    </div>
  </section>
</template>

<style scoped></style>
