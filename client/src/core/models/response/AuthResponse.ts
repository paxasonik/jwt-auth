import type { IUser } from '@/core/models/IUser';

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
