import { Switch, Route } from "react-router-dom";

import Welcome from "../containers/Welcome";
import Projects from "../containers/Projects";
import MasterProjects from "../containers/MasterProjects";
import Qualifications from "../containers/Qualifications";

function Routes() {
    return (
        <Switch>
            <Route exact path="/qualifications" component={Qualifications} />
            <Route exact path="/bachelorprojects" component={Projects} />
            <Route exact path="/masterprojects" component={MasterProjects} />
			<Route path="/" component={Welcome} />
        </Switch>
    );
}

export default Routes;