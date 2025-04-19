<script setup>
    import { ref } from "vue";

    const name = ref("");
    const email = ref("");
    const message = ref("");
    const whatsappMessage = ref("");

    const handleSubmit = () => {
      const mailtoLink = `mailto:edsonstael@gmail.com?subject=Contato de ${name.value}&body=${encodeURIComponent(
        `Email: ${email.value}\n\nMensagem:\n${message.value}`
      )}`;
      window.location.href = mailtoLink;

      const whatsappLink = `https://wa.me/5585992641804?text=${encodeURIComponent(
        `Nome: ${name.value}\nEmail: ${email.value}\nMensagem: ${message.value}`
      )}`;
      window.open(whatsappLink, "_blank");
    };

    const submitWppMessage = (message) => {
      const whatsappLink = `https://wa.me/5585992641804?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
    };
    </script>

<template>
  <div class="flex flex-col">
    <div class="">
      <p class="text-[60px]">Contatos</p>
    </div>
    <div class="flex justify-center p-5 ">
      <div class="w-1/2 p-4 ">
        <p class="text-[20px]">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
            alt="Email"
            class="w-7 h-7 inline-block mr-2 mb-2"
          />
          WhatsApp:
        </p>
        <textarea
          v-model="whatsappMessage"
          placeholder="Digite uma mensagem..."
          class="w-full min-h-[150px] border-gray-300 bg-gradient-to-tr from-gray-400 to-gray-500 rounded-2xl p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
          @keypress.enter.prevent="submitWppMessage(whatsappMessage)"
        ></textarea>
      </div>
      <div class="w-1/2 p-4">
        <p class="text-[20px]">
          <img
            src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
            alt="Email"
            class="w-7 h-7 inline-block mr-2 mb-2"
          />
          Email:
        </p>
        <form class="space-y-4 bg-gradient-to-tr from-gray-400  to-gray-500 rounded-2xl w-full p-4" @submit.prevent="handleSubmit">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="name"
              v-model="name"
              class="mt-1 block w-full rounded-md border-gray-300 bg-gray-500 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Seu nome"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              v-mask="email"
              class="mt-1 block w-full rounded-md border-gray-300 bg-gray-500 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Seu email"
              required
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea
              id="message"
              v-model="message"
              minlength="30"
              rows="4"
              class="mt-1 block w-full rounded-md bg-gray-500 p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Sua mensagem"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>