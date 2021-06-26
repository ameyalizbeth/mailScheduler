import React,{useEffect, useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";



export default function SignUp(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [access, setAccess] = useState();
  const [message, setMessage] = useState("");

  const register = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8001/user/api/signin", {
        password: password,
        email: email,
        confirmPassword:confirmPassword, 
        googleUser:false
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
    const responseGoogle = (response) => {
        console.log(response);
      }

    return(<div>


<form
                            className='mx-auto form-group col-10'
                            onSubmit={register}
                        >
                            <div className='py-4'>
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
                            </div>
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


        {/* <GoogleLogin
          clientId="1063904613010-9o3f4em46i0quetmin1cuev3bkp6umbp.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
      </div>);
}