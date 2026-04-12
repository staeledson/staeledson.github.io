<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();

const projectMeta = [
  {
    image: "/print-site-igep.png",
    tags: ["Vue.js", "Tailwind", "API"],
    link: "https://www.igepsaude.org.br/",
    github: null,
  },
  {
    image: "/print-site-plural.png",
    tags: ["AlpineJS", "VueJS", "API", "Tailwind"],
    link: "https://www.pluralmed.com.br/",
    github: null,
  },
  {
    image: "/print-vituz.png",
    tags: ["Laravel", "Vue.js", "PostgreSQL", "PHP"],
    link: "https://vituz.app/login",
    github: null,
  },
  {
    image: "/print-site-construsoft.png",
    tags: ["Node.js", "PostgreSQL", "JavaScript"],
    link: "https://www.construsoft.com.br/",
    github: null,
  },
];
</script>

<template>
  <section class="w-full" aria-labelledby="projects-heading">
    <h2
      id="projects-heading"
      class="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-12 text-center"
    >
      {{ t("projects.title") }}
      <span class="text-blue-500">{{ t("projects.titleHighlight") }}</span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="(project, index) in projectMeta"
        :key="index"
        class="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group flex flex-col"
      >
        <div class="relative overflow-hidden h-44 sm:h-48 shrink-0">
          <img
            :src="project.image"
            :alt="t(`projects.items.${index}.title`)"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 hidden lg:flex items-center justify-center gap-4 lg:group-hover:opacity-100"
          >
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-slate-900 rounded-full hover:bg-blue-600 text-white transition-colors"
              :title="t('projects.overlayCode')"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-slate-900 rounded-full hover:bg-blue-600 text-white transition-colors"
              :title="t('projects.overlayLive')"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-5 sm:p-6 flex flex-col flex-grow">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2">
            {{ t(`projects.items.${index}.title`) }}
          </h3>
          <p
            class="text-slate-400 mb-4 line-clamp-3 text-sm sm:text-base flex-grow"
          >
            {{ t(`projects.items.${index}.description`) }}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20"
            >
              {{ tag }}
            </span>
          </div>
          <div class="flex flex-wrap gap-2 lg:hidden mt-auto pt-1">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-colors"
            >
              {{ t("projects.viewCode") }}
            </a>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {{ t("projects.viewLive") }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
