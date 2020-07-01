import React, { FC } from 'react';

import LogoutButton from '../Auth0/LogoutButton';

const Authenticated : FC = () => (
    (
        <div id="admin-navbar" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="/">
                    Home
                </a>
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
