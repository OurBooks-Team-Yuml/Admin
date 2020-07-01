import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { customLogout } from '../../store/actions';

const LogoutButton: FC = () => {
    const { logout } = useAuth0();

    const dispatch = useDispatch();

    const onClick = React.useCallback(() => {
        dispatch(customLogout());

        logout();
    }, [dispatch, logout]);

    return (
        <button
            className="button is-light"
            onClick={onClick}
            type="button"
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
