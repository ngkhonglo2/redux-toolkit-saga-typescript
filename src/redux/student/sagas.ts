import { PayloadAction } from "@reduxjs/toolkit";
import studentApi from "api/studentApi";
import { ListParams, ListResponse, Student } from "models";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
import * as slice from "./slice";

function* fetchStudentListSaga(action: PayloadAction<ListParams>) {
  try {
    const resposive: ListResponse<Student> = yield call(studentApi.getAll, action.payload)
    yield put(slice.fetchStudentListSuccess(resposive))
  } catch (error) {
    console.log('Failed to fetch student list', error);
    yield put(slice.fetchStudentListFail());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  console.log(action.payload);
  yield put(slice.setFilter(action.payload))
}

export default function* studentSaga() {
  yield takeLatest(slice.fetchStudentList.type, fetchStudentListSaga)
  yield debounce(500, slice.setFilterWithDebounce.type, handleSearchDebounce)
}