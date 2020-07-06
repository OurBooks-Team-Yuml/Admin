import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import LogoutButton from '../Auth0/LogoutButton';

const Authenticated : FC = () => (
    (
        <div id="admin-navbar" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="/">
                    Home
                </a>

                <Link to="/book-list" className="navbar-item">
                    Books
                </Link>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </div>
    )
);

export default Authenticated;
