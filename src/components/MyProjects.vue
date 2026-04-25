<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { projects as projectsList } from "../data/projects.js";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();

const projects = projectsList;

const AUTOPLAY_MS = 10_000;

const currentIndex = ref(0);
const reducedMotion = ref(false);
let motionMql;
let autoplayId = null;

function syncReducedMotion() {
  reducedMotion.value =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function stopAutoplay() {
  if (autoplayId != null) {
    clearInterval(autoplayId);
    autoplayId = null;
  }
}

function autoplayAdvance() {
  const n = count.value;
  if (n <= 1) return;
  goTo(currentIndex.value + 1);
}

function startAutoplay() {
  stopAutoplay();
  if (count.value <= 1) return;
  autoplayId = window.setInterval(autoplayAdvance, AUTOPLAY_MS);
}

/** Reinicia o temporizador após navegação manual (botões, teclado, toque, dots). */
function restartAutoplayAfterUserAction() {
  startAutoplay();
}

onMounted(() => {
  syncReducedMotion();
  motionMql = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionMql.addEventListener("change", syncReducedMotion);
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
  motionMql?.removeEventListener("change", syncReducedMotion);
});

const count = computed(() => projects.length);

function goTo(i) {
  const n = count.value;
  if (n === 0) return;
  currentIndex.value = ((i % n) + n) % n;
}

function prev() {
  goTo(currentIndex.value - 1);
  restartAutoplayAfterUserAction();
}

function next() {
  goTo(currentIndex.value + 1);
  restartAutoplayAfterUserAction();
}

function selectSlide(i) {
  goTo(i);
  restartAutoplayAfterUserAction();
}

function onKeydown(e) {
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    prev();
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    next();
  } else if (e.key === "Home") {
    e.preventDefault();
    goTo(0);
    restartAutoplayAfterUserAction();
  } else if (e.key === "End") {
    e.preventDefault();
    goTo(count.value - 1);
    restartAutoplayAfterUserAction();
  }
}

const touchStartX = ref(null);

function onTouchStart(e) {
  touchStartX.value = e.changedTouches[0].clientX;
}

function onTouchEnd(e) {
  if (touchStartX.value == null) return;
  const dx = e.changedTouches[0].clientX - touchStartX.value;
  touchStartX.value = null;
  if (Math.abs(dx) < 50) return;
  if (dx > 0) prev();
  else next();
}

function projectTitle(id) {
  return t(`projects.items.${id}.title`);
}

function projectDescription(id) {
  return t(`projects.items.${id}.description`);
}

function dotLabel(n) {
  return t("projects.goToSlide").replace("{n}", String(n));
}

const trackStyle = computed(() => ({
  transform: `translate3d(-${currentIndex.value * 100}%, 0, 0)`,
  transition: reducedMotion.value ? "none" : "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
}));
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

    <div
      class="relative max-w-2xl lg:max-w-3xl mx-auto"
      role="region"
      :aria-label="t('projects.carouselAria')"
      aria-roledescription="carousel"
      tabindex="0"
      @keydown="onKeydown"
    >
      <button
        type="button"
        class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-1 md:-translate-x-2 lg:-translate-x-4 w-11 h-11 items-center justify-center rounded-full bg-slate-800/90 border border-slate-600 text-white shadow-lg hover:bg-blue-600 hover:border-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        :aria-label="t('projects.prev')"
        @click="prev"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-1 md:translate-x-2 lg:translate-x-4 w-11 h-11 items-center justify-center rounded-full bg-slate-800/90 border border-slate-600 text-white shadow-lg hover:bg-blue-600 hover:border-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        :aria-label="t('projects.next')"
        @click="next"
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        class="overflow-hidden rounded-xl border border-slate-700 shadow-xl shadow-black/20 touch-pan-y"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <div class="flex" :style="trackStyle">
          <article
            v-for="(project, index) in projects"
            :id="`project-slide-${project.id}`"
            :key="project.id"
            class="min-w-full w-full shrink-0 bg-slate-800 overflow-hidden flex flex-col group"
            :aria-hidden="currentIndex !== index"
            :inert="currentIndex !== index"
          >
            <div
              class="relative flex items-center justify-center shrink-0 w-full bg-slate-950 h-[min(48vw,14rem)] sm:h-[min(42vw,16rem)] md:h-[18rem] lg:h-[20rem]"
            >
              <img
                :src="project.image"
                :alt="projectTitle(project.id)"
                class="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                :class="{ '!duration-0': reducedMotion }"
                draggable="false"
              />
              <div
                class="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 hidden lg:flex items-center justify-center gap-4 lg:group-hover:opacity-100"
                :class="{ '!duration-0': reducedMotion }"
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
                  v-if="project.link"
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
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 class="text-base sm:text-lg font-bold text-white mb-1.5">
                {{ projectTitle(project.id) }}
              </h3>
              <p
                class="text-slate-400 mb-3 line-clamp-4 text-sm flex-grow leading-relaxed"
              >
                {{ projectDescription(project.id) }}
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="flex flex-wrap gap-2 mt-auto pt-1">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-colors lg:hidden"
                >
                  {{ t("projects.viewCode") }}
                </a>
                <a
                  v-if="project.link"
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
      </div>

      <div
        class="flex items-center justify-center gap-3 sm:gap-4 mt-6 flex-wrap"
      >
        <button
          type="button"
          class="md:hidden flex w-10 h-10 items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-white hover:bg-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          :aria-label="t('projects.prev')"
          @click="prev"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div class="flex items-center justify-center gap-2 px-2">
          <button
            v-for="(project, i) in projects"
            :key="project.id"
            type="button"
            class="h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            :class="
              currentIndex === i
                ? 'w-8 bg-blue-500'
                : 'w-2.5 bg-slate-600 hover:bg-slate-500'
            "
            :aria-label="dotLabel(i + 1)"
            :aria-current="currentIndex === i ? 'true' : undefined"
            @click="selectSlide(i)"
          />
        </div>

        <button
          type="button"
          class="md:hidden flex w-10 h-10 items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-white hover:bg-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          :aria-label="t('projects.next')"
          @click="next"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
