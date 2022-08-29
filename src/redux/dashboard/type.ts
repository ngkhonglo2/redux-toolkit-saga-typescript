import { Student } from "models"

export interface DashboardStatistics {
  maleCount: number
  femaleCount: number
  highMarkCount: number
  lowMarkCount: number
}

export interface RankingByCity {
  cityId?: string
  cityName?: string
  rankkingList: Student[]
}

export interface DashboardState {
  loading: boolean
  statistics: Partial<DashboardStatistics>
  highestStudentList: Partial<Student>[]
  lowestStudentList: Partial<Student>[]
  rankingByCityList: RankingByCity[]
}