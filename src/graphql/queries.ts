import { gql } from 'apollo-boost';

export const GET_ALL_BOOKS = (page: number = 1) => gql`{
    books (page: ${page}) {
        id,
        name,
        authors {
            id,
            fullName
        },
        imagePath,
    }
}`;
