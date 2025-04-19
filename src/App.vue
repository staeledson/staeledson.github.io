<script setup>
import AboutMe from "./components/AboutMe.vue";
import Contacts from "./components/Contacts.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import MyProjects from "./components/MyProjects.vue";
import NavBar from "./components/NavBar.vue";
import Skills from "./components/Skills.vue";
</script>

<template>
  <div class="flex flex-col h-[2000px]">
    <NavBar class="bg-gray-950" />
    <Home id="home" class="mt-16 w-[85%] mx-auto"/>
    <AboutMe id="about_me" class="mt-14 w-[60%] flex text-start justify-end ml-[35%]"/>
    <Skills id="skills" class="mt-36 w-[85%] flex text-start justify-start mx-auto"/>
    <MyProjects id="projects" class="mt-36 w-[85%] flex text-start justify-start mx-auto"/>
    <Contacts id="contacts" class="mt-36 w-[85%] flex text-start justify-start mx-auto"/>
    <Footer id="footer" class="mt-28 w-[85%] flex text-start justify-start mx-auto"/>
  </div>
</template>

<style scoped>

</style>
