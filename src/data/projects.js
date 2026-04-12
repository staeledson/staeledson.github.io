/**
 * Lista de projetos exibidos no carrossel.
 * Para cada novo projeto: adicione um objeto com `id` único e as entradas
 * correspondentes em `projects.items.<id>` em pt e en em `src/i18n/messages.js`.
 */
export const projects = [
  {
    id: "igep",
    image: "/print-site-igep.png",
    tags: ["Vue.js", "Tailwind", "API"],
    link: "https://www.igepsaude.org.br/",
    github: null,
  },
  {
    id: "pluralmed",
    image: "/print-site-plural.png",
    tags: ["AlpineJS", "VueJS", "API", "Tailwind"],
    link: "https://www.pluralmed.com.br/",
    github: null,
  },
  {
    id: "vituz",
    image: "/print-vituz.png",
    tags: ["Laravel", "Vue.js", "PostgreSQL", "PHP"],
    link: "https://vituz.app/login",
    github: null,
  },
  {
    id: "construsoft",
    image: "/print-site-construsoft.png",
    tags: ["Node.js", "PostgreSQL", "JavaScript"],
    link: "https://www.construsoft.com.br/",
    github: null,
  },
];
