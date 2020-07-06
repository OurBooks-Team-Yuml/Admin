import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { login } from '../store/actions';
import { RootReducerType } from '../store/root_reducer';

import Books from './Books';

const Home : FC = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const isUserAuthenticated = useSelector<RootReducerType, boolean>(
        ({ app }) => app.isAuthenticated,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                // This is only true when user is redirected through auth0.
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
            {isUserAuthenticated && (
                <div>Authenticated</div>
            )}
            <Books />
        </div>
    );
};

export default Home;
