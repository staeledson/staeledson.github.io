<script setup>
import { onMounted, onUnmounted, ref } from "vue";

defineProps({
  msg: String,
});

const projects = ref([
  { name: "Site IGEP Saúde - Instituto de Gestão, Estudos e Pesquisa em Saúde", 
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQEYKG_nSNTbKg/profile-treasury-image-shrink_160_160/B4DZXM.jBpHkAo-/0/1742900707642?e=1745542800&v=beta&t=HJtika33I6dghJItzb6rFyxvKs1_G06RrE5ComueY10", 
    link: "https://www.igepsaude.org.br/#/", 
    description: "Desenvolvimento completo de website institucional para o IGEP Saúde, desde a concepção inicial até o deploy final. Utilizando o framework VueJS, criei uma plataforma moderna, responsiva e de fácil navegação, com foco na apresentação clara dos serviços e pesquisas da instituição. Fui responsável por todo o ciclo de vida do projeto, incluindo design, implementação e otimização.",
  },
  { name: "Site Grupo Pluralmed - Gestão Médica e Inovação em Saúde", 
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQFFjeCeyCZKcw/profile-treasury-image-shrink_160_160/B4DZXNBnHVGkAo-/0/1742901510394?e=1745542800&v=beta&t=UmoGzcCfyUWLfk0-x2yuGsOjyTNE0UPJI--I9AetPdU", 
    link: "https://www.pluralmed.com.br/src/pages/home/index.html", 
    description: "Trabalhei na implementação de diversas melhorias no site institucional do Grupo Pluralmed. Entre as principais contribuições, implementei o AlpineJS para otimizar a interatividade da interface e integrar funcionalidades dinâmicas de forma simples e eficiente. Uma das funcionalidades mais notáveis foi o desenvolvimento de uma aba de notícias, que permite à equipe do Grupo Pluralmed cadastrar e atualizar as notícias diretamente no software da empresa, por meio de uma integração personalizada com a API. Essa melhoria trouxe mais agilidade e autonomia para a gestão de conteúdo do site.",
  },
  { name: "Vituz - Sistema SaaS de Gestão de Saúde", 
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGdd4iQ7CAruw/profile-treasury-image-shrink_160_160/B4DZXNHDnpG8Ao-/0/1742902939296?e=1745542800&v=beta&t=th5JpzBfb0P41GgBnWJZ_Fu9NT2hn9gpT6YZoRIehqA", 
    link: "https://www.youtube.com/watch?v=Ywb-tC0xDdQ", 
    description: "Desde 2023, venho contribuindo no desenvolvimento e aprimoramento do Vituz, um sistema SaaS completo voltado para a gestão de saúde pública. O sistema abrange diversos módulos essenciais, como gestão de escalas médicas, estoques de almoxarifados e farmácias, emergência hospitalar, ambulatório, regulação, atenção básica e atenção especializada.",
  },
]);

const next = () => {
  const firstProject = projects.value.shift(); // Remove o primeiro item
  projects.value.push(firstProject); // Adiciona o item removido ao final do array
};

const prev = () => {
  const lastProject = projects.value.pop(); // Remove o último item
  projects.value.unshift(lastProject); // Adiciona o item removido ao início do array
};

// Alternância automática
let interval;
onMounted(() => {
  interval = setInterval(next, 10000); // Alterna a cada 3 segundos
});

onUnmounted(() => {
  clearInterval(interval); // Limpa o intervalo ao desmontar o componente
});
</script>

<template>
  <div class="flex flex-col mt-56">
    <p class="text-[60px]">Meus Projetos</p>
    <div class="projects-carousel mt-24 justify-center relative">
      <button 
        @click="prev" 
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full shadow-md hover:bg-gray-500"
      >
        &#8592;
      </button>
      <div 
        class="carousel flex items-center gap-5 transition-transform duration-300 ease-in-out justify-center"
      >
          <div 
            v-for="(project, index) in projects" 
            :key="project.name" 
            class="rouded-lg"
          >
            <div v-if="index === 1" class=" w-[450px] h-[600px] rounded-lg">
              <img :src="project.image" :alt="project.name" class="w-full h-auto rounded-lg" />
              <p class="project-name text-lg font-bold my-5">{{ project.name }}</p>
              <p class="project-description text-justify text-md text-gray-400 mb-4">{{ project.description }}</p>
              <a :href="project.link" target="_blank" class="project-link flex justify-center text-blue-500 hover:underline mt-10">Ver Projeto</a>
            </div>
            <div v-else class="project-card  w-[350px] h-[480px]">
              <img :src="project.image" :alt="project.name" class="w-full h-auto mb-4 rounded-lg opacity-50" />
              <p class="project-name text-lg font-bold mb-2 opacity-50">{{ project.name }}</p>
              <p class="project-description text-justify text-sm text-gray-600 mb-4 opacity-50">{{ project.description }}</p>
              <a :href="project.link" target="_blank" class="project-link flex justify-center text-blue-500 hover:underline opacity-50">Ver Projeto</a>
            </div>
        </div>
      </div>

      <button 
        @click="next" 
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full shadow-md hover:bg-gray-500"
      >
        &#8594;
      </button>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  transition: transform 0.3s ease, z-index 0.3s ease;
}

/* .project-card.scale-110 {
:class="{ 'scale-110 z-10 bg-red-200 w-[400px] h-[600px]': index === 1 }"
  transform: scale(1.2);
  z-index: 10;
} */
</style>