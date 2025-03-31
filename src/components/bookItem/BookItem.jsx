import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const BookItem = ({ bookTitle, author, rating, pages, imageUrl }) => {

    const [newTitle, setNewTitle] = useState(bookTitle);

    const handleChangeTitle = () => {
        setNewTitle("Hola, cambiamos el titulo");
    }

    return (
        <Card style={{ width: "22rem" }}>
            <Card.Img
                height={400}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
            />
            <Card.Body> 
                <Card.Title>{newTitle}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{rating} estrellas</div>
                <p>{pages} páginas</p>
                <Button onClick={handleChangeTitle}>Actualizar título!</Button>
            </Card.Body>
        </Card>
    );
};

export default BookItem;