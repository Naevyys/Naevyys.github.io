import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "../stylesheets/Global.css";
import "../stylesheets/Welcome.css";
import introPic from "../images/introPic.svg";

function Welcome() {

  const history = useHistory();

  return (
    <Container>
      <Row className="h-100 justify-content-center">
        <Col lg="8" className="my-auto wrapperWelcome">
          <center>
            <h1>Iris Kremer</h1>
            <h3>Computer Science Graduate</h3>
            <p>
              <a href="https://github.com/Naevyys" target="_blank"><i className="fa fa-github bigIcon"></i></a>
              <a href="https://www.linkedin.com/in/iris-kremer-5566041a4/" target="_blank"><i className="fa fa-linkedin-square bigIcon"></i></a>
            </p>
            <div className="innerWrapper">
              <img src={introPic} className="img-fluid svg" alt="Woman working on her laptop."></img>
              <ButtonGroup className="buttonGroup">
                <Button variant="secondary" size="lg" className="button" onClick={ () => {history.push("/aboutme")} }>About me</Button>
                <Button variant="secondary" size="lg" className="button" onClick={ () => {history.push("/masterprojects")} }>Projects</Button>
              </ButtonGroup>
            </div>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;