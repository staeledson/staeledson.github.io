<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="flex flex-col items-start">
    <p class="text-[80px] font-bold mt-5">Olá, sou</p>
    <h3 class="text-[80px] font-bold mt-[-25px]">Stael Edson.</h3>
    <h3 class="destaque text-[50px] font-bold uppercase">Full Stack Developer</h3>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.destaque {
  color: #fbbf24;
}
.destaque:hover {
  transition: all 0.7s ease-in-out;
  color: #2825bd;
  transform: translateX(20px);
}
</style>
