import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import AuthService from '@/services/AuthService';
import type { IUser } from '@/core/models/IUser';
import type { AuthResponse } from '@/core/models/response/AuthResponse';
import { API_URL } from '@/core/http';
import { useRouter } from 'vue-router';


export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser|null>(null);
  const isAuth = ref<boolean>(false);
  const isLoading = ref<boolean>(false);
  const router = useRouter();

  async function login(email: string|null, password: string|null) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      isAuth.value = true;
      user.value = response.data.user;
      await router.push({ name: 'users' });
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
      await router.push({ name: 'users' });
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
      await router.push({ name: 'login' });
    } catch (e:any) {
      console.log(e.response?.data?.message);
    }
  }

  async function checkAuth() {
    isLoading.value = true;
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      isAuth.value = true;
      user.value = response.data.user;
    } catch (e:any) {
      console.log(e.response?.data?.message);
    } finally {
      isLoading.value = false;
    }
  }

  return { user, isAuth, isLoading, login, registration, logout, checkAuth }
})
