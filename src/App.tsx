import React from 'react';
import { useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './routes';
import Navbar from './components/Navbar/Navbar';
import { RootReducerType } from './store/root_reducer';

import './App.scss';

const App = ({ history }: any) => {
    const isFetching = useSelector<RootReducerType, boolean>((store) => store.app.isFetching);

    return (
        <ConnectedRouter history={history}>
            <Navbar />

            <div className="container">
                <div className="section">
                    <Routes />
                </div>
            </div>
            {isFetching && (
                <div className="custom-loader">
                    <div className="loader">
                        <i className="fas fa-spinner fa-pulse" />
                    </div>
                </div>
            )}
        </ConnectedRouter>
    );
};

export default App;
