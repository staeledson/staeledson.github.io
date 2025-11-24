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
  <div class="flex flex-col min-h-screen bg-slate-900">
    <NavBar />
    <main
      class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24"
    >
      <Home id="home" class="pt-24" />
      <AboutMe id="about_me" />
      <Skills id="skills" />
      <MyProjects id="projects" />
      <Contacts id="contacts" />
    </main>
    <Footer id="footer" />
  </div>
</template>

<style scoped></style>
