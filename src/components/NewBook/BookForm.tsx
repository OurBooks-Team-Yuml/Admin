import React, {
    ChangeEvent,
    FormEvent,
    FC,
    useEffect,
    useState,
} from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Multiselect } from 'multiselect-react-dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import bulmaCalendar from 'bulma-calendar';

import { GET_ALL_AUTHORS, GET_ALL_CATEGORIES, CREATE_BOOK } from '../../graphql/queries';

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

    const onDateChange = React.useCallback((date: string) => {
        setpublishedDate(date);
    }, [setpublishedDate]);

    const [createBook, { error }] = useMutation(CREATE_BOOK);

    console.log(error);

    useEffect(() => {
        const options = { dateFormat: 'YYYY-MM-DD' };
        const calendars = bulmaCalendar.attach('[type="date"]', options);

        calendars.forEach((calendar) => {
            calendar.on('select', (datepicker) => {
                const date = datepicker.data.date.start;

                const dateTimeFormat = new Intl.DateTimeFormat(
                    'en', { year: 'numeric', month: '2-digit', day: '2-digit' },
                );

                const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat
                    .formatToParts(date);

                onDateChange(`${year}-${month}-${day}`);
            });
        });
    }, [onDateChange]);

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

    const onFileChange = React.useCallback(({ target: { files } }
    : ChangeEvent<HTMLInputElement>) => {
        setImage(files[0]);
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
        });
    }, [
        image, name, description, isbn, publishedDate,
        publishingHouse, authors, categories, createBook,
    ]);

    return (
        <div>
            <form className="form" onSubmit={onSubmit} encType="multipart/form-data">
                <div className="field">
                    <label className="label" htmlFor="name">Book name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChangeName}
                        />
                    </div>
                </div>

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

                <div className="field">
                    <label className="label" htmlFor="isbn">ISBN</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            id="isbn"
                            value={isbn}
                            onChange={onChangeIsbn}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="house">Publishing house</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            id="house"
                            value={publishingHouse}
                            onChange={onChangeHouse}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="date">Published date</label>
                    <div className="control">
                        <input
                            className="input"
                            type="date"
                            id="date"
                        />
                    </div>
                </div>

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

                <div className="file">
                    <label className="file-label">
                        <input
                            className="file-input"
                            type="file"
                            name="resume"
                            onChange={onFileChange}
                        />
                        <span className="file-cta">
                            <span className="file-icon">
                                <FontAwesomeIcon icon={faUpload} />
                            </span>
                            <span className="file-label">
                                Choose a file…
                            </span>
                        </span>
                    </label>
                </div>

                <input type="submit" className="button is-primary" value="Add new book" />
            </form>
        </div>
    );
};

export default BookForm;
