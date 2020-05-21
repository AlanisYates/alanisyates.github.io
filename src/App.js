import React, { useState } from "react";
import { Home } from "./Components/Home/Home";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Projects } from "./Components/Projects/Projects";
import { Experiencs } from "./Components/Experience/Experiencs";
import Container from "react-bootstrap/Container";

const App = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar
            collapseOnSelect
            expand="md"
            variant="dark"
            style={{
              backgroundColor: "black",
              fontSize: "1.5rem",
            }}
          >
            <Navbar.Brand
              href="#"
              as={Link}
              to="/"
              style={{
                fontSize: "1.7rem",
              }}
              onClick={() => {
                setActive(false);
              }}
            >
              Alanis Yates
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  href="#"
                  eventKey={1}
                  as={Link}
                  active={active}
                  to="/projects"
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  href="#"
                  as={Link}
                  eventKey={2}
                  active={active}
                  to="/experience"
                >
                  Experience
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/experience">
              <Experiencs />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
