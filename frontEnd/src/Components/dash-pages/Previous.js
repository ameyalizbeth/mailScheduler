import React,{useEffect,useState} from 'react';
import './prev.css'
import {
    Link
} from "react-router-dom";
import Axios from "axios";
import {initData} from './data'

function Previous(){
    const user = localStorage.getItem("email");
    const [prevData, setPrev] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:8001/user/api/sendmails/${user}`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
            setPrev(response.data.result);
        });
    }, []);
    return(

        <div>
            <div className="prev-tit">
                <span>Sent Mails</span>
                <span ><Link className="view-all" to="/index/Explore">View all</Link></span>
            </div>
            <div class="container">
                <div className="row prev-row">
            {prevData.map((item)=>{
                return(
                    
                    <div className="col-xl-6 card prev-card">
                        <div className="card-pad">{item.subject}</div>
                    </div>     
                )
            })}
            </div>
            </div>
        </div>
    );
}


export default Previous;