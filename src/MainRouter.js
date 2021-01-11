import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Welcome from "./Components/BasicNac/Welcome";
import Document from "./Components/Document";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default function MainRouter() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Document>MdAbout</Document>
          </Route>
          <Route path="/about-yolo">
            <Document>MdAboutYolo</Document>
          </Route>
          <Route path="/user-guide">
            <Document>MdUserGuide</Document>
          </Route>
          <Route path="/nac-python-gui">
            <Document>MdNacPython</Document>
          </Route>
          <Route path="/nac-react-app">
            <Document>MdNacReact</Document>
          </Route>
          <Route path="/espace">
            <Dashboard />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
