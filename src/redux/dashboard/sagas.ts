import cityApi from "api/cityApi";
import studentApi from "api/studentApi";
import { City, ListResponse, Student } from "models";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchData, fetchDataFail, fetchDataSuccess, setHighestStudentList, setLowestStundentList, setRankingByCityList, setStatistics
} from './slice';
import { RankingByCity } from "./type";

function* fetchStatisticsSaga() {
  const reponseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'male' }),
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'female' }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
  ])
  const statisticList = reponseList.map((x) => x.pagination._totalRows)
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;
  yield put(
    setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount })
  )
}

function* fetchHighestStundentList() {
  const { data }: ListResponse<Student> = yield call(
    studentApi.getAll, {
    _limit: 5,
    _page: 1,
    _order: 'desc',
    _sort: 'mark',
  }
  )
  yield put(setHighestStudentList(data))
}

function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(
    studentApi.getAll, {
    _limit: 5,
    _page: 1,
    _order: 'asc',
    _sort: 'mark',
  }
  )
  yield put(setLowestStundentList(data))
}

function* fetchRankingByCityList() {
  const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll)

  const callList = cityList.map((x) =>
    call(studentApi.getAll, {
      _limit: 5,
      _page: 1,
      _order: 'desc',
      _sort: 'mark',
      city: x.code
    })
  )

  const responseList: Array<ListResponse<Student>> = yield all(callList)
  const rankingByCitylist: Array<RankingByCity> = responseList.map((x, idx) => ({
    cityId: cityList[idx].code,
    cityName: cityList[idx].name,
    rankkingList: x.data,
  }))
// Update state
  yield put(setRankingByCityList(rankingByCitylist))
}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatisticsSaga),
      call(fetchHighestStundentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ])
    yield put(fetchDataSuccess())
  }
  catch (error) {
    console.log('Failed to fetch dashboard data', error);
    yield put(fetchDataFail())
  }
}

export default function* dashboardSaga() {
  yield takeLatest(fetchData.type, fetchDashboardData)
}