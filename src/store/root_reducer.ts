import { combineReducers } from 'redux';
import { History } from 'history';

import { connectRouter } from 'connected-react-router';

import auth from './reducers/reducer';

const createRootReducer = (history: History) => combineReducers({
    auth,
    router: connectRouter(history),
});

export default createRootReducer;

export type RootReducerType = ReturnType<ReturnType<typeof createRootReducer>>;
