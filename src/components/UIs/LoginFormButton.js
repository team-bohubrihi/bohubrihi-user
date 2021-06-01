import React from 'react';
import "../../assets/css/Login.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginFormButton = props => {
    return (
        <Link to="#" className="auth-btn" style={{...props.style}}>
            <FontAwesomeIcon className="icon-style" icon={props.icon}/>
            <h6 className="btn-title">{props.title} <span className="bold-text">{props.boldText}</span></h6>
        </Link>
    );
}

export default LoginFormButton;