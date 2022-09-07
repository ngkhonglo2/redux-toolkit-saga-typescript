import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from 'connected-react-router';
import { AuthState } from "features/auth/authType";
import { history } from "utils";
import authReducer from '../features/auth/authSlice';
import dashboardReducer from '../redux/dashboard/slice';
import { DashboardState } from "./dashboard/type";
import studentReducer from "./student/slice";
import { StudentState } from "./student/type";
import cityReducer from "./city/slice"
import { CityState } from "./city/type";
export interface ApplicationState {
  authReducer: AuthState
  dashboardReducer: DashboardState
  studentReducer: StudentState
  cityReducer: CityState
}

const rootReducer = combineReducers({
  router: connectRouter(history),
  authReducer,
  dashboardReducer,
  studentReducer,
  cityReducer,
})

export default rootReducer