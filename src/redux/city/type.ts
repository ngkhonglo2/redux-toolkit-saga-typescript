import { City } from "models";

export interface CityState {
    loading?: boolean
    list: City[]
}