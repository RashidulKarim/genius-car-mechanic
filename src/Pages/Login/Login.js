import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './login.css';

const Login = () => {
    const {googleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const googleLogIn = () => {
        googleSignIn()
        .then(res=>{
            history.push(location?.state?.from)
        })

    }
    return (
            <div className='flex-item'>
            <div><button className='btn btn-warning' onClick={googleLogIn}>Google Sign In</button></div>
       </div>
    );
};

export default Login;