import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:8001/books/authorized/',
});

export default client;
