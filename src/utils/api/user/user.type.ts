export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    role: "user" | "superadmin" | "admin";
    email_verified_at: string;
    auth_token: string;
    avatar: File;
    is_active: boolean;
    is_first_login: boolean;
    address: string;
    city: string;
    country: string;
    birthday: string;
    reset_password_code: string;
    reset_password_code_expired_at: string;
    is_new_registered: boolean;
}

export interface AuthState {
    user: User | any;
    token?: string | null;
    expires_in?: number | null;
}

export type UserFormData = Partial<
    Omit<
        User,
        | "reset_password_code_expired_at"
        | "reset_password_code"
        | "is_new_registered"
    >
>;

export type PaginationResults<T> = {
    count: number;
    no_read_count: number;
    next?: string | null;
    previous?: string | null;
    data: T[];
    limit?: number;
    nbPage: number;
    nbPages?: number;
    nextPage?: number;
    total?: number;
    notification?:any;
};

export type ResultType<T> = {
    success: boolean;
    message: string;
    is_consumed: boolean;
    data: T;
};