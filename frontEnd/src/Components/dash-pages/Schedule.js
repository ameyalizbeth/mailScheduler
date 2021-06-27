import React,{useEffect,useState} from 'react';
import './schedule.css'
import {
    Link
} from "react-router-dom";
import {initData} from './data'
import Axios from "axios";

function Schedule(){
    const user = localStorage.getItem("email");
    const [schedData, setSched] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:8001/user/api/${user}/homepage`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
            setSched(response.data.emails);
        });
    }, []);
    return (
        <div>
            <div className="prev-tit">
                <span style={{marginLeft:-10}}>Scheduled Mails</span>
                <span ><Link className="view-all" to="/index/Explore">View all</Link></span>
            </div>
            {schedData.map((item)=>{
                return(
                    <div className="sche-card">
                        <div>
                            <div className="mail-desc">{item.subject}</div>
                            <div className="sche-time">Time | Date</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Schedule;