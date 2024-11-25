<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
</script>

<template>
  <Header/>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
