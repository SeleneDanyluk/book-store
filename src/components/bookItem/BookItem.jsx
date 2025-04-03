import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import DeleteModal from "../../ui/modal/DeleteModal";

const BookItem = ({ id, bookTitle, author, description, price, imageUrl, onDeleteBook }) => {

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
            <Card style={{ width: "25rem", height: "40rem"}}>
                <Card.Img
                    height={400}
                    variant="top"
                    src={"https://bit.ly/47NylZk"}
                />
                <Card.Body style={{ height: "20rem"}}> 
                    <Card.Title>{bookTitle}</Card.Title>
                    <Card.Subtitle>{author}</Card.Subtitle>
                    <br/>
                    <p>${price}</p>
                    <div>Descripción</div>
                    <p>{description}</p>
                </Card.Body>
                <Button onClick={handleClick} variant="danger">Eliminar libro</Button>
            </Card>
        </div>
    );
};

export default BookItem;
