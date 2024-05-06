import "../stylesheets/Global.css";
import { Row } from "react-bootstrap";

export function Wrapper(props) {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
}

export function PageIntro(props) {
    return (
        <div className="pageIntro">
            {props.children}
        </div>
    );
}

export function Section(props) {
    return (
        <div className="section">
            <h3>{props.title}</h3>
            {props.children}
        </div>
    );
}

export function Subsection(props) {
    return (
        <div className="subsection pl-3 pr-3">
            <h5>{props.title}</h5>
            <Row xs={2} xxl={4} className="row-cols-2 skillsRow">
                {props.children}
            </Row>
        </div>
    );
}

export function SubsectionFullRow(props) {
    return (
        <div className="subsection pl-3 pr-3">
            <h5>{props.title}</h5>
            <Row xs={2} lg={3} xxl={5} className="row-cols-2 skillsRow">
                {props.children}
            </Row>
        </div>
    );
}