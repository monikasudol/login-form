import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';;

const routes = [{
  path: '/', component: Home, exact: true
}, {
  path: '/login', component: Login,
}];

function App() {
  return (
    <Switch>
      {routes.map(route => (<Route
        path={route.path}
        exact={route.exact}
        key={route.path}
        component={route.component}
      />))}
    </Switch>
  );
}

export default App;
