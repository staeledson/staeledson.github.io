import type { Dictionary, Lang, Project, SkillCategory } from "./types";

/* Bilingual content for Stael Edson's portfolio. Single source of truth. */

export const projects: Project[] = [
    {
      id: "vituz",
      image: "/print-vituz.png",
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
      id: "construsoft",
      image: "/print-site-construsoft.png",
      featured: true,
      tags: ["Node.js", "NestJS", "PostgreSQL", "JWT"],
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
      image: "/print-assistente-rag.png",
      featured: true,
      tags: ["Python", "RAG", "LangChain", "LLM", "OpenRouter"],
      link: null,
      github: "https://github.com/staeledson/assistente-rag",
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
      image: "/print-site-igep.png",
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
    {
      id: "pluralmed",
      image: "/print-site-plural.png",
      featured: false,
      tags: ["Alpine.js", "Vue.js", "API", "Tailwind"],
      link: "https://www.pluralmed.com.br/",
      github: null,
      pt: {
        title: "Grupo Pluralmed",
        category: "Web · Institucional",
        tagline: "Evolução do site institucional com novas integrações.",
        problem:
          "O site institucional do Grupo Pluralmed precisava de mais interatividade e de novas seções dinâmicas.",
        solution:
          "Melhorias no site com Alpine.js para interatividade e integrações como uma aba de notícias dinâmica.",
        challenge:
          "Adicionar interatividade e novas integrações sem comprometer a leveza e a performance do site existente.",
        result:
          "Site mais interativo e dinâmico, com novas seções que mantêm o conteúdo sempre atualizado.",
      },
      en: {
        title: "Grupo Pluralmed",
        category: "Web · Institutional",
        tagline: "Evolving the institutional site with new integrations.",
        problem:
          "Grupo Pluralmed's institutional site needed more interactivity and new dynamic sections.",
        solution:
          "Site improvements with Alpine.js for interactivity and integrations such as a dynamic news section.",
        challenge:
          "Adding interactivity and new integrations without compromising the existing site's speed and lightness.",
        result:
          "A more interactive, dynamic site with new sections that keep content always up to date.",
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
        { value: 10, suffix: "+", label: "projetos entregues" },
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
      note: "Recomendações reais publicadas no LinkedIn por colegas e líderes.",
      items: [
        {
          quote: "Trabalho com o Stael no Grupo PluralMed há mais de um ano, com entregas reais em sistemas críticos da plataforma Vituz. Atua com PHP/Laravel, Node.js, PostgreSQL e AWS, modelou e otimizou queries complexas e já tem pipelines RAG em produção conectando o sistema a LLMs. Técnica sólida, ritmo de aprendizado acima da média e comunicação clara — o tipo de profissional que qualquer time tech moderno quer no squad. Recomendo fortemente.",
          name: "João Alisson",
          role: "Technical Lead & AI Architect · supervisor direto",
        },
        {
          quote: "Trabalhei com o Stael em um sistema de gestão em saúde, com integrações governamentais complexas e módulos críticos como atendimento e faturamento. O que mais me marcou foi a confiabilidade: dentro do escopo que assume, entrega — sem surpresas, sem pendências. Atua como full stack com pegada forte em backend, lidando bem com regras de negócio e fluxos sensíveis.",
          name: "Aristiklever R. Sousa",
          role: "Senior Software Engineer",
        },
        {
          quote: "O Stael tem um olhar técnico muito apurado que faz diferença no ciclo de entrega. Garante que cada requisito esteja claro e testável, antecipa cenários críticos e mantém comunicação transparente. Domina a parte técnica sem perder de vista a qualidade final do produto.",
          name: "João Carlos Figueredo",
          role: "QA · valida entregas para produção",
        },
        {
          quote: "Trabalhei com o Stael em projetos Full Stack e destaco sua sólida capacidade técnica no backend e no frontend: domínio de APIs, integração de sistemas, boas práticas de versionamento e interfaces performáticas. Profissional comprometido com qualidade de código e entrega eficiente. Recomendo fortemente.",
          name: "Nicole Fernandes",
          role: "Desenvolvedora Full Stack Pleno · mesma equipe",
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
        { value: 10, suffix: "+", label: "projects delivered" },
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
      note: "Real recommendations published on LinkedIn by colleagues and leads.",
      items: [
        {
          quote: "I've worked with Stael at Grupo PluralMed for over a year, with real deliveries on critical systems of the Vituz platform. He works with PHP/Laravel, Node.js, PostgreSQL and AWS, modeled and optimized complex queries, and already has RAG pipelines in production connecting the system to LLMs. Solid skills, above-average learning pace and clear communication — the kind of professional any modern tech team wants on the squad. Highly recommend.",
          name: "João Alisson",
          role: "Technical Lead & AI Architect · direct supervisor",
        },
        {
          quote: "I worked with Stael on a healthcare management system, with complex government integrations and critical modules like care and billing. What stood out most was his reliability: within the scope he takes on, he delivers — no surprises, no loose ends. He works full stack with a strong backend focus, handling business rules and sensitive flows well.",
          name: "Aristiklever R. Sousa",
          role: "Senior Software Engineer",
        },
        {
          quote: "Stael has a very sharp technical eye that makes a difference in the delivery cycle. He makes sure every requirement is clear and testable, anticipates critical scenarios and keeps communication transparent. He masters the technical side without losing sight of final product quality.",
          name: "João Carlos Figueredo",
          role: "QA · gatekeeper of production releases",
        },
        {
          quote: "I worked with Stael on Full Stack projects and highlight his solid technical ability on both backend and frontend: command of APIs, system integration, good versioning practices and performant interfaces. A professional committed to code quality and efficient delivery. Highly recommend.",
          name: "Nicole Fernandes",
          role: "Mid-level Full Stack Developer · same team",
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
