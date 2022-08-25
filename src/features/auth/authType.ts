export interface LoginPayload {
    username: string
    password: string
}

export interface IUser {
    id: number | string
    name: string
}

export interface IError {
    error: boolean
}

export interface AuthState {
    isLoggedIn: boolean
    logging?: boolean
    currentUser?: IUser
    error: boolean
}