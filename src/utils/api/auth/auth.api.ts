import { 
    createApi, 
    fetchBaseQuery 
} from "@reduxjs/toolkit/query/react";
import { ApiBaseUrl } from "../../http";
import { prepareHeaders } from "../user/user.api";
import { AuthState } from "../user/user.type";
import { LoginFormData, LoginResult, RegisterFormData } from "./auth.type";


export const AuthApi = createApi({
    reducerPath: "auth",
    tagTypes: ["auth"],
    baseQuery: fetchBaseQuery({
        baseUrl: `${ApiBaseUrl}`,
        prepareHeaders
    }),
    endpoints: (builder) => ({
        // register user mutation
        registerUser: builder.mutation<
            AuthState["user"],
            RegisterFormData | FormData
        >({
            query: (data) => ({
                url: `auth/register/`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auth"],
        }),
        // login user mutation
        loginUser: builder.mutation<LoginResult, LoginFormData>({
            query: (data) => ({
                url: `auth/login/`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["auth"],
        }),
        // log out 
        logoutUser: builder.mutation<any, void>({
            query: () => ({
                url: "auth/logout/",
                method: "POST",
            }),
        }),
        
    }),
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useLogoutUserMutation
} = AuthApi