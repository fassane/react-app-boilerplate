import {
    Middleware,
    configureStore,
} from "@reduxjs/toolkit";
import { AuthApi } from "../utils/api/auth/auth.api";
import { UserSlice, onlogout } from "./slice/User.slice";
import { UserApi } from "../utils/api/user/user.api";
import { Env, currentEnv } from "../utils/http";

const authMiddleware: Middleware = (store) => (next) => (action: any) => {
    if (
        action.type.endsWith("/rejected") &&
        action.payload?.originalStatus === 401
    ) {
        store.dispatch(onlogout());
    }
    return next(action);
};

const store = configureStore({
    reducer: {
        [UserSlice.name]: UserSlice.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [UserApi.reducerPath]: UserApi.reducer,
        
    },
    devTools: Env === currentEnv,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(authMiddleware)
        .concat(AuthApi.middleware)
        .concat(UserApi.middleware)
            
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
