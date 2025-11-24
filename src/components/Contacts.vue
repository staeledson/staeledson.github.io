<script setup></script>

<template>
  <section class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
      Get In <span class="text-blue-500">Touch</span>
    </h2>
    <p class="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
      I'm currently looking for new opportunities. Whether you have a question
      or just want to say hi, I'll try my best to get back to you!
    </p>

    <div class="flex flex-col md:flex-row items-center justify-center gap-8">
      <a
        href="mailto:edsonstael@gmail.com"
        class="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 group"
      >
        <div
          class="p-3 bg-blue-500/10 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <div class="text-left">
          <p class="text-sm text-slate-400">Email Me</p>
          <p class="text-white font-medium">edsonstael@gmail.com</p>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/staeledson/"
        target="_blank"
        class="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 group"
      >
        <div
          class="p-3 bg-blue-500/10 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </div>
        <div class="text-left">
          <p class="text-sm text-slate-400">LinkedIn</p>
          <p class="text-white font-medium">Connect with me</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped></style>
