import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloProvider } from '@apollo/react-hooks';

import configureStore, { history } from './store';
import App from './App';
import client from './graphql';

const { store, persistor } = configureStore();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Auth0Provider
                    domain="dev-b5gefs5h.eu.auth0.com"
                    clientId="5g2iAThsMyeOlM4Lo09ogdvyH2w1B6Eg"
                    redirectUri={window.location.origin}
                >
                    <ApolloProvider client={client}>
                        <App history={history} />
                    </ApolloProvider>
                </Auth0Provider>
            </PersistGate>
        </Provider>
    </AppContainer>,
    document.getElementById('root'),
);
