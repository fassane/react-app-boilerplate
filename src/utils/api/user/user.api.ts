import { 
    createApi, 
    fetchBaseQuery 
} from "@reduxjs/toolkit/query/react";
import { AppStorage } from "../../storage";
import { AuthState, PaginationResults, ResultType, User, UserFormData } from "./user.type";
import { ApiBaseUrl } from "../../http";


export const prepareHeaders = (
    headers: Headers,
    { getState }: { getState: any }
) => {
    const token =
        (getState() as { user: AuthState }).user.token ??
        AppStorage.getItem<AuthState>("user")?.token;
    if (token) {
        headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
};



export const UserApi = createApi({
    reducerPath: "userApi",
    tagTypes: [
        "user",
        "userList",
        "userById",
        "adminsList",
    ],
    baseQuery: fetchBaseQuery({
        baseUrl: `${ApiBaseUrl}`,
        prepareHeaders
    }),
    endpoints: (builder) => ({
        me: builder.query<User, void>({
            providesTags: ["user"],
            transformResponse: ({ data }) => data,
            query: () => {
                return "me/";
            },
        }),
        getUsersList: builder.query<PaginationResults<User>, void>({
            query: () => `users/`,
            providesTags: ["userList"],
        }),
        changeUserAvatar: builder.mutation<
            ResultType<User>,
            { data: UserFormData | FormData; id: number }
        >({
            query: ({ id, data }) => ({
                url: `change_user_avatar/${id}`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),
    })
});

export const {
    useMeQuery,
    useGetUsersListQuery,
    useChangeUserAvatarMutation,
} = UserApi;