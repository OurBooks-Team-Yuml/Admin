import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootReducerType } from '../../store/root_reducer';

import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';

const Navbar : FC = () => {
    const isAuthenticated = useSelector<RootReducerType, boolean>(
        ({ auth }) => auth.isAuthenticated,
    );

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        BOOKS ADMIN
                    </a>

                    <button
                        type="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="admin-navbar"
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </button>
                </div>

                {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
            </nav>
        </div>
    );
};

export default Navbar;
