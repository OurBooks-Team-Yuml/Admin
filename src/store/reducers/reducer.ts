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

            return draft;

        default:
            return draft;
    }
}, initialState);

export default app;
