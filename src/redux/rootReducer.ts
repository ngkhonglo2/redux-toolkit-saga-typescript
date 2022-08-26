import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from 'connected-react-router';
import { AuthState } from "features/auth/authType";
import { history } from "utils";
import authReducer from '../features/auth/authSlice';
export interface ApplicationState {
  authReducer: AuthState
}

const rootReducer = combineReducers({
  router: connectRouter(history),
  authReducer,
})

export default rootReducer