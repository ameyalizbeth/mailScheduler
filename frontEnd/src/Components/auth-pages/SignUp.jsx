import React,{useEffect, useState} from 'react';
import './login.css'
import {GoogleLogin} from 'react-google-login';
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";



export default function SignUp(){

  const [email, setEmail] = useState("");
//   const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [access, setAccess] = useState();
  const [message, setMessage] = useState([]);

  const register = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8001/user/api/signin", {
        password: password,
        email: email,
        confirmPassword:confirmPassword
    }).then((response) => {
        console.log(response);
        setMessage(response.data);
        
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
    const responseGoogle = (response) => {
        console.log(response);
      }

    return(
    <div className="auth-bg">


                        <form
                            className='mx-auto form-group col-10 form-bg'
                            onSubmit={register}
                        >
                            <div className='py-2 ' style={{marginTop:40}}>
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
                                {/* <input
                                  className='form-control px-3 mb-4'
                                    type='name'
                                    placeholder='Full Name'
                                    name='fullname'
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    required
                                ></input> */}
                                
                                
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

<input
                                    className='form-control px-3 my-4'
                                    type='password'
                                    placeholder='confirm password'
                                    name='password'
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                    required
                                ></input >
                                
                               
                            </div>
                            <div className='my-2'>
                                <button
                                    className='btn mx-auto start-btn d-block col-6'
                                    type="submit"
                                >
                                    Create account
                                </button>
                                <div className="google-btn">
                                <GoogleLogin
                                clientId="1063904613010-9o3f4em46i0quetmin1cuev3bkp6umbp.apps.googleusercontent.com"
                                buttonText="Signup using Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                />
                                </div>
                            </div>
                            <div className="log-bt pos-1">SignUp</div>
                            <Link to="/" className="sign-btn pos-2">Login</Link>
                            {/* <button className="google-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                </svg>
                                <span style={{marginLeft:5}}>Continue with google </span>    
                            </button> */}
                            <p
                                style={{
                                    color: "red",
                                    fontSize: 12,
                                    textAlign: "center",
                                    
                                }}
                            >
                                {message.msg}
                            </p>
                        </form>


        
      </div>);
}