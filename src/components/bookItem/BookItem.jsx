import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import DeleteModal from "../../ui/modal/DeleteModal";

const BookItem = ({ id, bookTitle, author, rating, pages, imageUrl, onDeleteBook }) => {

    const [modal, setModal] = useState({ show: false, title: "", bookId: null });

    const handleDeleteFromModal = () => {
        onDeleteBook(modal.bookId);
        setModal({ show: false, title: "", bookId: null });
    };

    const handleHideModal = () => {
        setModal({ show: false, title: "", bookId: null });
    };

    const handleClick = () => {
        setModal({ show: true, title: bookTitle, bookId: id });
    };

    return (
        <div>
            <DeleteModal
                headerText="Eliminar libro"
                onHide={handleHideModal}
                onDelete={handleDeleteFromModal}
                entity={modal.title}
                show={modal.show}
            />
            <Card style={{ width: "22rem" }}>
                <Card.Img
                    height={400}
                    variant="top"
                    src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
                />
                <Card.Body> 
                    <Card.Title>{bookTitle}</Card.Title>
                    <Card.Subtitle>{author}</Card.Subtitle>
                    <div>{rating} estrellas</div>
                    <p>{pages} páginas</p>
                    <Button onClick={handleClick} variant="danger">Eliminar libro</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookItem;
