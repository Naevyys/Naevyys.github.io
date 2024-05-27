import Navigation from "../components/Navbar";
import { MasterProjectCard } from "../components/Cards";
import { Wrapper, PageIntro } from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

import { MasterProjectData } from "../data/projectData";

import "../stylesheets/Global.css";
import "../stylesheets/Projects.css";

function MasterProjects() {
    return (
        <Wrapper>
        <Navigation active="masterprojects" />
        <Container>
            <Row>
                <Col>
                    <center>
                        <h1 className="pageTitle">Master Projects</h1>
                    </center>
                    {MasterProjectData.map((data, key) => {
                        return (
                            <>
                                <MasterProjectCard 
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    place={data.place}
                                    date={data.date}
                                    supervisor={data.supervisor}
                                    summary={data.summary}
                                    tech={data.tech}
                                    src={data.src}
                                    alt={data.alt}
                                    legend={data.legend}
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

export default MasterProjects

/* Mention BSP1 project award */