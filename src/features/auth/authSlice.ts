import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { AuthState, IError, IUser, LoginPayload } from "./authType";

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  error: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<IUser>) {
      state.logging = false
      state.isLoggedIn = true
      state.currentUser = action.payload
    },
    loginFail(state, action: PayloadAction<IError>) {
      state.logging = false
      state.error = action.payload.error
    },

    logout(state) {
      state.isLoggedIn = false
      state.currentUser = undefined
    },
  }
})

// actions
export const {
  login,
  loginSuccess,
  loginFail,
  logout,
} = authSlice.actions
// selectors

export const selectAuth = (state: RootState) => state.authReducer
// reducer

export default authSlice.reducer