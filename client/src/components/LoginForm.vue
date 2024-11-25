<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';


const email = ref<string|null>(null);
const password = ref<string|null>(null);
const store = useAuthStore();

</script>

<template>
  <div class="">
    <input
        v-model="email"
        type="email"
        placeholder="Email"
    />
    <input
        v-model="password"
        type="password"
        placeholder="Пароль"
    />
    <button
        @click="store.login(email, password)"
    >
      Логин
    </button>
    <button
        @click="store.registration(email, password)"
    >
      Регистрация
    </button>
  </div>
</template>

<style scoped>

</style>
