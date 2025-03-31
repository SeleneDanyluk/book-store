import './App.css'
import Books from './components/books/Books'
import Login from './components/login/Login'
import NewBook from './components/newBook/NewBook'
import booksInitial from './data/BooksInitials'
import { useState } from 'react'


function App() {

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
    <>
      {/* <h1>Books!</h1>
      <h2>Quiero leer libros!</h2>
      <NewBook onBookAdded={handleBookAdded}/>
      <Books
        books={books}
      /> */}
      <div>
        <Login />
      </div>
    </>
  )
}

export default App
