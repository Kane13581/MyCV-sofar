import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Projects from "./components/Projects";
import Contacts from "./components/contacts";


export default function App() {
  return (
    <Router>
      <div className="NavBar">
        <div className="HomeBackround">
          <Link to="/" className="HomeButtonStyle" >Home</Link>
        </div>
        <div className="AboutBackround">
          <Link to="/about" className="AboutButtonStyle">About</Link>
        </div>
        <div className="ProjectsBackround">
          <Link to="/projects" className="ProjectsButtonStyle">Hobbies</Link>
        </div>
        <div className="ContactsBackround">
          <Link to="/contacts" className="ContactsButtonStyle">Contacts</Link>
        </div>
      </div>

      <div className="BigPicture">
        <div className="PageContents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

