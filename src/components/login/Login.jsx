import React from 'react'
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setErrors({ ...errors, email: false });
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: false });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`El email ingresado es: ${email} y el password es ${password}`);
        setEmail("");
        setPassword("");
        setErrors({ email: false, password: false });
    }

  return (
    <div className='container justify-content-center flex-wrap d-flex'>
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos/as!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            required
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            value={email} />
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            required
                            placeholder="Ingresar contraseña"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={12} className="d-flex justify-content-end ">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Login