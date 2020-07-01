import { User } from '../state';

export const LOGIN = 'LOGIN';

export interface LoginAction {
    type: typeof LOGIN
    user?: User
    token?: string
}

export type Actions = LoginAction;
