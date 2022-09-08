export interface Student {
    id?: string
    name: string
    age: number | string
    mark: number | string
    gender: 'male' | 'female'
    createdAt?: number
    updatedAt?: number
    city: string
}