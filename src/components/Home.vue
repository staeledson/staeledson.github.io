<script setup></script>

<template>
  <section
    class="flex flex-col items-center justify-center text-center min-h-[60vh]"
  >
    <div class="space-y-6">
      <h1
        class="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up"
      >
        Hi, I'm
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
          >Stael Edson</span
        >
      </h1>
      <p class="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
        Full Stack Developer specialized in building exceptional digital
        experiences.
      </p>
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
      >
        <a
          href="#projects"
          class="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/30"
        >
          View My Work
        </a>
        <a
          href="#contacts"
          class="px-8 py-3 text-lg font-medium text-slate-300 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
