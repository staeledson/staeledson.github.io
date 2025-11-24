<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="w-full py-8 text-center text-slate-500 text-sm border-t border-slate-800 mt-auto"
  >
    <p>&copy; {{ currentYear }} Stael Edson. All rights reserved.</p>
    <div class="flex justify-center gap-4 mt-4">
      <a href="#" class="hover:text-blue-400 transition-colors">GitHub</a>
      <a href="#" class="hover:text-blue-400 transition-colors">LinkedIn</a>
      <a href="#" class="hover:text-blue-400 transition-colors">Twitter</a>
    </div>
  </footer>
</template>

<style scoped></style>
