<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section
    class="flex flex-col items-center justify-center text-center min-h-[50vh] sm:min-h-[60vh]"
    aria-labelledby="home-heading"
  >
    <div class="space-y-5 sm:space-y-6 max-w-full px-1">
      <h1
        id="home-heading"
        class="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up break-words"
      >
        {{ t("home.hi") }}
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
          >Stael Edson</span
        >
      </h1>
      <p
        class="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-snug"
      >
        {{ t("home.subtitle") }}
      </p>
      <div
        class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full max-w-md sm:max-w-none mx-auto"
      >
        <button
          type="button"
          class="px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/30"
          @click="scrollTo('projects')"
        >
          {{ t("home.ctaWork") }}
        </button>
        <button
          type="button"
          class="px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-slate-300 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors duration-300"
          @click="scrollTo('contacts')"
        >
          {{ t("home.ctaContact") }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
