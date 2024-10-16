import { useState } from "react";
import Book from "./Book";
import data from './data';

const BookList = () => {
    const [books, setBooks] = useState(data);
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder="Zoek een titel op"
                    onChange={handleChange}
                    value={searchInput}
                    name="search"
                />
            </div>
            <div className="books">
                {filteredBooks.map((book) => (
                    <Book key={book.title} title={book.title} image={book.image} author={book.author} />
                ))}
            </div>
        </>
    );
};
//sigma

export default BookList;