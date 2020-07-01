import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';

import './App.scss';

const App = ({ history }: any) => (
    <ConnectedRouter history={history}>
        <div className="container">
            <div className="section">
                { routes }
            </div>
        </div>
    </ConnectedRouter>
);

export default App;
