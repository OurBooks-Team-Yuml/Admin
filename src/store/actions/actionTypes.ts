import { User } from '../state';

export const LOGIN = 'LOGIN';

export const LOGOUT = 'LOGOUT';

export interface LoginAction {
    type: typeof LOGIN
    user?: User
    token?: string
}

export interface LogoutAction {
    type: typeof LOGOUT
}

export type Actions = LoginAction | LogoutAction;
