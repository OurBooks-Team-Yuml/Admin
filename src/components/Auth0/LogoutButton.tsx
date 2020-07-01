import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton: FC = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout()} type="button">Log Out</button>
    );
};

export default LogoutButton;
