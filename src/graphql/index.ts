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

/* const formFileDataMiddleware = new ApolloLink((operation, forward) => {
    console.log(operation);
    if (operation.variables.imagePath !== null) {
        operation.setContext({
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    return forward(operation);
}); */

const link = authorizationMiddleware.concat(httpLink);
/* const link = formFileDataMiddleware.concat(authLink); */

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;
