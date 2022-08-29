import { ListParams, PaginationParams, Student } from "models"

export interface StudentState {
    loading: boolean
    list: Student[]
    filter: ListParams
    pagination: PaginationParams
}