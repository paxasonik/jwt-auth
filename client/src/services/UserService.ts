import $api from "@/core/http";
import type { AxiosResponse } from 'axios';
import type { IUser } from '@/core/models/IUser';

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}

