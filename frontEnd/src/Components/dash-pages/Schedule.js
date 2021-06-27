import React,{useEffect} from 'react';
import './schedule.css';
import {initData} from './data';
import Axios from "axios";

function Schedule(){
    const user = localStorage.getItem("email");

    useEffect(() => {
        Axios.get(`http://localhost:8001/user/api/${user}/homepage`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
        });
    }, []);
    return (
        <div>
            <div style={{marginBottom:20}}>Scheduled Emails</div>

            {initData.map((item)=>{
                return(
                    <div className="sche-card">
                        <div>
                            <div className="mail-desc">{item.qst}</div>
                            <div className="sche-time">Time | Date</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Schedule;