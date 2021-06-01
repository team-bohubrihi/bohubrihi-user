import React from 'react';
import {Link} from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {faFacebook, faGoogle, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import LoginFormButton from '../UIs/LoginFormButton';
import CustomErrorMessage from '../UIs/CustomErrorMessage';

const AuthForm = props => {
    return (    
        <div className="box">
            <h2>{props.type}</h2>
            <div className="form-box">
                <Formik
                    initialValues={{ toogle: false, email: '', password: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('Required'),
                        password: Yup.string().min(8, 'Invalid password! Please write a password upto 8 characters!').required('Required')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }}>
                    <>
                        <div className="button-group">
                            <LoginFormButton
                                title="Login with"
                                boldText="Facebook"
                                icon={faFacebook}
                                style={{backgroundColor: "#0081EC", color: "white"}} />

                            <LoginFormButton
                                title="Login with"
                                boldText="Google"
                                icon={faGoogle}
                                style={{backgroundColor: "#fff", color: "gray", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, .25)"}} />
                            
                            <LoginFormButton
                                title="Login with"
                                boldText="Linkedin"
                                icon={faLinkedinIn}
                                style={{backgroundColor: "#0078B0", color: "white"}} />
                        </div>
                        <div className="separator">OR</div>
                        <Form>        
                            <div className="form-group m-3 text-center">
                                <label htmlFor="email" className="required mb-2">Email Address</label>
                                <Field name="email" id="email" type="email" className="form-control" />
                                <ErrorMessage component={CustomErrorMessage} name="email" />
                            </div>

                            <div className="form-group m-3 text-center">
                                <label htmlFor="password" className="mb-2 required">Password</label>
                                <Field name="password" id="password" type="password" className="form-control" />
                                <ErrorMessage component={CustomErrorMessage} name="password" />
                            </div>
                    
                            <div className="form-group m-3 text-center">
                                <label>
                                    <Field type="checkbox" name="toggle" />
                                </label>
                                <button type="submit" className="btn btn-success m-3 ps-4 pe-4" style={{backgroundColor: "#00C88A", border: "none"}}>Submit</button>
                            </div>
                        </Form>
                        {
                            props.type === "Login" ? (
                                <div className="text-center">
                                    <Link to="/" className="forgotPassword">Lost your password?</Link>
                                </div>
                            ) : (null)
                        }
                        
                    </>
                </Formik>
            </div>
        </div>
    );
}

export default AuthForm;