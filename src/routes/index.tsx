import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Books from '../components/Books';

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book-list/:page(\d)" component={Books} />
        </Switch>
    </div>
);

export default routes;
