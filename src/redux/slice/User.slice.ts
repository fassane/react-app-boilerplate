import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../utils/api/user/user.type";
import { AppStorage } from "../../utils/storage";

const initialState = AppStorage.getItem<AuthState>("user", {
    user: undefined,
    token: undefined,
    expires_in: undefined,
});
export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        onSetUser: (state, action: PayloadAction<AuthState["user"]>) => {
            state.user = action.payload;
            AppStorage.setItem("user", state);
        },
        onSetToken: (state, action: PayloadAction<AuthState["token"]>) => {
            state.token = action.payload;
            AppStorage.setItem("user", state);
        },
        onSetExpiredTime: (
            state,
            action: PayloadAction<AuthState["expires_in"]>
        ) => {
            state.expires_in = action.payload;
            AppStorage.setItem("user", state);
        },
        onSetUserToken: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.expires_in = action.payload.expires_in;
            AppStorage.setItem("user", state);
        },
        onlogout: (state) => {
            state.user = null;
            state.token = null;
            state.expires_in = null;
            AppStorage.setItem("user", state);
        },
    },
});

export const {
    onSetUser,
    onSetUserToken,
    onSetToken,
    onlogout,
    onSetExpiredTime,
} = UserSlice.actions;
export default UserSlice.reducer;
