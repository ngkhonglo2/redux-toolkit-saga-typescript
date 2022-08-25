import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload } from './authType';
import { login, loginSuccess, loginFail, logout } from './authSlice'
import { delay, put, takeLatest } from 'redux-saga/effects';

function* loginSaga(actions: PayloadAction<LoginPayload>) {
  try {
    yield delay(1000)
    localStorage.setItem('access_token', 'fake_token')
    yield put(loginSuccess({
      id: 1,
      name: 'phongnt',
    }))
  } catch (error) {
    yield put(loginFail({ error: true }))
  }
}

export function* watchLoginSaga() {
  yield takeLatest(login.type, loginSaga)
}

function* logoutSaga() {
  yield delay(500)
  localStorage.removeItem('access_token')
}

export function* watchLogoutSaga() {
  yield takeLatest(logout.type, logoutSaga)
}