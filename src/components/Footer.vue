<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
const currentYear = new Date().getFullYear();

const socialLinks = [
  { href: "https://github.com/staeledson", labelKey: "footer.github" },
  {
    href: "https://www.linkedin.com/in/staeledson/",
    labelKey: "footer.linkedin",
  },
];
</script>

<template>
  <footer
    class="w-full py-8 text-center text-slate-500 text-sm border-t border-slate-800 mt-auto px-4"
  >
    <p>
      &copy; {{ currentYear }} Stael Edson. {{ t("footer.rights") }}
    </p>
    <div class="flex justify-center flex-wrap gap-4 sm:gap-6 mt-4">
      <a
        v-for="item in socialLinks"
        :key="item.href"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-blue-400 transition-colors"
        >{{ t(item.labelKey) }}</a
      >
    </div>
  </footer>
</template>

<style scoped></style>
