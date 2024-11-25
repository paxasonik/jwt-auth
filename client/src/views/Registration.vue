<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore();

const handleRegistration = (payload: { email: string | null; password: string | null }) => {
  store.registration(payload.email, payload.password);
};
</script>

<template>
  <h1>Registration</h1>
  <login-form
      text-button="Регистрация"
      @click="handleRegistration"
  />
</template>

<style scoped>

</style>
