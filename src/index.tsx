import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore, { history } from './store';
import App from './App';

const { store, persistor } = configureStore();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App history={history} />
            </PersistGate>
        </Provider>
    </AppContainer>,
    document.getElementById('root'),
);
