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
    return (
        <li>
            <b><a href="#" className="disabled">{props.interval}</a></b><br />
            <p>{props.school}</p>
            <p><i>{props.diploma}</i></p>
        </li>
    );
}

export function ExperienceElement(props) {
    return (
        <li>
            <b><a href="#" className="disabled">{props.interval}</a></b><br />
            <p>{props.place}</p>
            <p><i>{props.jobtitle}</i><br /><small>{props.description}</small></p>
        </li>
    );
}