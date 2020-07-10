import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';

import configureStore from '../store';

const { store } = configureStore();

const uri = 'http://localhost:8001/books/secured/';
const httpLink = createUploadLink({ uri });

const authorizationMiddleware = new ApolloLink((operation, forward) => {
    const state = store.getState();
    const { token } = state.app;

    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : '',
        },
    });

    return forward(operation);
});

const link = authorizationMiddleware.concat(httpLink);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;
