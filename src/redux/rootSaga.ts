import * as SagaAuth from 'features/auth/authSaga'
import { all, fork } from 'redux-saga/effects'
import * as SagaDashboard from './dashboard/sagas'

export default function* rootSaga() {
  yield all([
    ...Object.values(SagaAuth),
    ...Object.values(SagaDashboard),
  ].map(fork))
}