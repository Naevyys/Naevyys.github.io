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
                        <Nav.Link eventKey="projects" onClick={ () => {history.push("/projects")} }>Bachelor Projects</Nav.Link>
                        <Nav.Link eventKey="ghlink" href="https://github.com/Naevyys" target="_blank"><i className="fa fa-github icon"></i> GitHub</Nav.Link>
                        <Nav.Link eventKey="linkedinlink" href="https://www.linkedin.com/in/iris-kremer-5566041a4/" target="_blank"><i className="fa fa-linkedin-square icon"></i> LinkedIn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;