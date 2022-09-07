import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City, ListResponse } from "models";
import { RootState } from "redux/store";
import { CityState } from "./type";

const initialState: CityState = {
    loading: false,
    list: []
}

const citySlice = createSlice({
    name: 'cityReducer',
    initialState,
    reducers: {
        fetchCityList(state) {
            state.loading = true
        },
        fetchCityListSuccess(state, action: PayloadAction<ListResponse<City>>) {
            state.list = action.payload.data
            state.loading = false
        },
        fetchCityListFail(state) {
            state.loading = false
        },
    }
})

export const { fetchCityList, fetchCityListSuccess, fetchCityListFail } = citySlice.actions

export const selectCityList = (state: RootState) => state.cityReducer.list

export const selectCityMap = createSelector(selectCityList, (cityList) =>
    cityList.reduce((map: { [key: string]: City }, city) => {
        map[city.code] = city
        return map
    }, {}))

export const selectCityOptions = createSelector(selectCityList, (cityList) =>
    cityList.map((city) => ({
        label: city.name,
        value: city.code,
    }))
);


export default citySlice.reducer