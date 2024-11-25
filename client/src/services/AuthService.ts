import $api from '@/core/http';
import type { AxiosResponse } from 'axios';
import type { AuthResponse } from '@/core/models/response/AuthResponse';

export default class AuthService {
    static async login(email: string|null, password: string|null): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password});
    }

    static async registration(email: string|null, password: string|null): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password});
    }

    static async logout(): Promise<void> {
        return $api.post('/logout');
    }

}

