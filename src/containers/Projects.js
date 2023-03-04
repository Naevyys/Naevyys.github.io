import Navigation from "../components/Navbar";
import { BSPCard } from "../components/Cards";
import { Wrapper, PageIntro } from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

import { projectData } from "../data/projectData";

import "../stylesheets/Global.css";
import "../stylesheets/Projects.css";

function Projects() {
    return (
        <Wrapper>
        <Navigation active="projects" />
        <Container>
            <Row>
                <Col>
                    <center>
                        <h1 className="pageTitle">Bachelor Semester Projects (BSPs)</h1>
                    </center>
                    {projectData.map((data, key) => {
                        return (
                            <>
                                <BSPCard 
                                    id={data.id}
                                    title={data.title}
                                    sem={data.sem}
                                    tutor={data.tutor}
                                    description={data.description}
                                    tech={data.tech}
                                    video={data.video}
                                    report={data.report}
                                />
                                <hr className="separator" />
                            </>
                        )
                    })}
                </Col>
            </Row>
        </Container>
        </Wrapper>
    );
}

export default Projects

/* Mention BSP1 project award */