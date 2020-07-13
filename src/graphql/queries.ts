import gql from 'graphql-tag';

export const GET_ALL_BOOKS = (page: number = 1) => gql`{
    books(page: ${page}) {
        id,
        name,
        authors {
            id,
            fullName
        },
        imagePath,
    }
}`;

export const CREATE_BOOK = gql`
    mutation CreateBook($authors: [ID]!, $categories: [ID],
        $description: String!, $imagePath: Upload, $isbn: String, $name: String!,
        $publishedDate: Date, $publishingHouse: String, $relatedBookId: ID) {
        createBook(authors: $authors, categories: $categories, description: $description,
            imagePath: $imagePath, isbn: $isbn, name: $name, publishedDate: $publishedDate,
            publishingHouse: $publishingHouse, relatedBookId: $relatedBookId) {
            id,
            name,
            authors {
                id,
                fullName
            },
            imagePath,
        }
    }
`;

export const GET_ALL_CATEGORIES = gql`{
    categories {
        id,
        name
    }
}`;

export const GET_ALL_AUTHORS = gql`{
    authors {
        id,
        fullName
    }
}`;
