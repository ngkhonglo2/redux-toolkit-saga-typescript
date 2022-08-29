import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListParams, ListResponse, Student } from "models";
import { RootState } from "redux/store";
import { StudentState } from "./type";

const initialState: StudentState = {
  loading: false,
  list: [],
  filter: {},
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
  }
})

export const {
  fetchStudentList,
  fetchStudentListSuccess,
  fetchStudentListFail,
} = studentSlice.actions

export const selectStudentList = (state: RootState) => state.studentReducer.list
export const selectStudentPagination = (state: RootState) => state.studentReducer.pagination

export default studentSlice.reducer