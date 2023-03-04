import { Button } from "react-bootstrap";

import "../stylesheets/Global.css";
import "../stylesheets/Projects.css";
import "../stylesheets/AboutMe.css";

export function BSPCard(props) {
    return (
        <>
            <hr className="separator" id={"BSP" + props.id}/>
            <div className="project">
                <center><h3 className="projectTitle">{props.title}</h3>
                <h5 className="projectSubtitle">{"Bachelor Semester Project " + props.id + " - " + props.sem}</h5></center>
                <div className="projectDescription">
                    <p><b>Project Academic Tutor: </b>{props.tutor}</p>
                    <p className="text-justify"><b>Project description: </b>{props.description}</p>
                    <p><b>Main technologies: </b>{props.tech}</p>
                </div>
                <div className="videoWrapper">
                    <iframe title={props.id} className="video" src={props.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p><Button variant="dark" size="lg" className="reportButton" target="_blank" href={props.report}><i className="fa fa-file-pdf-o pdfIcon"></i> Final report</Button></p>
            </div>
        </>
    );
}

export function SkillCard(props) {

    return (
        <>
        <div className="mb-2 pr-2">
            <div className="card skillCard">
                <div className="skillImage">
                    <img className="card-img-top img-fluid skillIcon" src={props.src} alt={props.name + " logo"} />
                </div>
                <div className={"card-body level" + props.level}>
                    <p className="card-title skillName">{props.name}</p>
                </div>
            </div>
        </div>
        </>
    );
}