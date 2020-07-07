import { combineReducers } from 'redux';
import { History } from 'history';

import { connectRouter } from 'connected-react-router';

import app from './reducers/reducer';

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    app,
});

export default createRootReducer;

export type RootReducerType = ReturnType<ReturnType<typeof createRootReducer>>;
