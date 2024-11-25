<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import UserService from '@/services/UserService';
import type { IUser } from '@/core/models/IUser';

const store = useAuthStore();
const users = ref<IUser[]>([]);

onMounted(() => {
  if (localStorage.getItem('token')) { //TODO: add refreshToken validity check
    store.checkAuth();
  }
});

const getUsers = async () => {
  try {
    const response = await UserService.fetchUsers();
    users.value = response.data;
  } catch (e) {
    console.log(e);
  }
};

const email = computed((): string => {
  return store.user === null ? '' : store.user?.email;
})

const isActivated = computed((): boolean => {
  return store.user === null ? false : store.user.isActivated;
})

const isLoading = computed((): boolean => {
  return store.isLoading;
})

const isAuth = computed((): boolean => {
  return store.isAuth;
})
</script>

<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>

    <div v-else-if="!isAuth">
      <h1 >Пользователь не авторизован</h1>
    </div>

    <div v-else>
      <h1>Пользователь: {{ email }}</h1>
      <h2 v-if="isActivated">Аккаунт подтвержден по почте</h2>
      <h2 v-else>ПОДТВЕРДИТЕ АККАУНТ!!!!</h2>
      <button
          @click="getUsers"
      >
        Получить пользователей
      </button>
      <ul
          v-for="user in users"
          :key="user.email"
          class="list"
      >
        <li
            v-if="user.email"
            class="item"
        >
          {{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin-left: 0;
  padding-left: 0;
  margin-top: 20px;
}
.item {
  padding: 10px;
  background-color: #c1c1c1;
  border: 1px solid #000000;
  list-style: none;
}
</style>
