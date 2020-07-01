import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import LoginButton from '../components/Auth0/LoginButton';
import Logout from '../components/Auth0/LogoutButton';

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginButton} />
            <Route exact path="/logout" component={Logout} />
        </Switch>
    </div>
);

export default routes;
