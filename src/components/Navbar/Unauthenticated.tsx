import React, { FC } from 'react';

import LoginButton from '../Auth0/LoginButton';

const Unauthenticated : FC = () => (
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
                        <button className="button is-primary" type="button">
                            <strong>Sign up</strong>
                        </button>
                        <LoginButton />
                    </div>
                </div>
            </div>
        </div>
    )
);

export default Unauthenticated;
