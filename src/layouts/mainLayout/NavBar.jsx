import React, {useContext} from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import { UserContext } from '../../context/UserContext'

const NavBar = () => {
    const { handleLogOut, isLoggedIn, userLoged } = useContext(UserContext);
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">La Librería del Banco!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/libros">Libros</Nav.Link>
                            {userLoged.role == "admin" && <Nav.Link as={Link} to="/agregar-libro">Agregar libro</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                    {isLoggedIn && <h4>Bienvenido/a {userLoged.name}</h4>}
                    {isLoggedIn && <Button onClick={handleLogOut}>Cerrar sesión</Button>}
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar