import { combineReducers } from "@reduxjs/toolkit";
import { AuthState } from "features/auth/authType";
import authReducer from '../features/auth/authSlice';

export interface ApplicationState {
  authReducer: AuthState
}

const rootReducer = combineReducers({
  authReducer
})

export default rootReducer