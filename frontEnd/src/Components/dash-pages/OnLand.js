import React from 'react';
import fig from "../assets/email-fig.png"
import { Link } from "react-router-dom";
import './dash.css'

function OnLand(){
    return (
        <div className="onLand-main">
            <div className="col-xl-6 get-strt">
                <div className="title-onland">Mail<span style={{color:"#4F4F4F"}}>Easy</span></div>
                <div className="title-desc">Upgrade your email service<br/>
                to help you communicate better
                </div>
                <Link to='/login' className='btn start-btn'>
                    Get Started
                </Link>
            </div>
            <div className="col-xl-6">
                <img src={fig} className="onland-img"></img>
            </div>
        </div>
    );
}

export default OnLand;