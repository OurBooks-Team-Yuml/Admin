import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Books from '../components/Books';
import NewBook from '../components/NewBook/NewBook';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book-list/:page(\d)" component={Books} />
            <Route exact path="/book/create" component={NewBook} />
        </Switch>
    </div>
);

export default Routes;
