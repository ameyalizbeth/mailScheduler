import React,{useEffect, useState} from 'react';
import './login.css'
import {GoogleLogin} from 'react-google-login';
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";



export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState();
  const [message, setMessage] = useState("");
  const [googleUser, setGoogleUser] = useState(false);

  const login = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8001/user/api/login", {
        password: password,
        email: email,
        googleUser:googleUser
    }).then((response) => {
        console.log(response);
        
        if (response.data.auth) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", email);
            setAccess(true);
        } else {
            setAccess(false);
            if(message!=="")
            setMessage(response.data);
        }
      
    });
};
if (access) {
    return (
        <Redirect
        to={{
            pathname: "/index/Home",
            state: { email: email }, // your data array of objects
        }}
        />
    );
}
    const success = (response) => {
        console.log(response);
        setGoogleUser(true);
      }

    function failure(res){
        console.log(res);
        
    }
    return(
        <div className="auth-bg">

                        <div className="title-main"><span>Mail</span>Easy</div>
                        <form
                            className='mx-auto form-group col-10 form-bg'
                            onSubmit={login}
                        >
                            <div className='py-2'>
                                <input
                                  className='form-control px-3 mb-4'
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    required
                                ></input>
                                
                                
                                <input
                                    className='form-control px-3 my-4'
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    required
                                ></input >
                                
                               
                            </div>
                            <div className='my-2'>
                                <button
                                    className='btn mx-auto start-btn d-block col-6'
                                    type="submit"
                                >
                                    Log In
                                </button>
                              
                            <div className="google-btn">
                                <GoogleLogin
                                    clientId="1063904613010-9o3f4em46i0quetmin1cuev3bkp6umbp.apps.googleusercontent.com"
                                    buttonText="Continue With Google"
                                    onSuccess={success}
                                    onFailure={failure}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            
                            </div>
                            <div className="log-bt pos-2">Login</div>
                            <Link to="/signup" className="sign-btn pos-1">Sign Up</Link>
                            
                            <p
                                style={{
                                    color: "red",
                                    fontSize: 12,
                                    textAlign: "center",
                                }}
                            >
                                {message}
                            </p>
                        </form>


        
      </div>);
}