import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunkMiddleware from 'redux-thunk';

import createRootReducer from './root_reducer';
import composeEnhancers from './utils';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = createRootReducer(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const routerMiddleware = createRouterMiddleware(history);

const middlewares = [routerMiddleware, thunkMiddleware];

export default function configureStore() {
    const store = createStore(
        persistedReducer,
        {},
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    const persistor = persistStore(store);

    return { store, persistor };
}
