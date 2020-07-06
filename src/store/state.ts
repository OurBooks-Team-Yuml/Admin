export interface User {
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    locale: string
    name: string
    nickname: string
    picture: string
    sub: string
    updated_at: string
}

export interface SystemState {
    user?: User
    token?: string
    isAuthenticated: boolean
}

const initialState: SystemState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

export default initialState;
