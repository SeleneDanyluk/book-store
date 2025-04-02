import React from 'react'
import { useState } from 'react'
import booksInitial from '../data/BooksInitials'
import Books from '../components/books/Books'
import NewBook from '../components/newBook/NewBook'

const Dashboard = () => {
    const [books, setBooks] = useState(booksInitial);

    const handleBookAdded = (enteredBook) => {
        const newBook = {
            ...enteredBook,
            id: Math.random().toString(),
            bookRating: Array(enteredBook.bookRating).fill("*"),
        };

        setBooks((prevBooks) => {
            return [...prevBooks, newBook];
        });
    };
    return (
        <div>
            <h1>Books!</h1>
            <h2>Quiero leer libros!</h2>
            <NewBook onBookAdded={handleBookAdded} onDeletedBook={setBooks} />
            <Books
                books={books}
            />
        </div>
    )
}

export default Dashboard