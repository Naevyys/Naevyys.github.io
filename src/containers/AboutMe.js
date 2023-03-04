import Navigation from "../components/Navbar";
import { useState } from "react";
import { Wrapper, PageIntro, Section, Subsection } from "../components/Layout";
import { FlagContainer, Timeline, EducationElement, ExperienceElement } from "../components/Elements";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import { SkillCard } from "../components/Cards";

import { educationData, experienceData, programmingLanguages, technologies, awards } from "../data/aboutMeData";

import "../stylesheets/Global.css";
import "../stylesheets/AboutMe.css";

import me from "../images/Me.jpg";
import french from "../images/france.svg";
import german from "../images/germany.svg";
import english from "../images/united-kingdom.svg";
import React from "react";

function AboutMe() {

    var [toggle, setToggle] = useState(false);

    return (
        <Wrapper>
        <Navigation active="aboutme" />
        <Container>
            <Row>
                <Col xs={12}>
                <center><h1 className="pageTitle">About me</h1></center>
                <PageIntro>
                    <Row>
                        <Col lg={3} className="introLeft">
                            <div className="pictureContainer mx-auto">
                                <img className="rounded-circle img-fluid" src={me} alt="Picture of me" />
                            </div>
                        </Col>
                        <Col lg={9} className="my-auto">
                            <p className="text-justify">I aim to foster the improvement of machine learning algorithms by taking inspiration from neuroscience and brain mechanisms. Looking for a 6-month master thesis starting in September 2023.</p>
                            <center>
                                <Row className="justify-content-center">
                                    <FlagContainer src={french} level="C2" />
                                    <FlagContainer src={german} level="C1" />
                                    <FlagContainer src={english} level="C1" />
                                </Row>
                            </center>
                        </Col>
                    </Row>
                </PageIntro>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Section title="Education">
                        <Timeline>
                            {educationData.map((data, key) => {
                                return (
                                    <EducationElement 
                                        interval={data.interval}
                                        school={data.school}
                                        diploma={data.diploma}
                                    />
                                );
                            })}
                        </Timeline>
                    </Section>
                    <Section title="Awards">
                        <Timeline>
                            {awards.map((data, key) => {
                                return (
                                    <EducationElement 
                                        interval={data.date}
                                        school={data.awardingInstitution}
                                        diploma={data.name}
                                    />
                                );
                            })}
                        </Timeline>
                    </Section>
                </Col>
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
                            <Subsection title="Programming Languages &amp; Co.">
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
                    </Section>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    );
}

export default AboutMe;
