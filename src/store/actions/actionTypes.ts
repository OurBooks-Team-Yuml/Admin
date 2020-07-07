import { User } from '../state';

export const LOGIN = 'LOGIN';

export const LOGOUT = 'LOGOUT';

export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export interface LoginAction {
    type: typeof LOGIN
    user?: User
    token?: string
}

export interface LogoutAction {
    type: typeof LOGOUT
}

export interface ShowLoader {
    type: typeof SHOW_LOADER
}

export interface HideLoader {
    type: typeof HIDE_LOADER
}

export type Actions = LoginAction | LogoutAction
| ShowLoader | HideLoader;
