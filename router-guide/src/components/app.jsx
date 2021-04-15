import { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import routes from '../routes';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const elm = (
      <div>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
        </ul>
        <Switch>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              component={route.component}
              key={index}
            ></Route>
          ))}
        </Switch>
      </div>
    );

    return elm;
  }
}

export default App;
