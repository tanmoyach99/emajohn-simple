import React from 'react';
 import Auth from './useAuth';

const Login = () => {
      const auth= Auth();
    console.log(auth.user);

    return (
        <div>
            
            <h1>join in ema-john-simple</h1>
        </div>
    );
};

export default Login;