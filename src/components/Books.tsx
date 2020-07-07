import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

import { showLoader, hideLoader } from '../store/actions';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { Author, Book } from '../graphql/schemas';

import { Match } from '../types';

interface BooksParams {
    page: string
}

interface MatchWithParams extends Match {
    params: BooksParams
}

interface Props {
    match: MatchWithParams
}

const Books : FC<Props> = (props) => {
    const page = parseInt(props?.match?.params.page, 10);
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(GET_ALL_BOOKS(page));
    const { data: nextPage } = useQuery(GET_ALL_BOOKS(page + 1));

    useEffect(() => {
        if (loading) {
            dispatch(showLoader());
        } else {
            dispatch(hideLoader());
        }
    }, [dispatch, loading]);

    return (
        <div>
            <div className="has-text-centered">
                {error && (
                    <div className="notification is-danger is-light">
                        <button className="delete" type="button">x</button>
                        {error.message}
                    </div>
                )}
            </div>

            {(data !== undefined && nextPage !== undefined) && (
                <div>
                    <table className="table is-stripped is-fullwidth">
                        <thead>
                            <tr>
                                <th>Image</th>
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
                                        {book.authors.map((author: Author) => (
                                            <span key={author.id}>
                                                {author.fullName}
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <nav className="pagination" role="navigation" aria-label="pagination">
                        {page === 1 ? (
                            <Link
                                className="pagination-previous disabled"
                                to="/book-list/1"
                            >
                                Previous
                            </Link>
                        ) : (
                            <Link
                                className="pagination-previous"
                                to={`/book-list/${page - 1}`}
                            >
                                Previous
                            </Link>
                        )}

                        {!nextPage.books.length ? (
                            <Link
                                className="pagination-next disabled"
                                to={`/book-list/${page + 1}`}
                            >
                                Next page
                            </Link>
                        ) : (
                            <Link
                                className="pagination-next"
                                to={`/book-list/${page + 1}`}
                            >
                                Next page
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Books;
