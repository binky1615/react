import Book from "./Book";
import { useState } from "react";

const BookList = () => {

    const [books, setBooks] = useState([
        {
            image: "afbeelding 1",
            title: "boek 1",
            author: "kiwi"
        },
        {
            image: "afbeelding 2",
            title: "boek 2",
            author: "binky"
        }
    ])

    return (
        <>
            {
                books.map((book) => (
                    <Book
                        title={book.title}
                        image={book.image}
                        author={book.author}
                    />
                ))
            }
        </>
    );
}

export default BookList;