import React, { FC } from 'react';

import BookForm from './BookForm';

const NewBook : FC = () => {
    console.log('xd');

    return (
        <div className="has-text-centered">
            <div className="title">
                Add new book
            </div>

            <BookForm />
        </div>
    );
};

export default NewBook;
