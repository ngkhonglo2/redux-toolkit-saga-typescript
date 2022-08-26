import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { login, loginFail, loginSuccess, logout } from './authSlice';
import { LoginPayload } from './authType';
import { push } from 'connected-react-router'

function* loginSaga(actions: PayloadAction<LoginPayload>) {
  console.log('aaaaa', actions.payload);
  try {
    yield delay(1000)
    localStorage.setItem('access_token', 'fake_token')
    yield put(loginSuccess({
      id: 1,
      name: 'phongnt',
    }))
    yield put(push('/admin'))
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