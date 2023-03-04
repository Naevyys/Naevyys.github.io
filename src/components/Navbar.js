import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "../stylesheets/Global.css";

function Navigation(props) {

    const history = useHistory();

    return (
        <Navbar variant="dark" className="navbar-inverse navbar-expand-sm navColor" fixed="top" expand="sm">
            <Container>
                <Navbar.Brand onClick={ () => {history.push("/")} }>Iris Kremer</Navbar.Brand>
                <Navbar.Toggle aria-controls="navigation" />
                <Navbar.Collapse id="navigation">
                    <Nav activeKey={props.active}>
                        <Nav.Link eventKey="aboutme" onClick={ () => {history.push("/aboutme")} }>About me</Nav.Link>
                        <NavDropdown title="Projects" eventKey="projects">
                            <NavDropdown.Item onClick={ () => {history.push("/projects")} }>Introduction</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={ () => {history.push("/projects#BSP6")} }>BSP6</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => {history.push("/projects#BSP5")} }>BSP5</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => {history.push("/projects#BSP3")} }>BSP3</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => {history.push("/projects#BSP2")} }>BSP2</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => {history.push("/projects#BSP1")} }>BSP1</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Links" eventkey="links">
                            <NavDropdown.Item href="https://github.com/Naevyys" target="_blank"><i className="fa fa-github icon"></i> GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/iris-kremer-5566041a4/" target="_blank"><i className="fa fa-linkedin-square icon"></i> LinkedIn</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;