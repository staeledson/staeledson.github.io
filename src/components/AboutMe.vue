<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>

<template>
  <section class="w-full" aria-labelledby="about-heading">
    <h2
      id="about-heading"
      class="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-12 text-center"
    >
      {{ t("about.title") }}
      <span class="text-blue-500">{{ t("about.titleHighlight") }}</span>
    </h2>
    <div class="flex flex-col md:flex-row items-center gap-10 md:gap-12">
      <div class="w-full md:w-1/2 shrink-0">
        <div class="relative group max-w-md mx-auto">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
          ></div>
          <img
            src="/profile.jpg"
            :alt="t('about.imageAlt')"
            width="460"
            height="460"
            class="relative rounded-lg shadow-2xl w-full h-auto object-cover aspect-square transform transition duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
      <div
        class="w-full md:w-1/2 space-y-5 md:space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed"
      >
        <p>{{ t("about.p1") }}</p>
        <p>{{ t("about.p2") }}</p>
        <p>{{ t("about.p3") }}</p>
        <div
          class="grid grid-cols-2 gap-4 sm:gap-6 pt-2 max-w-md mx-auto md:mx-0"
        >
          <div>
            <h3 class="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">
              {{ t("about.experience") }}
            </h3>
            <p>{{ t("about.experienceValue") }}</p>
          </div>
          <div>
            <h3 class="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">
              {{ t("about.projectsStat") }}
            </h3>
            <p>{{ t("about.projectsValue") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
