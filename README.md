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
├── public/                     # imagens (profile.jpg + screenshots dos projetos)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # <head>, metadata SEO, Open Graph, JSON-LD, fontes
│   │   ├── page.tsx            # monta todas as seções
│   │   └── globals.css         # design system completo (tokens + componentes)
│   ├── context/
│   │   ├── LangContext.tsx     # i18n PT/EN + persistência (localStorage)
│   │   └── ThemeContext.tsx    # troca de cor de destaque (accent)
│   ├── lib/
│   │   ├── content.ts          # ⭐ FONTE ÚNICA de conteúdo (PT/EN, projetos, skills)
│   │   └── types.ts            # tipos do dicionário e das entidades
│   └── components/
│       ├── ui/                 # Reveal (scroll), CountUp, SectionHead
│       ├── icons.tsx           # ícones SVG (stroke + marcas)
│       ├── Nav · Hero · About · Stats · Skills · Experience
│       ├── Projects · ProjectModal   # estudos de caso em modal
│       ├── Differentials · Testimonials · Contact · Footer
│       └── AccentSwitcher.tsx  # seletor de cor flutuante
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

Imagens novas: coloque em `public/` e referencie como `/arquivo.png`.

---

## 🎨 Design System

Definido em `globals.css` via CSS custom properties:

| Token | Valor |
|---|---|
| Fundo | `--bg #0a0a0f` · `--bg-2 #0c0c13` |
| Texto | `--text #f3f3f7` · `--text-muted` · `--text-dim` |
| Destaque | `--accent` (default indigo `#6366f1`) — trocável em runtime |
| Tipografia | Display **Space Grotesk** · Corpo **Manrope** · Mono **JetBrains Mono** |
| Raio | `--r 16px` · `--r-lg 22px` |
| Largura | `--maxw 1180px` |

A **cor de destaque** é dirigida por `--accent / --accent-2 / --accent-rgb`. O `ThemeContext`
troca essas variáveis (6 presets) e persiste a escolha. Para fixar uma cor padrão, edite o
`:root` em `globals.css` ou o estado inicial em `ThemeContext.tsx`.

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
