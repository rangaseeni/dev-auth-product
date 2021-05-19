import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="Hvh-100 d-flex align-items-center">
            <div className="col-sm-6 offset-sm-3 col-md-4 offset-md-4">
                <div className="F-large M-b-5">
                    <span className="F-bold"> All done !</span> Have a nice day
                </div>
                <div>
                    A bit more to do? <button className="btn btn-info" onClick={() => loginWithRedirect()}> Log In </button>
                </div>
            </div>
        </div>
    )
}

export default Login