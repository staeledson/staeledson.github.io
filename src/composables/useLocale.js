import { ref, watch } from "vue";
import { messages } from "../i18n/messages.js";

const STORAGE_KEY = "portfolio-locale";

function readStoredLocale() {
  if (typeof localStorage === "undefined") return "pt";
  const s = localStorage.getItem(STORAGE_KEY);
  return s === "en" || s === "pt" ? s : "pt";
}

function applyDocumentLang(locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
}

const locale = ref(readStoredLocale());
applyDocumentLang(locale.value);

watch(locale, (v) => {
  localStorage.setItem(STORAGE_KEY, v);
  applyDocumentLang(v);
});

/**
 * Resolve nested keys like "nav.home" or "projects.items.0.title"
 */
function t(key) {
  const parts = String(key).split(".");
  let cur = messages[locale.value];
  for (const p of parts) {
    const n = Number(p);
    cur = cur?.[Number.isNaN(n) ? p : n];
  }
  return typeof cur === "string" ? cur : key;
}

function setLocale(next) {
  if (next === "pt" || next === "en") locale.value = next;
}

function toggleLocale() {
  locale.value = locale.value === "pt" ? "en" : "pt";
}

export function useLocale() {
  return { locale, t, setLocale, toggleLocale };
}
