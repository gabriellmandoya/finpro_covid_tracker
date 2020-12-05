import React from 'react'
import {Global, Indonesia, Province} from "./pages";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/province">Province</Link>
            </li>
          </ul>
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
      </div>
    </Router>
  )
}

export default App
