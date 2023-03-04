import { Switch, Route } from "react-router-dom";

import Welcome from "../containers/Welcome";
import AboutMe from "../containers/AboutMe";
import Projects from "../containers/Projects";

function Routes() {
    return (
        <Switch>
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
			<Route path="/" component={Welcome} />
        </Switch>
    );
}

export default Routes;