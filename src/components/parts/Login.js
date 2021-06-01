import React, {Component} from 'react';
import '../../assets/css/Login.css';
import AuthForm from './AuthForm';

class Login extends Component {
    render() {
        return (
            <div className="root container">
                {/* Login Form */}
                <AuthForm type="Login" />
                
                {/* Register Form */}
                <AuthForm type="Register" />
            </div>
        );
    }
}

export default Login;