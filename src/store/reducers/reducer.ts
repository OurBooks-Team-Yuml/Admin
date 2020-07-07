import produce, { Draft } from 'immer';

import * as types from '../actions/actionTypes';

import initialState, { SystemState } from '../state';

const app = produce((
    draft: Draft<SystemState>,
    action: types.Actions,
) => {
    switch (action.type) {
        case types.LOGIN:
            draft.user = action.user;
            draft.token = action.token;
            draft.isAuthenticated = true;

            return draft;

        case types.LOGOUT:
            draft.user = null;
            draft.token = null;
            draft.isAuthenticated = false;

            return draft;

        case types.SHOW_LOADER:
            draft.isFetching = true;
            return draft;

        case types.HIDE_LOADER:
            draft.isFetching = false;
            return draft;

        default:
            return draft;
    }
}, initialState);

export default app;
