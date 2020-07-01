import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { login } from '../store/actions';

const Home : FC = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                if (isAuthenticated) {
                    const token = await getAccessTokenSilently();

                    dispatch(login(user, token));
                }
            } catch (e) {
                console.error(e);
            }
        })();
    }, [getAccessTokenSilently, isAuthenticated, user, dispatch]);

    return (
        <div>
            Home
        </div>
    );
};

export default Home;
