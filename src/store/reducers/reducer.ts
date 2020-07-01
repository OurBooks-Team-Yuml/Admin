import produce, { Draft } from 'immer';

import * as types from '../actions/actionTypes';

import initialState, { SystemState } from '../state';

const app = produce((
    draft: Draft<SystemState>,
    action: types.AppActions,
) => {
    switch (action.type) {
        default:
            return draft;
    }
}, initialState);

export default app;
