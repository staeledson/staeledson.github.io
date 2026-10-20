# Stael Edson — Portfólio (Next.js)

Portfólio profissional de **Stael Edson**, Desenvolvedor Full Stack (Laravel, Vue.js, Node.js & IA).
Build moderno, bilíngue (PT/EN), dark mode.

**Stack:** Next.js 14 (App Router) · TypeScript · TailwindCSS · Framer Motion

---

## 🚀 Começando

```bash
# 1. instalar dependências
npm install

# 2. rodar em desenvolvimento  → http://localhost:3000
npm run dev

# 3. build de produção
npm run build && npm start
```

> Requisitos: Node.js 18.17+ (recomendado 20+).

---

## 📁 Estrutura de pastas

```
portfolio-nextjs/
├── public/                     # imagens (profile.jpg, og.png 1200×630 + screenshots WebP)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # <head>, metadata SEO, Open Graph, JSON-LD, fontes
│   │   ├── sitemap.ts · robots.ts
│   │   ├── page.tsx            # monta todas as seções
│   │   └── globals.css         # design system completo (tokens + componentes)
│   ├── context/
│   │   └── LangContext.tsx     # i18n PT/EN + persistência (localStorage)
│   ├── lib/
│   │   ├── content.ts          # ⭐ FONTE ÚNICA de conteúdo (PT/EN, projetos, skills)
│   │   └── types.ts            # tipos do dicionário e das entidades
│   └── components/
│       ├── ui/                 # Reveal (scroll), CountUp, SectionHead
│       ├── icons.tsx           # ícones SVG (stroke + marcas)
│       ├── Nav · Hero · About · Stats · Skills · Experience
│       ├── Projects · ProjectModal   # estudos de caso em modal
│       └── Differentials · Testimonials · Contact · Footer
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## ✏️ Como editar o conteúdo

Quase tudo vive em **`src/lib/content.ts`** — um único objeto com as versões `pt` e `en`.

- **Textos / copy:** edite os campos dentro de `pt` e `en`.
- **Projetos:** array `projects` (problema, solução, desafio, resultado, tags, links, imagem).
- **Skills:** array `skills` (categoria + nível 0–100; ≥ 85 = "Avançado").
- **Experiência:** `pt.experience.items` / `en.experience.items`.
- **Depoimentos:** `pt.testimonials.items` / `en.testimonials.items`.
- **Links de contato:** objeto `links` (email, LinkedIn, GitHub, WhatsApp, cv).

Imagens novas: converta para WebP (~1600 px de largura), coloque em `public/` e referencie como `/arquivo.webp`.
Exemplo: `cwebp -q 82 -resize 1600 0 print.png -o public/print.webp`.

---

## 🎨 Design System

Definido em `globals.css` via CSS custom properties:

| Token | Valor |
|---|---|
| Fundo | `--bg #0a0a0f` · `--bg-2 #0c0c13` |
| Texto | `--text #f3f3f7` · `--text-muted` · `--text-dim` |
| Destaque | `--accent` (indigo `#6366f1`) |
| Tipografia | Display **Space Grotesk** · Corpo **Manrope** · Mono **JetBrains Mono** |
| Raio | `--r 16px` · `--r-lg 22px` |
| Largura | `--maxw 1180px` |

A **cor de destaque** é dirigida por `--accent / --accent-2 / --accent-rgb`. Para trocá-la, edite o
`:root` em `globals.css`.

Animações sutis: entradas no scroll (`Reveal`, via Framer Motion `whileInView`), contadores
(`CountUp`), hovers em cards/botões. Tudo respeita `prefers-reduced-motion`.

---

## 🔎 SEO

- `metadata` em `layout.tsx`: title, description, keywords, canonical, robots.
- **Open Graph** + **Twitter Card** com imagem.
- **JSON-LD** `schema.org/Person` (cargo, skills, redes, localização, empregador).
- `lang` do `<html>` alterna entre `pt-BR` / `en` conforme o idioma escolhido.
- Sugestão: adicione `app/sitemap.ts` e `app/robots.ts` (Next gera automaticamente).

> Troque `SITE` em `layout.tsx` pela URL final de produção.

---
