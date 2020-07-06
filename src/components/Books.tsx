import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useQuery } from '@apollo/react-hooks';

import { showLoader } from '../store/actions';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { Author, Book } from '../graphql/schemas';

const Books : FC = () => {
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(GET_ALL_BOOKS);

    if (loading) {
        dispatch(showLoader);
    }

    if (error) {
        // TODO SHOW ERROR TO USER.
        console.log(error);
    }

    return (
        <div>
            {data !== undefined && (
                <table className="table is-stripped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Test</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Authors</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.books.map((book: Book) => (
                            <tr key={book.id}>
                                <td><img src={book.imagePath} /></td>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>
                                    {book.authorsId.map((author: Author) => (
                                        <span key={author.id}>
                                            {author.fullName}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Books;
