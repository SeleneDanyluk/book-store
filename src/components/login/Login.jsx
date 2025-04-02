import React, { useRef } from 'react'
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

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
        if (!emailRef.current.value.length) {
            setErrors({ ...errors, email: true });
            alert("El email es requerido");
            emailRef.current.focus();
            return;
        }
        if (!password || password.length < 7) {
            setErrors({ ...errors, password: true });
            passwordRef.current.focus();
            return;
        }

        alert(`El email ingresado es: ${email} y el password es ${password}`);
        setEmail("");
        setPassword("");
        setErrors({ email: false, password: false });
    }

  return (
    <div className='justify-content-center w-50 justify-content-center mx-auto mt-5'>
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos/as!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            ref={emailRef}
                            required
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            value={email} 
                            className={errors.email  && " border border-danger"}
                            />
                            {errors.email && <p className="text-danger">El email es requerido</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            ref={passwordRef}
                            required
                            placeholder="Ingresar contraseña"
                            onChange={handlePasswordChange}
                            value={password}
                            className={errors.password  && " border border-danger"}
                        />
                        <div className='container'>{errors.password && <p className="text-danger">La contraseña debe tener al menos 7 caracteres</p>}</div>
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