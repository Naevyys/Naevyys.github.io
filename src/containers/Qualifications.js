import Navigation from "../components/Navbar";
import { useState } from "react";
import { Wrapper, Section, Subsection, SubsectionFullRow } from "../components/Layout";
import { Timeline, EducationElement, ExperienceElement } from "../components/Elements";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import { SkillCard } from "../components/Cards";

import { educationData, experienceData, programmingLanguages, technologies, projectManagement } from "../data/aboutMeData";

import "../stylesheets/Global.css";
import "../stylesheets/AboutMe.css";

import React from "react";

function Qualifications() {

    var [toggle, setToggle] = useState(false);

    return (
        <Wrapper>
        <Navigation active="qualifications" />
        <Container>
            <Row className="qualificationsTitle">
                <center>
                    <h1 className="pageTitle">Qualifications</h1>
                </center>
            </Row>
            <Row>
                <Col md={6}>
                    <Section title="Professional Experience">
                        <Timeline>
                        {experienceData.map((data, key) => {
                                return (
                                    <ExperienceElement 
                                        interval={data.interval}
                                        place={data.place}
                                        jobtitle={data.jobtitle}
                                        description={data.description}
                                    />
                                );
                            })}
                        </Timeline>
                    </Section>
                </Col>
                <Col md={6}>
                    <Section title="Education">
                        <Timeline>
                            {educationData.map((data, key) => {
                                return (
                                    <EducationElement 
                                        interval={data.interval}
                                        school={data.school}
                                        diploma={data.diploma}
                                        details={data.details}
                                    />
                                );
                            })}
                        </Timeline>
                    </Section>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Section title={["Skills", 
                        <button className="btn legend" type="button" onClick={() => setToggle(!toggle)}>
                            Legend <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>]}>
                        <Collapse in={toggle}>
                            <div id="legendBody">
                                <div className="card card-body mb-3 mr-2 legendContent">
                                    <p>Skills listed in this section are tools I gained at least some experience with through courses, projects or work experience. The background color of each skill card expresses how comfortable I feel when using this skill. Therefore, it reflects a relative competence level.</p>
                                    <div className="row row-cols-1 row-cols-md-3 justify-content-center legendBanner ml-1 mr-1">
                                        <div className="legendTile">
                                            <p className="text-center align-middle">Very comfortable</p>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-4 justify-content-center">
                                            <div className="legendTile level4"></div>
                                            <div className="legendTile level3"></div>
                                            <div className="legendTile level2"></div>
                                            <div className="legendTile level1"></div>
                                        </div>
                                        <div className="legendTile">
                                            <p className="text-center align-middle">Not comfortable</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                        <Row md={2}>
                            <Subsection title="Programming Languages">
                                {programmingLanguages.map((data, key) => {
                                    return (
                                        <SkillCard 
                                            src={data.src}
                                            name={data.name}
                                            level={data.level}
                                        />
                                    );
                                })}
                            </Subsection>
                            <Subsection title="Technologies">
                                {technologies.map((data, key) => {
                                    return (
                                        <SkillCard 
                                            src={data.src}
                                            name={data.name}
                                            level={data.level}
                                        />
                                    );
                                })}
                            </Subsection>
                        </Row>
                        <Row md={1}>
                            <SubsectionFullRow title="Project management">
                                {projectManagement.map((data, key) => {
                                    return (
                                        <SkillCard 
                                            src={data.src}
                                            name={data.name}
                                            level={data.level}
                                        />
                                    );
                                })}
                            </SubsectionFullRow>
                        </Row>
                    </Section>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    );
}

export default Qualifications;
