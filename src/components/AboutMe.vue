<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="flex flex-col">
    <p class="text-[20px] font-bold mt-28">Desenvolvedor Full Stack com sólida experiência na construção de aplicações web modernas, utilizando Laravel, Vue.js, React e PostgreSQL.</p>
    <p class="text-[16px] font-bold mt-5">Atuo em projetos reais com foco em performance, escalabilidade e código limpo.</p>
    <p class="text-[16px] font-bold mt-5">Conhecimento em metodologias ágeis (Scrum e Kanban), integração contínua e testes automatizados.</p>
    <p class="text-[16px] font-bold mt-5">Perfil proativo, colaborativo e focado na entrega de soluções eficientes.</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
