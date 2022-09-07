import cityApi from "api/cityApi";
import { City, ListResponse } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCityList, fetchCityListSuccess, fetchCityListFail } from "./slice"

function* fetchCityListSaga() {
    try {
        const response: ListResponse<City> = yield call(cityApi.getAll)
        yield put(fetchCityListSuccess(response))
    } catch (error) {
        console.log('Failed to fetch city list', error);
        yield put(fetchCityListFail())
    }
}

export function* citySaga() {
    yield takeLatest(fetchCityList.type, fetchCityListSaga)
}