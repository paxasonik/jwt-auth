<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore();

const handleLogin = (payload: { email: string | null; password: string | null }) => {
  store.login(payload.email, payload.password);
};
</script>

<template>
  <h1>Login</h1>
  <LoginForm
      textButton="Войти"
      @click="handleLogin"
  />
</template>

<style scoped>

</style>
