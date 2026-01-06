import { User } from "../user/user.type";

export type LoginFormData = {
    email: string;
    password: string;
};

export type RegisterFormData = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export type LoginResult = {
    user: User;
    token: string | null;
    expires_in: number;
    is_active: boolean;
    last_login_infos: string;
    message: string;
    success: boolean;
    token_type: "bearer";
};

export type ForgetPasswordFormData = {
    email: string;
};

export type ResetPasswordFormData = {
    email: string;
    password_confirmation: string;
    reset_password_code: string;
    password: string;
};

export type ChangePasswordData = {
    current_password: string;
    password: string;
    password_confirmation: string;
    id: string;
};