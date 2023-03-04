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
                        <h1 className="pageTitle">Projects</h1>
                    </center>
                    <PageIntro>
                        <p className="text-justify">On this page, I am presenting the bachelor semester projects (BSPs) I made during my bachelor studies at the University of Luxembourg.</p>
                        <p className="text-justify"><i>There is no BSP4, because I went on exchange during semester 4 and therefore did not do a BSP during that semester.</i></p>
                    </PageIntro>
                    {projectData.map((data, key) => {
                        return (
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