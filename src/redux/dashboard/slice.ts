import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "models";
import { RootState } from "redux/store";
import { DashboardState, DashboardStatistics, RankingByCity } from "./type";

const initialState: DashboardState = {
  loading: false,
  statistics: {},
  highestStudentList: [],
  lowestStudentList: [],
  rankingByCityList: [],
}

export const dashboardSlice = createSlice({
  name: 'dashboardSlice',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true
    },
    fetchDataSuccess(state) {
      state.loading = false
    },
    fetchDataFail(state) {
      state.loading = false
    },
    setStatistics(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload
    },
    setHighestStudentList(state, action: PayloadAction<Student[]>) {
      state.highestStudentList = action.payload
    },
    setLowestStundentList(state, action: PayloadAction<Student[]>) {
      state.lowestStudentList = action.payload
    },
    setRankingByCityList(state, action: PayloadAction<RankingByCity[]>) {
      state.rankingByCityList = action.payload
    }
  }
})

// action

export const {
  fetchData,
  fetchDataSuccess,
  fetchDataFail,
  setHighestStudentList,
  setLowestStundentList,
  setRankingByCityList,
  setStatistics,
} = dashboardSlice.actions

// select
export const selectDashboardLoading = (state: RootState) => state.dashboardReducer.loading
export const selectDashboardStatistics = (state: RootState) => state.dashboardReducer.statistics
export const selecthighestStundentList = (state: RootState) => state.dashboardReducer.highestStudentList
export const selectLowestStundentList = (state: RootState) => state.dashboardReducer.lowestStudentList
export const selectRankingByCityList = (state: RootState) => state.dashboardReducer.rankingByCityList
// reducer
export default dashboardSlice.reducer