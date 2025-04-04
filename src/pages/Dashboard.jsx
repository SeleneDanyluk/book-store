import React, { useContext } from 'react'
import { useState } from 'react'
import booksInitial from '../data/BooksInitials'
import Books from '../components/books/Books'
import { Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router'


const Dashboard = () => {

    const navigate = useNavigate();
    

    const handleNavigateToBooks = () => {
        navigate("/libros")
    };

    return (
        <div>
            <h1>Books!</h1>
            <h2>Libros disponibles</h2>
            <h2>Descubri todos los libros disponibles</h2>
            <Button onClick={handleNavigateToBooks}>Libros</Button>
        </div>
    )
}

export default Dashboard