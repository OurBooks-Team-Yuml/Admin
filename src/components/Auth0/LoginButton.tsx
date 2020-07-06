import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton : FC = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <button
                className="button is-light"
                onClick={loginWithRedirect}
                type="button"
            >
                Log In
            </button>
        </div>
    );
};

export default LoginButton;
