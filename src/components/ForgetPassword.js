import React, { useState } from "react";
import axios from "axios";
const ForgetPassword = () => {
    const [formData, setFormData] = useState({ email: "" });
    const [loginError, setLoginError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [msg, setMsg] = useState("");



    const handleChange = (e) => {
        if (e.target.name === 'email' && e.target.value !== '') {
            setEmailError('');
        }
        if (e.target.name === 'email' && e.target.value === '') {
            setEmailError('Enter email');
        }

        setLoginError('');
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        if (formData.email !== '') {
            axios.post("https://virvit.mydevpartner.website/vvapi/v1/forgot-password/", formData).then((response) => {
                setMsg(response.data.success);

            })

        } else {

        }

        if (formData.username === '') {
            setEmailError('Enter email');
        }

    }

    return (
        <>
            <div className="login-section">

                <div className="outer-box">

                    <div className="login-form default-form">
                        <form onSubmit={loginSubmitHandler}>
                            <div className="form-inner">
                                <h3>Forget Password to Superio</h3>


                                <div className="form-group">
                                    <label>Enter Email</label>
                                    <input type="text" name="email" placeholder="Email" onChange={handleChange} required />
                                </div>



                                <div className="form-group">

                                    <button className="theme-btn btn-style-one" type='submit' name="log-in">Submit</button>
                                    <p style={{ fontSize: "20px", color: 'red' }}>{msg}</p>
                                </div>



                            </div>
                        </form>
                    </div>

                </div>
                <div className="image-layer" style={{ backgroundImage: `url(images/background/12.jpg)` }}></div>
            </div>
        </>
    )
}

export default ForgetPassword;