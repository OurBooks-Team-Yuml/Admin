import React, {
    ChangeEvent,
    FormEvent,
    FC,
    useState,
} from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Multiselect } from 'multiselect-react-dropdown';

import DateField from '../DateField';
import FileField from '../FileField';
import TextField from '../TextField';

import {
    GET_ALL_AUTHORS,
    GET_ALL_CATEGORIES,
    CREATE_BOOK,
    GET_ALL_BOOKS,
} from '../../graphql/queries';

const BookForm : FC = () => {
    const { data: categoriesData } = useQuery(GET_ALL_CATEGORIES);
    const { data: authorsData } = useQuery(GET_ALL_AUTHORS);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishedDate, setpublishedDate] = useState('');
    const [publishingHouse, setPublishingHouse] = useState('');
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState(null);

    const [createBook, { error }] = useMutation(CREATE_BOOK);

    // TODO
    console.log(error);

    const onChangeName = React.useCallback(({ target: { value } }
    : ChangeEvent<HTMLInputElement>) => {
        setName(value);
    }, [setName]);

    const onChangeDescription = React.useCallback(({ target: { value } }
    : ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(value);
    }, [setDescription]);

    const onChangeHouse = React.useCallback(({ target: { value } }
    : ChangeEvent<HTMLInputElement>) => {
        setPublishingHouse(value);
    }, [setPublishingHouse]);

    const onChangeIsbn = React.useCallback(({ target: { value } }
    : ChangeEvent<HTMLInputElement>) => {
        setIsbn(value);
    }, [setIsbn]);

    const onSelectedCategories = React.useCallback((selectedList, _selectedItem) => {
        setCategories(selectedList);
    }, [setCategories]);

    const onSelectedAuthors = React.useCallback((selectedList, _selectedItem) => {
        setAuthors(selectedList);
    }, [setAuthors]);

    const onRemoveCategories = React.useCallback((selectedList, _selectedItem) => {
        setCategories(selectedList);
    }, [setCategories]);

    const onRemoveAuthors = React.useCallback((selectedList, _selectedItem) => {
        setAuthors(selectedList);
    }, [setAuthors]);

    const onFileChange = React.useCallback(({ target: { files: [file] } }
    : ChangeEvent<HTMLInputElement>) => {
        setImage(file);
    }, [setImage]);

    const onSubmit = React.useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createBook({
            variables: {
                imagePath: image,
                name,
                description,
                isbn,
                publishedDate,
                publishingHouse,
                authors: authors.map((author) => parseInt(author.id, 10)),
                categories: categories.map((category) => parseInt(category.id, 10)),
            },
            update(proxy, result) {
                const data: any = proxy.readQuery({
                    query: GET_ALL_BOOKS(1),
                });

                data.books.push(result.data.createBook);

                proxy.writeQuery({ query: GET_ALL_BOOKS(1), data: { ...data } });
            },
        });
    }, [
        image, name, description, isbn, publishedDate,
        publishingHouse, authors, categories, createBook,
    ]);

    return (
        <div>
            <form className="form" onSubmit={onSubmit} encType="multipart/form-data">
                <TextField
                    onChange={onChangeName}
                    stateValue={name}
                    label="Book name"
                />

                <div className="field">
                    <label className="label" htmlFor="description">Book description</label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            id="description"
                            value={description}
                            onChange={onChangeDescription}
                        />
                    </div>
                </div>

                <TextField
                    onChange={onChangeIsbn}
                    stateValue={isbn}
                    label="ISBN"
                />

                <TextField
                    onChange={onChangeHouse}
                    stateValue={publishingHouse}
                    label="Publishing house"
                />

                <DateField
                    label="Published date"
                    setDate={setpublishedDate}
                />

                <div className="field">
                    <div className="control">
                        <label className="label">Categories</label>
                        {categoriesData !== undefined ? (
                            <Multiselect
                                options={categoriesData.categories}
                                displayValue="name"
                                onSelect={onSelectedCategories}
                                onRemove={onRemoveCategories}
                                selectedValues={categories}
                            />
                        ) : (
                            <Multiselect />
                        )}
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label">Authors</label>
                        {authorsData !== undefined ? (
                            <Multiselect
                                options={authorsData.authors}
                                displayValue="fullName"
                                onSelect={onSelectedAuthors}
                                onRemove={onRemoveAuthors}
                                selectedValues={authors}
                            />
                        ) : (
                            <Multiselect />
                        )}
                    </div>
                </div>

                <FileField
                    onChange={onFileChange}
                    label="Choose a file…"
                />

                <input type="submit" className="button is-primary" value="Add new book" />
            </form>
        </div>
    );
};

export default BookForm;
