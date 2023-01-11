import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice'; 


const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const[device_id,setdevice_id]=useState("1");
    const dispatch = useDispatch();

    const handalLogin = ()=>{
        console.log(username,password,device_id);
        dispatch(loginUser({username,password,device_id}))
    }

    return (
        <>
            <div className="login-section">
                <div className="image-layer" style={{backgroundImage: `url(images/background/12.jpg)`}}></div>
                    <div className="outer-box">

                        <div className="login-form default-form">
                            <div className="form-inner">
                                <h3>Login to Superio</h3>

                               
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input id="password-field" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                                    </div>

                                    <div className="form-group">
                                        <div className="field-outer">
                                            <div className="input-group checkboxes square">
                                                <input type="checkbox" name="remember-me" value="" id="remember" />
                                                <label htmlFor="remember" className="remember"><span className="custom-checkbox"></span> Remember me</label>
                                            </div>
                                            <a href="#" className="pwd">Forgot password?</a>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button className="theme-btn btn-style-one" onClick={handalLogin}  name="log-in">Log In</button>
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
                        </div>

                    </div>
            </div>
        </>
    )
};
export default Login;