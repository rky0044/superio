import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import dashboard from "../components/candidate/Dashboard"

import { getUserAsync, getUser, showUser, showUserLoginError } from '../features/login/loginSlice';


const Login = () => {

    const dispatch = useDispatch();
    const navigate= useNavigate();
    // const loginDone = useSelector(showUser);
    // const error = useSelector(showUserLoginError);

    const { error, userData } = useSelector(
        (state) => state.logedUser
    );

    useEffect(() => {
        setLoginError(error.detail)
    }, [error]);

    useEffect(()=>{

        if(userData){
            console.log(userData, 'loginDone');
            localStorage.setItem('loginUser', JSON.stringify(userData));
            localStorage.setItem('token', userData.token);
            navigate("/dashboard");
        }
    

    },[userData])
    console.log(error, 'errrorororo');
   
    // getUserAsync
    const [formData, setFormData] = useState({ username: "", password: "", device_id: "1" });
    const [loginError, setLoginError] = useState('');
    const [usernameError, setusernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'username' && e.target.value !== '') {
            setusernameError('');
        }
        if (e.target.name === 'username' && e.target.value === '') {
            setusernameError('Enter email');
        }
        if (e.target.name === 'password' && e.target.value === '') {
            setPasswordError('Enter password');
        }

        if (e.target.name === 'password' && e.target.value !== '') {
            setPasswordError('');
        }
        setLoginError('');
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const forgetPwd = ()=>{
        navigate("/forgetpassword");
        
    }

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        if (formData.username !== '' && formData.password !== '') {
            dispatch(getUserAsync(formData));
        } else {
            if (formData.username === '') {
                setusernameError('Enter username');
            }
            if (formData.password === '') {
                setPasswordError('Enter password');
            }
        }
    }

    return (
        <>
            <div className="login-section">
                <div className="image-layer" style={{ backgroundImage: `url(images/background/12.jpg)` }}></div>
                <div className="outer-box">

                    <div className="login-form default-form">
                        <form onSubmit={loginSubmitHandler}>
                            <div className="form-inner">
                                <h3>Login to Superio</h3>


                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password-field" type="password" name="password" onChange={handleChange} placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <div className="field-outer">
                                        <div className="input-group checkboxes square">
                                            <input type="checkbox" name="remember-me" value="" id="remember" />
                                            <label htmlFor="remember" className="remember"><span className="custom-checkbox"></span> Remember me</label>
                                        </div>
                                        <a href="#" className="pwd" onClick={forgetPwd}>Forgot password?</a>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <p style={{ fontSize: "12px", color: 'red' }}>{loginError}</p>
                                    <button className="theme-btn btn-style-one" type='submit' name="log-in">Log In</button>

                                </div>


                                <div className="bottom-box">
                                    <div className="text">Don't have an account? <a href="register.html">Signup</a></div>
                                    <div className="divider"><span>or</span></div>
                                    <div className="btn-box row">
                                        <div className="col-lg-6 col-md-12">
                                            <a href="#" className="theme-btn social-btn-two facebook-btn"><i className="fab fa-facebook-f"></i> Log In via Facebook</a>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <a href="#" className="theme-btn social-btn-two google-btn"><i className="fab fa-google"></i> Log In via Gmail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Login;