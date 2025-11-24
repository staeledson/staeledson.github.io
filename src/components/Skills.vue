<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);

const skills = [
  { name: "JavaScript", image: "/javascript.png" },
  { name: "VueJS", image: "/vue.png" },
  { name: "React", image: "/react.png" },
  { name: "Laravel", image: "/larevel.png" },
  { name: "PostgreSQL", image: "/postgresSQL.png" },
  { name: "PHP", image: "/php.png" },
  { name: "Python", image: "/python.png" },
];
</script>

<template>
  <div class="flex flex-col">
    <p class="text-[60px]">Skills</p>
    <div class="skills-container mt-24">
      <div
        class="skill-card bg-gradient-to-bl from-slate-500 to-slate-300"
        v-for="skill in skills"
        :key="skill.name"
      >
        <img :src="skill.image" :alt="skill.name" class="skill-image" />
        <p class="skill-name">{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #302e2e;
  border-radius: 8px;
  padding: 16px;
  width: 140px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* background-color: #ffffff72; */
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(251, 191, 36, 0.3);
}

.skill-image {
  width: 110px;
  height: 90px;
  margin-bottom: 8px;
}

.skill-name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
</style>
