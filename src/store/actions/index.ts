import * as types from './actionTypes';

import { User } from '../state';

export function login(user: User, token: string): types.LoginAction {
    return { type: types.LOGIN, user, token };
}
