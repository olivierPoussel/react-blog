import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../App';

export default function PrivateRoute({ children, ...rest }) {
    const context = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
            context.isConnected ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}