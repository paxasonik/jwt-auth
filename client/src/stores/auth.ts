import { ref } from 'vue';
import { defineStore } from 'pinia';
import AuthService from '@/services/AuthService';
import type { IUser } from '@/core/models/IUser';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser|null>(null);
  const isAuth = ref<boolean>(false);

  async function login(email: string|null, password: string|null) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      isAuth.value = true;
      user.value = response.data.user;
    } catch (e:any) {
      console.log(e.response?.data?.message);
    }
  }

  async function registration(email: string|null, password: string|null) {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      isAuth.value = true;
      user.value = response.data.user;
    } catch (e:any) {
      console.log(e.response?.data?.message);
    }
  }

  async function logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      isAuth.value = false;
      user.value = null;
    } catch (e:any) {
      console.log(e.response?.data?.message);
    }
  }

  return { user, isAuth, login, registration, logout }
})
