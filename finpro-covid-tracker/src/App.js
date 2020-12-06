import React from 'react'
import {Global, Indonesia, Province} from "./pages";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import {Row, Col} from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Row>
              <ul className="menu">
                <Col>
                  <li>
                    <Link to="/">Global</Link>
                  </li>
                </Col>
                <Col>
                  <li>
                    <Link to="/indonesia">Indonesia</Link>
                  </li>
                </Col>
                <Col>
                  <li>
                    <Link to="/province">Province</Link>
                  </li>
                </Col>
              </ul>
            </Row>
          </nav>
          <Switch>
            <Route path="/indonesia">
              <Indonesia />
            </Route>
            <Route path="/province">
              <Province />
            </Route>
            <Route path="/">
              <Global />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  )
}

export default App
