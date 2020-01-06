import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Ramdom, Users } from '../../containers';
import { ROOT, RAMDOM, USERS } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />

    <Route exact path={RAMDOM} component={Ramdom} />
    <Route exact path={USERS} component={Users} />
  </Switch>
);

export default Routes;
