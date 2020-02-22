import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import Project from './Project';



function Projects() {

  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li>
          <Link to={`${url}/sports`}>Sports</Link>
        </li>
        <li>
          <Link to={`${url}/IT`}>IT</Link>
        </li>
        <li>
          <Link to={`${url}/Movies`}>Movies</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a hobby.</h3>
        </Route>
        <Route path={`${path}/:projectId`}>
          <Project />
        </Route>
      </Switch>
    </div>
  );
}

export default Projects;