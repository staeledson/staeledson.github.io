<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <section class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      About <span class="text-blue-500">Me</span>
    </h2>
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="w-full md:w-1/2">
        <div class="relative group">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
          ></div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQF4t8i8R8yqJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683294656978?e=1746057600&v=beta&t=H3n8q4q4q4q4q4q4q4q4q4q4q4q4q4q4q4q4q4q4q4q"
            alt="Stael Edson"
            class="relative rounded-lg shadow-2xl w-full max-w-md mx-auto transform transition duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
      <div
        class="w-full md:w-1/2 space-y-6 text-slate-300 text-lg leading-relaxed"
      >
        <p>
          Hello! I'm Stael Edson, a passionate Full Stack Developer based in
          Brazil. I enjoy creating things that live on the internet, whether
          that be websites, applications, or anything in between.
        </p>
        <p>
          My goal is to always build products that provide pixel-perfect,
          performant experiences. I'm currently focused on building accessible,
          human-centered products.
        </p>
        <div class="grid grid-cols-2 gap-4 pt-4">
          <div>
            <h3 class="font-bold text-white mb-2">Experience</h3>
            <p>2+ Years</p>
          </div>
          <div>
            <h3 class="font-bold text-white mb-2">Projects</h3>
            <p>10+ Completed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
