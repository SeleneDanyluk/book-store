import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { usePost } from "../../hooks/usePost";
import { errorToast, successToast } from "../../ui/toast/NotificationToast";

const NewBook = () => {
    const [PostData, loading, error] = usePost({ consulta: "Book" });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const bookData = {
            title: data.title,
            description: data.description,
            author: data.author,
            price: parseFloat(data.price),
            stock: parseInt(data.stock, 10),
            imageUrl: data.imageUrl,
        };

        try {
            await PostData(bookData);
            successToast("Libro agregado correctamente.");
            reset();
            navigate("/libros");
        } catch (error) {
            errorToast("Ocurrió un error al guardar el libro.");
        }
    };

    const handleBackToDashboard = () => {
        navigate("/");
    };

    return (
        <div className="container d-flex justify-content-center flex-wrap">
            <Card className="m-4 w-50" bg="success">
                <Card.Body>
                    <Form className="text-white" onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar título"
                                        {...register("title", { required: "El título es obligatorio" })}
                                    />
                                    {errors.title && <span className="text-warning">{errors.title.message}</span>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="author">
                                    <Form.Label>Autor</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar autor"
                                        {...register("author", { required: "El autor es obligatorio" })}
                                    />
                                    {errors.author && <span className="text-warning">{errors.author.message}</span>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Ingresar descripción"
                                {...register("description", { required: "La descripción es obligatoria" })}
                            />
                            {errors.description && <span className="text-warning">{errors.description.message}</span>}
                        </Form.Group>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="price">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="0.01"
                                        placeholder="Ingresar precio"
                                        min={0}
                                        {...register("price", {
                                            required: "El precio es obligatorio",
                                            min: { value: 0, message: "No puede ser negativo" },
                                        })}
                                    />
                                    {errors.price && <span className="text-warning">{errors.price.message}</span>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="stock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresar stock"
                                        min={0}
                                        {...register("stock", {
                                            required: "El stock es obligatorio",
                                            min: { value: 0, message: "No puede ser negativo" },
                                        })}
                                    />
                                    {errors.stock && <span className="text-warning">{errors.stock.message}</span>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar URL de la imagen"
                                {...register("imageUrl")}
                            />
                        </Form.Group>

                        <Row className="justify-content-end">
                            <Col md={4} className="d-flex flex-column justify-content-end align-items-end">
                                <Button variant="primary" type="submit">
                                    {loading ? "Agregando libro" : "Agregar libro"}
                                </Button>
                                <br />
                                <Button variant="secondary" onClick={handleBackToDashboard}>
                                    Volver
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewBook;
