import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import routes from "../routes";
import { BagPlus } from "react-bootstrap-icons";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">FashionFusion Boutique</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes.map((route, index) => {
              return (
                <Nav.Link key={index} as={Link} to={route.path}>
                  {route.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <div>
          <BagPlus color="white" />
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
