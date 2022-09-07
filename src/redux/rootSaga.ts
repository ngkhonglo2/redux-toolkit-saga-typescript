import * as SagaAuth from 'features/auth/authSaga'
import { all, fork } from 'redux-saga/effects'
import * as SagaDashboard from './dashboard/sagas'
import * as SagaStudent from './student/sagas'
import * as SagaCity from './city/sagas'

export default function* rootSaga() {
  yield all([
    ...Object.values(SagaAuth),
    ...Object.values(SagaDashboard),
    ...Object.values(SagaStudent),
    ...Object.values(SagaCity)
  ].map(fork))
}