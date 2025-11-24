<script setup>
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];
</script>

<template>
  <section class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      My <span class="text-blue-500">Skills</span>
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center justify-center gap-4"
      >
        <img
          :src="skill.icon"
          :alt="skill.name"
          class="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
        />
        <span
          class="text-lg font-medium text-slate-300 group-hover:text-white"
          >{{ skill.name }}</span
        >
      </div>
    </div>
  </section>
</template>

<style scoped></style>
