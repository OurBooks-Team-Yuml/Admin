import { gql } from 'apollo-boost';

export const GET_ALL_BOOKS = gql`{
    books {
        id,
        name,
        authorsId {
            id,
            fullName
        },
        imagePath,
    }
}`;
