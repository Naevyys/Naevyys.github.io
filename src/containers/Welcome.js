import { useHistory } from "react-router-dom";
import { Wrapper, PageIntro, Section, Subsection } from "../components/Layout";
import { FlagContainer } from "../components/Elements";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";

import "../stylesheets/Global.css";
import "../stylesheets/Welcome.css";
import "../stylesheets/AboutMe.css";

import me from "../images/Me.jpg";
import french from "../images/logos/france.svg";
import german from "../images/logos/germany.svg";
import english from "../images/logos/united-kingdom.svg";
import React from "react";

function Welcome() {

    const history = useHistory();

    return (
        <Wrapper className="d-flex justify-content-center align-items-center">
        <Container className="d-flex justify-content-center align-items-center">
            <Row className="wrapperWelcome d-flex justify-content-center align-items-center">
                <Col md={6} className="my-auto">
                    <PageIntro>
                        <center>
                            <Row>
                                <h1>Iris Kremer</h1>
                                <h3>Data Science Engineer</h3>
                            </Row>
                            <Row className="rowPadding">
                                <div className="pictureContainer mx-auto">
                                    <img className="rounded-circle img-fluid" src={me} alt="Picture of me" />
                                </div>
                            </Row>
                        </center>
                    </PageIntro>
                </Col>
                <Col md={6} className="colPadding">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col lg={5}>
                            <Row className="d-flex justify-content-center align-items-center">
                                <center><p className="socialGroup">
                                <a href="https://github.com/Naevyys" target="_blank"><i className="fa fa-github bigIcon"></i></a>
                                <a href="https://www.linkedin.com/in/iris-kremer-5566041a4/" target="_blank"><i className="fa fa-linkedin-square bigIcon"></i></a>
                                </p></center>
                            </Row>
                        </Col>
                        <Col lg={7}>
                            <Row className="justify-content-center">
                                <FlagContainer src={french} level="C2" />
                                <FlagContainer src={german} level="C1" />
                                <FlagContainer src={english} level="C1" />
                            </Row>
                        </Col>
                    </Row>
                    <Row className="rowPadding">
                        <ButtonGroup vertical className="buttonGroup">
                            <Button variant="secondary" size="lg" className="button" onClick={ () => {history.push("/qualifications")} }>Qualifications</Button>
                            <Button variant="secondary" size="lg" className="button" onClick={ () => {history.push("/masterprojects")} }>Master Projects</Button>
                            <Button variant="secondary" size="lg" className="button" onClick={ () => {history.push("/projects")} }>Bachelor Projects</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    );
}

export default Welcome;
