import React, { FC } from 'react';

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
                        <button className="button is-light" type="button">
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
);

export default Authenticated;
