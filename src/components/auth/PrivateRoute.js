import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({
    authenticated,
    ...rest
}) {


    return authenticated
        ? <Route {...rest} />
        : <Redirect to={{
            pathname: '/login',
            state: { prevPath: rest.path }
        }} />

}

export default PrivateRoute;