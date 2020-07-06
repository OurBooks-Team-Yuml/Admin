import ApolloClient from 'apollo-boost';

import configureStore from '../store';

const { store } = configureStore();

const client = new ApolloClient({
    uri: 'http://localhost:8000/books/secured/',
    request: (operation) => {
        const state = store.getState();
        const { token } = state.app;

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : '',
            },
        });
    },
});

export default client;
