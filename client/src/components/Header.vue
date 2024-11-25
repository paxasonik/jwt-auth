<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import {computed} from "vue";

const store = useAuthStore();

const logout = () => {
  store.logout();
};

const isAuth = computed((): Boolean => {
  return store.isAuth;
})
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <RouterLink
          :to="{ name: 'login' }"
          class="link"
      >
        Login
      </RouterLink>
      <RouterLink
          :to="{ name: 'registration' }"
          class="link"
      >
        Registration
      </RouterLink>
      <RouterLink
          :to="{ name: 'users' }"
          class="link"
      >
        Users
      </RouterLink>
    </nav>

    <button v-if="isAuth" @click="logout">Выйти</button>
  </header>
</template>

<style scoped>
.header {
  padding: 20px;
  background-color: #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.header-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.link {
  text-decoration: none;
  color: #000000;
  opacity: 1;
  transition: opacity 0.3s;
}
.link:hover {
  opacity: .7;
}
</style>
