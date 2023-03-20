import { useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Logout from './Logout';

function Navigation(props) {
  const [open, setOpen] = useState(true)

  const handleClick = (link) => {
    setOpen(false);
    props.onClick(link);
  }

  return (
    <Navbar expanded={open} bg="light" expand={false} className="mb-3" >
      <Container fluid>
        <Navbar.Brand href="#">SureChef</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setOpen(true)}/>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton onClick={() => setOpen(false)}>
            <Offcanvas.Title id="offcanvasNavbarLabel">SureChef</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Button onClick={() => handleClick("mykitchen")}>My Kitchen</Button>
              <Button onClick={() => handleClick("groceryList")}>Grocery List</Button>
              <Button onClick={() => handleClick("recipe")}>Recipes</Button>
              <Button onClick={() => handleClick("dashboard")}>Dashboard</Button>
              <Logout />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;

