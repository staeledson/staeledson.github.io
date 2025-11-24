<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);

const handleNavClick = (e, target) => {
  e.preventDefault();
  document.querySelector(target)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full shadow-md h-17 z-99"
    role="navigation"
    aria-label="Menu principal"
  >
    <div class="container mx-auto px-4 py-2 flex">
      <div class="w-2/12 flex items-center">
        <!-- <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-10 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Stael Edson
          </span> -->
      </div>
      <ul class="flex w-10/12 justify-center space-x-4 p-3">
        <li>
          <a
            href="#home"
            @click="handleNavClick($event, '#home')"
            class="item-list"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about_me"
            @click="handleNavClick($event, '#about_me')"
            class="item-list"
            >Sobre mim</a
          >
        </li>
        <li>
          <a
            href="#projects"
            @click="handleNavClick($event, '#projects')"
            class="item-list"
            >Projetos</a
          >
        </li>
        <li>
          <a
            href="#contacts"
            @click="handleNavClick($event, '#contacts')"
            class="item-list"
            >Contatos</a
          >
        </li>
      </ul>
      <div class="flex w-2/12 space-x-4 justify-end items-center">
        <a
          href="https://www.linkedin.com/in/stael-edson-a5a6a8202/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visite meu perfil no LinkedIn"
          class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-white"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
            alt="LinkedIn"
            class="w-8 h-8"
          />
        </a>
        <a
          href="https://github.com/staeledson"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visite meu perfil no GitHub"
          class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path
              d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
            ></path>
          </svg>
        </a>
        <a
          href="#contacts"
          @click="handleNavClick($event, '#contacts')"
          aria-label="Ir para seção de contatos"
          class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
            alt="Contatos"
            class="w-8 h-8"
          />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.item-list {
  list-style: none;
  padding: 0;
  color: aliceblue;
  text-decoration: none;
  font-size: 1.2rem;
  padding-left: 1rem;
}

.item-list:hover {
  color: #fbbf24;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  text-decoration: wavy;
}
</style>
