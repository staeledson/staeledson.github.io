Para rodar o projeto localmente:

```bash
npm install
npm run dev
```

Para publicar no GitHub Pages (branch `gh-pages`), estando na branch **`main`** com as alterações commitadas:

```bash
npm run deploy
```

Esse comando gera o build em `dist/` e envia o conteúdo para a branch `gh-pages` (não é necessário fazer merge manual de `main` em `gh-pages`). No repositório, em **Settings → Pages**, a fonte deve estar como branch **`gh-pages`** na raiz (`/`).

Depois de alguns segundos, o site atualiza em https://staeledson.github.io/
