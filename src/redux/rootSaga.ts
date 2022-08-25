import { all, fork } from 'redux-saga/effects'
import * as SagaAuth from 'features/auth/authSaga'

export default function* rootSaga() {
  yield all([
    ...Object.values(SagaAuth)
  ].map(fork))
}