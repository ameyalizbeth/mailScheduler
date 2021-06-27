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
    const deleteQuestion = (e) => {
        
       
        const token = localStorage.getItem("token");

        fetch(`http://localhost:8001/question/user`, {
            method: "DELETE",
            headers: {
                'content-type':'application/json',
                "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                
            }),
        })
            .then((r) => {
                if (r.status == 200) {
                    alert("Question deleted successfully");
                } else if (r.status == 422) alert("Invalid File format");
                else if (r.status == 401) alert("Authentication error");
            })
            .catch((err) => console.log(err));

    };
    return (
        <div>
            <div className="prev-tit">
                <span style={{marginLeft:-10}}>Scheduled Mails</span>
                <span ><Link className="view-all" to="/index/Explore">View all</Link></span>
            </div>
            {!schedData?"":schedData.map((item)=>{
                return(
                    <div className="sche-card">
                        <div>
                            <div className="mail-desc">{item.subject}</div>
                            <div className="sche-time">Time | Date</div>
                            <button className="dlt-btn" onClick={deleteQuestion}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Schedule;