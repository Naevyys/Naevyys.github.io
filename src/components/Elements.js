import "../stylesheets/Global.css";
import "../stylesheets/AboutMe.css";

export function FlagContainer(props) {
    return (
        <div className="flagContainer">
            <img className="img-fluid flag" src={props.src} />
            <p className="textOnSvg">{props.level}</p>
        </div>
    );
}

export function Timeline(props) {
    return (
        <ul className="timeline">
            {props.children}
        </ul>
    );
}

export function EducationElement(props) {

    var details = <></>

    if (props.details) {
        details = <p><small>{props.details}</small></p>
    } 

    return (
        <li>
            <p><b><a href="#" className="disabled">{props.diploma}</a></b><br />
            <b>{props.school}</b><br />{props.interval}</p>
            {details}
        </li>
    );
}

export function ExperienceElement(props) {
    var description = <></>

    if (props.description) {
        description = <p><small>{props.description}</small></p>
    } 

    return (
        <li>
            <p><b><a href="#" className="disabled">{props.jobtitle}</a></b><br />
            <b>{props.place}</b><br />{props.interval}</p>
            {description}
        </li>
    );
}