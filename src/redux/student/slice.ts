import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListParams, ListResponse, Student } from "models";
import { RootState } from "redux/store";
import { StudentState } from "./type";

const initialState: StudentState = {
  loading: false,
  list: [],
  filter: {
    _page: 1,
    _limit: 15,
  },
  pagination: {
    _page: 1,
    _limit: 15,
    _totalRows: 15,
  },
}

const studentSlice = createSlice({
  name: 'studentReducer',
  initialState,
  reducers: {
    fetchStudentList(state, action: PayloadAction<ListParams>) {
      state.loading = true
    },
    fetchStudentListSuccess(state, action: PayloadAction<ListResponse<Student>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchStudentListFail(state) {
      state.loading = false
    },
    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload
    },
    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  }
})

export const {
  fetchStudentList,
  fetchStudentListSuccess,
  fetchStudentListFail,
  setFilter,
  setFilterWithDebounce,
} = studentSlice.actions

export const selectStudentList = (state: RootState) => state.studentReducer.list
export const selectStudentLoading = (state: RootState) => state.studentReducer.loading
export const selectStudentFilter = (state: RootState) => state.studentReducer.filter
export const selectStudentPagination = (state: RootState) => state.studentReducer.pagination

export default studentSlice.reducer