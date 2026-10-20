import type { Dictionary, Lang, Project, SkillCategory } from "./types";

/* Bilingual content for Stael Edson's portfolio. Single source of truth. */

export const projects: Project[] = [
    {
      id: "vituz",
      image: "/print-vituz.webp",
      featured: true,
      tags: ["Laravel", "Vue.js", "PostgreSQL", "PHP", "Docker"],
      link: "https://vituz.app/login",
      github: null,
      pt: {
        title: "Vituz",
        category: "SaaS · Saúde Pública",
        tagline: "Plataforma que centraliza toda a gestão da saúde municipal.",
        problem:
          "Redes municipais de saúde gerenciavam escalas médicas, emergência, atenção primária, regulação, painel de chamadas e faturamento em sistemas fragmentados e processos manuais.",
        solution:
          "SaaS unificado que centraliza todos os módulos da saúde pública municipal em uma única plataforma, da escala médica ao faturamento.",
        challenge:
          "Modelar regras de negócio complexas de múltiplos setores da saúde mantendo performance e estabilidade em uso real por redes municipais inteiras.",
        result:
          "Sistema em produção em redes municipais. Otimizações em queries reduziram o tempo de resposta de módulos críticos em até 25%.",
      },
      en: {
        title: "Vituz",
        category: "SaaS · Public Health",
        tagline: "A platform that centralizes municipal healthcare management.",
        problem:
          "Municipal health networks managed medical scheduling, emergency, primary care, regulation, call panels and billing across fragmented systems and manual processes.",
        solution:
          "A unified SaaS that centralizes every module of municipal public health in a single platform — from medical scheduling to billing.",
        challenge:
          "Modeling complex business rules across multiple healthcare sectors while keeping performance and stability under real use by entire municipal networks.",
        result:
          "Running in production across municipal networks. Query optimizations cut response time of critical modules by up to 25%.",
      },
    },
    {
      id: "portal",
      image: "/print-portal.webp",
      featured: true,
      tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Playwright"],
      link: null,
      github: null,
      pt: {
        title: "Intranet Corporativa",
        category: "Plataforma interna · Pessoas & Processos",
        tagline: "Cultura, processos e gestão de talentos de 20 áreas num só lugar.",
        problem:
          "Diretrizes, processos, cargos e indicadores das áreas do grupo estavam espalhados em documentos soltos, e a gestão de talentos (avaliações, sucessão, onboarding) era feita em planilhas e formulários avulsos.",
        solution:
          "Intranet que concentra a ideologia, a cadeia de valor e os macroprocessos do grupo, organiza cada área em camadas (diretrizes, processos/POPs, indicadores) e digitaliza a gestão de pessoas: testes DISC e MBTI, 9-Box de sucessão, avaliação 360 com Janela de Johari, onboarding por área e BI de aderência ao report diário.",
        challenge:
          "Controlar o acesso pela hierarquia real da empresa sem expor dados sensíveis: o navegador não lê tabelas diretamente — tudo passa por RPCs no padrão Backend-for-Frontend, com RLS no Postgres e login único com os demais sistemas do grupo.",
        result:
          "Em produção para os colaboradores do grupo, com 40 arquivos de teste. Sou o principal autor do código. Um motor de documentos gerou 60+ documentos institucionais padronizados a partir do conteúdo das áreas.",
      },
      en: {
        title: "Corporate Intranet",
        category: "Internal platform · People & Processes",
        tagline: "Culture, processes and talent management for 20 departments in one place.",
        problem:
          "Guidelines, processes, roles and KPIs of the group's departments were scattered across loose documents, and talent management (assessments, succession, onboarding) ran on spreadsheets and ad-hoc forms.",
        solution:
          "An intranet that centralizes the group's mission, value chain and macro-processes, organizes each department in layers (guidelines, processes/SOPs, KPIs) and digitizes people management: DISC and MBTI tests, 9-Box succession grid, 360 feedback with Johari Window, per-department onboarding and BI on daily-report adherence.",
        challenge:
          "Enforcing access by the company's real hierarchy without exposing sensitive data: the browser never reads tables directly — everything goes through Backend-for-Frontend RPCs, with Postgres RLS and single sign-on shared with the group's other systems.",
        result:
          "In production for the group's employees, with 40 test files. I'm the main author of the codebase. A document engine generated 60+ standardized institutional documents from the departments' content.",
      },
    },
    {
      id: "cadernim",
      image: "/print-cadernim.webp",
      featured: true,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Mercado Pago", "LLM", "Docker"],
      link: "https://receitas-app.construsoft.online/p/cadernim",
      github: null,
      pt: {
        title: "Cadernim de Receitas",
        category: "Produto próprio · PWA pago",
        tagline: "App de receitas vendido online, do PDF ao pagamento.",
        problem:
          "Uma coleção de receitas existia só em PDFs: sem busca, sem filtros por dieta e sem forma de ser vendida como produto digital.",
        solution:
          "PWA com 1.100+ receitas extraídas dos PDFs por um pipeline com LLM e revisadas no painel admin com versionamento. Tem busca por receita ou ingrediente, filtros por dieta, favoritos, login por código enviado ao e-mail e venda por pagamento único no Mercado Pago.",
        challenge:
          "Garantir dados confiáveis vindos de PDFs (revisão em lote validada por formato e paridade de regras entre Python e TypeScript) e um checkout seguro, com webhook assinado por HMAC e idempotente.",
        result:
          "No ar e vendendo, com pagamento real validado, funil de métricas por campanha (Meta Pixel + API de Conversões) e 68 arquivos de teste (unitários, integração e E2E).",
      },
      en: {
        title: "Cadernim Recipes",
        category: "My own product · Paid PWA",
        tagline: "A recipe app sold online, from PDF to payment.",
        problem:
          "A recipe collection existed only as PDFs: no search, no diet filters and no way to sell it as a digital product.",
        solution:
          "A PWA with 1,100+ recipes extracted from the PDFs by an LLM pipeline and reviewed in an admin panel with versioning. It offers search by recipe or ingredient, diet filters, favorites, email-code login and one-time payment via Mercado Pago.",
        challenge:
          "Ensuring reliable data from PDFs (batch review validated by schema, plus rule parity between Python and TypeScript) and a secure checkout with an HMAC-signed, idempotent webhook.",
        result:
          "Live and selling, with real payments validated, a per-campaign metrics funnel (Meta Pixel + Conversions API) and 68 test files (unit, integration and E2E).",
      },
    },
    {
      id: "pesquisa",
      image: "/print-pesquisa.webp",
      featured: false,
      tags: ["React", "TypeScript", "Capacitor", "SQLite", "Supabase", "Leaflet"],
      link: null,
      github: null,
      pt: {
        title: "Plataforma de Pesquisa de Campo",
        category: "Web + Android · Offline-first",
        tagline: "Coleta georreferenciada que funciona sem internet.",
        problem:
          "Pesquisas de campo dependiam de formulários em papel ou de apps que exigiam conexão, com consolidação manual e pouca visibilidade sobre cobertura e cotas.",
        solution:
          "Um único codebase React para o painel do coordenador (web) e o app do entrevistador (Android via Capacitor): questionários, atribuições, entrevistadores com PIN, coleta offline com GPS em SQLite e sincronização quando há sinal. O painel mostra resultados por zona no mapa, séries temporais e comparativos.",
        challenge:
          "Sincronizar com segurança os dados coletados offline e medir a cobertura real: point-in-polygon sobre os limites das zonas, margem de erro e cotas por região, além de importar e padronizar a base do sistema legado.",
        result:
          "Em produção (web + APK), já usada em coletas de 1.000 entrevistas. Desenvolvi o sistema sozinho, de ponta a ponta.",
      },
      en: {
        title: "Field Survey Platform",
        category: "Web + Android · Offline-first",
        tagline: "Geotagged data collection that works without internet.",
        problem:
          "Field surveys relied on paper forms or apps that required a connection, with manual consolidation and little visibility into coverage and quotas.",
        solution:
          "A single React codebase for the coordinator dashboard (web) and the interviewer app (Android via Capacitor): questionnaires, assignments, PIN-based interviewers, offline GPS-tagged collection in SQLite and sync when there's signal. The dashboard shows results per zone on a map, time series and comparisons.",
        challenge:
          "Safely syncing data collected offline and measuring real coverage: point-in-polygon over zone boundaries, margin of error and regional quotas, plus importing and normalizing the legacy system's data.",
        result:
          "In production (web + APK), already used for 1,000-interview data collections. I built the whole system end-to-end on my own.",
      },
    },
    {
      id: "prompthub",
      image: "/print-prompthub.webp",
      featured: false,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Drizzle", "OpenRouter"],
      link: null,
      github: null,
      pt: {
        title: "PromptHub",
        category: "IA · Gestão de prompts para equipes",
        tagline: "Biblioteca de prompts com busca semântica, versões e permissões.",
        problem:
          "Prompts úteis ficavam espalhados em conversas e documentos pessoais, sem versão, sem controle de quem pode ver e sem forma de reaproveitar o que funciona.",
        solution:
          "Plataforma web/PWA para guardar, versionar, compartilhar e executar prompts. Tem busca híbrida (texto em português + semântica com pgvector, unidas por Reciprocal Rank Fusion), playground, geração e melhoria de prompts com IA, ditado por voz e coleções.",
        challenge:
          "Modelar permissões granulares (papéis admin, manager, member e viewer, mais compartilhamento por usuário ou grupo) com auditoria, analytics e limites de uso por usuário e por organização.",
        result:
          "MVP completo em 7 fases, com 131 arquivos de teste (unitários, de integração contra Postgres real e E2E) e deploy em Docker.",
      },
      en: {
        title: "PromptHub",
        category: "AI · Prompt management for teams",
        tagline: "A prompt library with semantic search, versions and permissions.",
        problem:
          "Useful prompts were scattered across chats and personal docs, with no versioning, no control over who can see them and no way to reuse what works.",
        solution:
          "A web/PWA platform to store, version, share and run prompts. It has hybrid search (Portuguese full-text + pgvector semantic search, merged with Reciprocal Rank Fusion), a playground, AI prompt generation and improvement, voice dictation and collections.",
        challenge:
          "Modeling granular permissions (admin, manager, member and viewer roles, plus per-user or per-group sharing) with auditing, analytics and usage limits per user and per organization.",
        result:
          "A complete MVP built in 7 phases, with 131 test files (unit, integration against a real Postgres and E2E) and Docker deployment.",
      },
    },
    {
      id: "financeiro",
      image: "/print-financeiro.webp",
      featured: false,
      tags: ["NestJS", "Vue.js", "PostgreSQL", "Prisma", "BullMQ", "LLM"],
      link: null,
      github: null,
      pt: {
        title: "Sistema Financeiro IA",
        category: "IA · Finanças pessoais e PJ",
        tagline: "Lance gastos por texto, áudio ou foto e converse com seus dados.",
        problem:
          "Controlar as finanças pessoais, da família e da PJ exigia digitar e categorizar cada lançamento à mão, e as planilhas não respondiam perguntas simples sobre os próprios gastos.",
        solution:
          "PWA em Vue 3 com API NestJS: lançamentos por texto, áudio (Whisper) ou foto, importação de extratos OFX/PDF, categorização por IA com regras aprendidas, workspaces separados com convites e um chat que consulta os dados via function calling.",
        challenge:
          "Processar a ingestão com IA de forma assíncrona e confiável (filas BullMQ + Redis) num monorepo com tipos compartilhados, mantendo o cadastro fechado por lista de permissão.",
        result:
          "Em uso real, com CI no GitHub Actions, 89 arquivos de teste e deploy separado de API, worker e web.",
      },
      en: {
        title: "AI Finance System",
        category: "AI · Personal & business finance",
        tagline: "Log expenses by text, voice or photo and chat with your data.",
        problem:
          "Managing personal, family and business finances meant typing and categorizing every entry by hand, and spreadsheets couldn't answer simple questions about one's own spending.",
        solution:
          "A Vue 3 PWA with a NestJS API: entries by text, voice (Whisper) or photo, OFX/PDF statement import, AI categorization with learned rules, separate workspaces with invites and a chat that queries the data via function calling.",
        challenge:
          "Running AI ingestion asynchronously and reliably (BullMQ + Redis queues) in a monorepo with shared types, while keeping sign-up closed behind an allowlist.",
        result:
          "In real use, with GitHub Actions CI, 89 test files and separate deployments for API, worker and web.",
      },
    },
    {
      id: "construsoft",
      image: "/print-site-construsoft.webp",
      featured: false,
      tags: ["Node.js", "NestJS", "Vue.js", "PostgreSQL", "Prisma", "Docker"],
      link: "https://www.construsoft.com.br/",
      github: null,
      pt: {
        title: "Construsoft",
        category: "SaaS · Gestão de Obras",
        tagline: "Gestão de obras com contratos, medições e métricas em tempo real.",
        problem:
          "Construtoras acompanhavam contratos, obras, materiais e medições em planilhas dispersas, sem uma visão consolidada das métricas de cada obra.",
        solution:
          "SaaS de gestão de obras que acompanha contratos, materiais e medições, fornecendo dados e dashboards de métricas para o acompanhamento de cada obra.",
        challenge:
          "Construir um backend robusto com autenticação segura (JWT) e integração com a API de obras, conduzindo o produto do conceito ao deploy.",
        result:
          "Plataforma completa entregue de ponta a ponta, com dados e métricas que dão visibilidade real ao andamento das obras.",
      },
      en: {
        title: "Construsoft",
        category: "SaaS · Construction Management",
        tagline: "Construction management with contracts, measurements and live metrics.",
        problem:
          "Construction firms tracked contracts, projects, materials and measurements across scattered spreadsheets, with no consolidated view of each project's metrics.",
        solution:
          "A construction-management SaaS that tracks contracts, materials and measurements, delivering data and metric dashboards to follow every project.",
        challenge:
          "Building a robust backend with secure authentication (JWT) and integration with the construction API, taking the product from concept to deploy.",
        result:
          "A complete platform delivered end-to-end, with data and metrics that give real visibility into project progress.",
      },
    },
    {
      id: "assistenteRag",
      image: "/print-assistente-rag.webp",
      featured: false,
      tags: ["Python", "RAG", "LangChain", "LLM", "OpenRouter"],
      link: null,
      github: "https://github.com/staeledson/rag-assistant",
      pt: {
        title: "Assistente RAG",
        category: "IA · RAG sobre Documentos",
        tagline: "Chatbot que responde com precisão sobre os seus documentos.",
        problem:
          "Encontrar e responder com rapidez e precisão a diversas perguntas espalhadas por muitos documentos era um processo lento e manual.",
        solution:
          "Assistente conversacional (RAG) que indexa os documentos enviados, faz busca semântica e responde via LLM, sempre ancorado no conteúdo real.",
        challenge:
          "Garantir respostas assertivas e fundamentadas nos documentos — reduzindo alucinação — através de um pipeline de indexação e retrieval bem calibrado.",
        result:
          "Respostas rápidas e assertivas sobre múltiplos documentos, transformando uma busca manual em uma conversa.",
      },
      en: {
        title: "RAG Assistant",
        category: "AI · RAG over Documents",
        tagline: "A chatbot that answers accurately over your own documents.",
        problem:
          "Finding and answering questions scattered across many documents — quickly and accurately — was a slow, manual process.",
        solution:
          "A conversational assistant (RAG) that indexes uploaded documents, runs semantic search and answers via an LLM, always grounded in the real content.",
        challenge:
          "Ensuring accurate, document-grounded answers — reducing hallucination — through a well-calibrated indexing and retrieval pipeline.",
        result:
          "Fast, accurate answers across multiple documents, turning a manual search into a conversation.",
      },
    },
    {
      id: "igep",
      image: "/print-site-igep.webp",
      featured: false,
      tags: ["Vue.js", "Tailwind", "API", "SEO"],
      link: "https://www.igepsaude.org.br/",
      github: null,
      pt: {
        title: "Portal IGEP Saúde",
        category: "Web · Institucional",
        tagline: "Portal institucional moderno, do conceito ao deploy.",
        problem:
          "O IGEP Saúde precisava de uma presença institucional moderna, responsiva e bem posicionada nos buscadores.",
        solution:
          "Desenvolvimento completo do portal com stack moderna (Vue.js), foco em responsividade e otimização de SEO.",
        challenge:
          "Entregar uma plataforma rápida e fácil de navegar mantendo boas práticas de SEO desde a base.",
        result:
          "Portal moderno e responsivo entregue de ponta a ponta, com melhor posicionamento e navegação.",
      },
      en: {
        title: "IGEP Saúde Portal",
        category: "Web · Institutional",
        tagline: "A modern institutional portal, from concept to deploy.",
        problem:
          "IGEP Saúde needed a modern, responsive institutional presence that ranked well in search engines.",
        solution:
          "Full development of the portal with a modern stack (Vue.js), focused on responsiveness and SEO optimization.",
        challenge:
          "Delivering a fast, easy-to-navigate platform while keeping SEO best practices in from the ground up.",
        result:
          "A modern, responsive portal delivered end-to-end, with better ranking and navigation.",
      },
    },
  ];

  export const skills: SkillCategory[] = [
    {
      id: "backend",
      pt: "Backend",
      en: "Backend",
      items: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "NestJS", level: 70 },
        { name: "APIs REST", level: 88 },
        { name: "Queues & Jobs", level: 72 },
      ],
    },
    {
      id: "frontend",
      pt: "Frontend",
      en: "Frontend",
      items: [
        { name: "Vue.js", level: 90 },
        { name: "React", level: 72 },
        { name: "JavaScript", level: 88 },
        { name: "Alpine.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      id: "database",
      pt: "Banco de Dados",
      en: "Database",
      items: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 78 },
        { name: "Migrations", level: 85 },
      ],
    },
    {
      id: "devops",
      pt: "DevOps",
      en: "DevOps",
      items: [
        { name: "Docker", level: 75 },
        { name: "AWS EC2", level: 70 },
        { name: "GitHub Actions", level: 75 },
        { name: "CI/CD", level: 74 },
      ],
    },
    {
      id: "ai",
      pt: "IA",
      en: "AI",
      items: [
        { name: "RAG", level: 72 },
        { name: "LangChain", level: 70 },
        { name: "LLMs", level: 72 },
        { name: "Python", level: 72 },
      ],
    },
  ];

  const pt: Dictionary = {
    meta: { lang: "pt", switchTo: "EN" },
    nav: {
      links: [
        { id: "about", label: "Sobre" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experiência" },
        { id: "projects", label: "Projetos" },
        { id: "contact", label: "Contato" },
      ],
      cv: "Baixar CV",
      contact: "Fale comigo",
    },
    hero: {
      badge: "Disponível para projetos remotos",
      role: "Desenvolvedor Full Stack",
      h1a: "Transformo regras de negócio complexas em",
      h1b: "sistemas SaaS escaláveis.",
      sub: "Desenvolvedor Full Stack focado em Laravel, Vue.js, Node.js e IA. 3+ anos construindo plataformas de saúde e gestão usadas por redes municipais e empresas.",
      ctaProjects: "Ver projetos",
      ctaLinkedin: "LinkedIn",
      ctaGithub: "GitHub",
      ctaCv: "Baixar CV",
      stackLabel: "Stack principal",
    },
    about: {
      kicker: "Sobre mim",
      title: "Engenharia que resolve problemas reais de negócio.",
      p1: "Sou o Stael Edson, desenvolvedor Full Stack Pleno (em transição para Sênior) com 3+ anos construindo aplicações SaaS e sistemas corporativos de ponta a ponta.",
      p2: "Atuo do banco de dados à interface: modelo regras de negócio complexas em PostgreSQL, escrevo backends em Laravel e Node.js, e entrego experiências fluidas em Vue.js e React — sempre com olhar para performance, escalabilidade e manutenção.",
      p3: "Meu valor está em traduzir necessidades de negócio em software estável e mensurável: otimizei módulos críticos em até 25%, automatizei deploys com Docker e CI/CD, e venho integrando IA (RAG) para resolver problemas que antes eram manuais.",
      p4: "Busco posições remotas onde eu possa assumir responsabilidade técnica de verdade e construir produtos que escalam.",
      photoAlt: "Retrato de Stael Edson",
    },
    stats: {
      kicker: "Em números",
      items: [
        { value: 3, suffix: "+", label: "anos de experiência" },
        { value: 20, suffix: "+", label: "sistemas e produtos entregues" },
        { value: 25, suffix: "%", label: "mais rápido em módulos críticos" },
        { value: 30, suffix: "%", label: "entregas aceleradas com componentes" },
      ],
    },
    skills: {
      kicker: "Stack & Ferramentas",
      title: "Habilidades por categoria",
      sub: "Tecnologias que uso para construir sistemas completos, do banco à interface.",
      legendAdv: "Avançado",
      legendInt: "Intermediário",
    },
    experience: {
      kicker: "Trajetória",
      title: "Experiência profissional",
      present: "Atual",
      items: [
        {
          role: "Desenvolvedor Full Stack Pleno",
          company: "Grupo Pluralmed",
          location: "Sobral, CE · Híbrido",
          period: "fev 2025 — Atual",
          summary:
            "Responsável por desenvolvimento e manutenção de aplicações críticas, com foco em performance, integrações e infraestrutura.",
          bullets: [
            "Otimizei queries complexas em PostgreSQL, reduzindo o tempo de resposta de módulos críticos em até 25%.",
            "Implementei filas e jobs assíncronos para tarefas críticas e rotinas de integração.",
            "Integrei APIs externas de serviços governamentais e sistemas de saúde de terceiros.",
            "Containerizei aplicações com Docker e fiz deploy em AWS EC2.",
            "Criei e mantive pipelines CI/CD com GitHub Actions.",
            "Construí componentes reutilizáveis e dashboards interativos em Vue.js e React.",
          ],
        },
        {
          role: "Desenvolvedor Full Stack Júnior",
          company: "Grupo Pluralmed",
          location: "Sobral, CE · Híbrido",
          period: "abr 2023 — fev 2025",
          summary:
            "Atuei na evolução do SaaS Vituz e de portais institucionais, com foco em entrega contínua e estabilidade.",
          bullets: [
            "Participei do desenvolvimento e evolução do Vituz, usado em redes municipais de saúde, com foco em performance e estabilidade.",
            "Criei dashboards interativos e componentes reutilizáveis, acelerando a entrega de novos módulos em até 30%.",
            "Fiz deploy de aplicações Dockerizadas via VPS e AWS EC2 com automações de CI/CD.",
            "Contribuí para a modernização do site institucional e desenvolvi o portal IGEP com otimização de SEO.",
          ],
        },
      ],
    },
    projects: {
      kicker: "Trabalhos selecionados",
      title: "Projetos & estudos de caso",
      sub: "Sistemas SaaS, IA e produtos corporativos — do problema ao resultado.",
      featuredLabel: "Destaque",
      viewCase: "Ver estudo de caso",
      live: "Ver online",
      code: "Código",
      labels: {
        problem: "Problema",
        solution: "Solução",
        challenge: "Desafio",
        result: "Resultado",
        stack: "Tecnologias",
      },
    },
    diff: {
      kicker: "Diferenciais",
      title: "Onde eu gero mais valor",
      items: [
        { t: "Arquitetura de Software", d: "Estruturo aplicações organizadas, versionadas e prontas para escalar." },
        { t: "Integração com IA", d: "Pipelines de RAG com LangChain e LLMs para resolver problemas reais." },
        { t: "Full Stack End-to-End", d: "Do banco de dados à interface, conduzo o produto do conceito ao deploy." },
        { t: "APIs REST", d: "Integrações robustas com serviços externos, governamentais e de terceiros." },
        { t: "Docker & DevOps", d: "Containerização, deploy em AWS e pipelines CI/CD com GitHub Actions." },
        { t: "Banco de Dados", d: "Modelagem e otimização de queries complexas em PostgreSQL." },
      ],
    },
    testimonials: {
      kicker: "Recomendações",
      title: "O que dizem sobre o meu trabalho",
      note: "Trechos de recomendações publicadas no LinkedIn por colegas e líderes.",
      items: [
        {
          quote: "Conheço e trabalho com o Stael no Grupo PluralMed há mais de 1 ano. Construiu com entregas reais em sistemas críticos da Plataforma Vituz […] Construiu integrações com serviços do SUS, modelou e otimizou queries complexas em PostgreSQL, implementou processamento assíncrono com filas e jobs para rotinas críticas. […] já tem em produção pipelines RAG conectando o sistema a APIs de LLMs para automação inteligente de tarefas […] Soma técnica sólida, ritmo de aprendizado acima da média e comunicação clara em decisões técnicas.",
          name: "João Alisson",
          role: "Arquiteto de Software & IA · supervisor direto",
        },
        {
          quote: "Tive a oportunidade de trabalhar com o Stael em um sistema de gestão em saúde, um ambiente que envolve integrações com APIs governamentais complexas e módulos críticos como atendimento e faturamento […] O que mais me marcou foi a confiabilidade dele: dentro do escopo que assume, entrega. Sem surpresas, sem pendências. Atua como fullstack, mas com uma pegada mais forte no backend — onde demonstra boa capacidade de lidar com regras de negócio, integrações e fluxos sensíveis.",
          name: "Aristiklever R. Sousa",
          role: "Senior Software Engineer · Healthcare Systems",
        },
        {
          quote: "O Stael possui um olhar técnico muito apurado que faz toda a diferença no ciclo de entrega. […] ele demonstra um cuidado raro em garantir que cada requisito esteja claro e testável. Essa postura facilita imensamente o trabalho de suporte e QA, pois ele antecipa cenários críticos e mantém uma comunicação transparente.",
          name: "João Carlos Figueredo",
          role: "Desenvolvedor Back-end · mesma equipe",
        },
        {
          quote: "Tive a oportunidade de trabalhar com o Stael em projetos de desenvolvimento Full Stack e destaco sua sólida capacidade técnica tanto no backend quanto no frontend. Possui domínio no desenvolvimento de APIs, integração de sistemas, boas práticas de versionamento e construção de interfaces performáticas. É um profissional comprometido com qualidade de código, organização e entrega de soluções eficientes.",
          name: "Nicole Fernandes",
          role: "Desenvolvedora Full Stack · mesma equipe",
        },
      ],
    },
    contact: {
      kicker: "Vamos conversar",
      title: "Pronto para o próximo desafio.",
      sub: "Aberto a oportunidades remotas como Desenvolvedor Full Stack Pleno/Sênior. Se você procura alguém que assume responsabilidade técnica e entrega resultados, vamos falar.",
      email: "E-mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      cta: "Quero contratar",
      availability: "Disponível para início imediato · Remoto",
    },
    footer: {
      tagline: "Desenvolvedor Full Stack · Laravel, Vue.js & IA",
      built: "Construído com foco em performance e acessibilidade.",
      top: "Voltar ao topo",
    },
  };

  const en: Dictionary = {
    meta: { lang: "en", switchTo: "PT" },
    nav: {
      links: [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
      ],
      cv: "Download CV",
      contact: "Get in touch",
    },
    hero: {
      badge: "Available for remote work",
      role: "Full Stack Developer",
      h1a: "I turn complex business rules into",
      h1b: "scalable SaaS systems.",
      sub: "Full Stack developer focused on Laravel, Vue.js, Node.js and AI. 3+ years building health and management platforms used by municipal networks and companies.",
      ctaProjects: "View projects",
      ctaLinkedin: "LinkedIn",
      ctaGithub: "GitHub",
      ctaCv: "Download CV",
      stackLabel: "Core stack",
    },
    about: {
      kicker: "About me",
      title: "Engineering that solves real business problems.",
      p1: "I'm Stael Edson, a mid-level Full Stack developer (transitioning to senior) with 3+ years building SaaS applications and corporate systems end-to-end.",
      p2: "I work from the database to the interface: I model complex business rules in PostgreSQL, write backends in Laravel and Node.js, and ship smooth experiences in Vue.js and React — always with an eye on performance, scalability and maintainability.",
      p3: "My value is translating business needs into stable, measurable software: I optimized critical modules by up to 25%, automated deploys with Docker and CI/CD, and have been integrating AI (RAG) to solve problems that used to be manual.",
      p4: "I'm looking for remote roles where I can take on real technical ownership and build products that scale.",
      photoAlt: "Portrait of Stael Edson",
    },
    stats: {
      kicker: "By the numbers",
      items: [
        { value: 3, suffix: "+", label: "years of experience" },
        { value: 20, suffix: "+", label: "systems and products shipped" },
        { value: 25, suffix: "%", label: "faster critical modules" },
        { value: 30, suffix: "%", label: "faster delivery with components" },
      ],
    },
    skills: {
      kicker: "Stack & Tools",
      title: "Skills by category",
      sub: "The technologies I use to build complete systems, from database to interface.",
      legendAdv: "Advanced",
      legendInt: "Intermediate",
    },
    experience: {
      kicker: "Track record",
      title: "Professional experience",
      present: "Present",
      items: [
        {
          role: "Mid-level Full Stack Developer",
          company: "Grupo Pluralmed",
          location: "Sobral, BR · Hybrid",
          period: "Feb 2025 — Present",
          summary:
            "Responsible for developing and maintaining critical applications, focused on performance, integrations and infrastructure.",
          bullets: [
            "Optimized complex PostgreSQL queries, cutting response time of critical modules by up to 25%.",
            "Implemented queues and async jobs for critical tasks and integration routines.",
            "Integrated external APIs from government services and third-party health systems.",
            "Containerized applications with Docker and deployed to AWS EC2.",
            "Built and maintained CI/CD pipelines with GitHub Actions.",
            "Built reusable components and interactive dashboards in Vue.js and React.",
          ],
        },
        {
          role: "Junior Full Stack Developer",
          company: "Grupo Pluralmed",
          location: "Sobral, BR · Hybrid",
          period: "Apr 2023 — Feb 2025",
          summary:
            "Worked on the evolution of the Vituz SaaS and institutional portals, focused on continuous delivery and stability.",
          bullets: [
            "Contributed to the development and evolution of Vituz, used across municipal health networks, focused on performance and stability.",
            "Built interactive dashboards and reusable components, accelerating delivery of new modules by up to 30%.",
            "Deployed Dockerized applications via VPS and AWS EC2 with CI/CD automation.",
            "Helped modernize the institutional site and developed the IGEP portal with SEO optimization.",
          ],
        },
      ],
    },
    projects: {
      kicker: "Selected work",
      title: "Projects & case studies",
      sub: "SaaS systems, AI and corporate products — from problem to result.",
      featuredLabel: "Featured",
      viewCase: "View case study",
      live: "View live",
      code: "Code",
      labels: {
        problem: "Problem",
        solution: "Solution",
        challenge: "Challenge",
        result: "Result",
        stack: "Tech stack",
      },
    },
    diff: {
      kicker: "Strengths",
      title: "Where I add the most value",
      items: [
        { t: "Software Architecture", d: "I structure organized, versioned applications ready to scale." },
        { t: "AI Integration", d: "RAG pipelines with LangChain and LLMs to solve real problems." },
        { t: "End-to-End Full Stack", d: "From database to interface, I take products from concept to deploy." },
        { t: "REST APIs", d: "Robust integrations with external, government and third-party services." },
        { t: "Docker & DevOps", d: "Containerization, AWS deploys and CI/CD pipelines with GitHub Actions." },
        { t: "Databases", d: "Modeling and optimizing complex queries in PostgreSQL." },
      ],
    },
    testimonials: {
      kicker: "Recommendations",
      title: "What people say about my work",
      note: "Excerpts from recommendations published on LinkedIn by colleagues and leads (translated from Portuguese).",
      items: [
        {
          quote: "I've known and worked with Stael at Grupo PluralMed for over a year. He has built real deliveries on critical systems of the Vituz Platform […] He built integrations with SUS (Brazilian public health) services, modeled and optimized complex PostgreSQL queries, and implemented asynchronous processing with queues and jobs for critical routines. […] he already has RAG pipelines in production connecting the system to LLM APIs for intelligent task automation […] Solid technical skills, above-average learning pace and clear communication in technical decisions.",
          name: "João Alisson",
          role: "Software & AI Architect · direct supervisor",
        },
        {
          quote: "I had the opportunity to work with Stael on a healthcare management system, an environment involving complex government API integrations and critical modules such as patient care and billing […] What stood out most was his reliability: within the scope he takes on, he delivers. No surprises, no loose ends. He works full stack, but with a stronger backend focus — where he shows a good ability to handle business rules, integrations and sensitive flows.",
          name: "Aristiklever R. Sousa",
          role: "Senior Software Engineer · Healthcare Systems",
        },
        {
          quote: "Stael has a very sharp technical eye that makes all the difference in the delivery cycle. […] he shows rare care in making sure every requirement is clear and testable. This attitude makes support and QA work much easier, as he anticipates critical scenarios and keeps communication transparent.",
          name: "João Carlos Figueredo",
          role: "Back-end Developer · same team",
        },
        {
          quote: "I had the opportunity to work with Stael on Full Stack development projects, and I highlight his solid technical ability on both backend and frontend. He masters API development, system integration, good versioning practices and building performant interfaces. A professional committed to code quality, organization and delivering efficient solutions.",
          name: "Nicole Fernandes",
          role: "Full Stack Developer · same team",
        },
      ],
    },
    contact: {
      kicker: "Let's talk",
      title: "Ready for the next challenge.",
      sub: "Open to remote opportunities as a mid/senior Full Stack Developer. If you're looking for someone who takes technical ownership and delivers results, let's talk.",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      cta: "Hire me",
      availability: "Available to start immediately · Remote",
    },
    footer: {
      tagline: "Full Stack Developer · Laravel, Vue.js & AI",
      built: "Built with a focus on performance and accessibility.",
      top: "Back to top",
    },
  };

export const content: Record<Lang, Dictionary> = { pt, en };

export const links = {
    email: "edsonstael@gmail.com",
    linkedin: "https://www.linkedin.com/in/staeledson/",
    github: "https://github.com/staeledson",
    whatsapp: "https://wa.me/5585992641804",
    whatsappLabel: "+55 85 99264-1804",
    cv: "#",
  };
