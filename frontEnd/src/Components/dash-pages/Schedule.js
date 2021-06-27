import React,{useState, useEffect} from 'react';
import './schedule.css';
import Axios from "axios";

function Schedule(){
    const user = localStorage.getItem("email");
    const [data, setData] = useState("");


    useEffect(() => {
        Axios.get(`http://localhost:8001/user/api/${user}/homepage`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
            setData(response.data.emails);
        });
    }, []);
    const deleteQuestion = (e) => {
        
       
        const token = localStorage.getItem("token");

        fetch(`http://localhost:8001/user/api/delete`, {
            method: "DELETE",
            headers: {
                'content-type':'application/json',
                "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                taskid:e
            }),
        })
            .then((r) => {
                if (r.status == 200) {
                    alert("schedule cancelled");
                } else if (r.status == 422) alert("Invalid File format");
                else if (r.status == 401) alert("Authentication error");
            })
            .catch((err) => console.log(err));

    };
    return (
        <div>
            <div style={{marginBottom:20}}>Scheduled Emails</div>

            {data==="" || data===undefined?"":data.map((item)=>{
                return(
                    <div className="sche-card">
                        <div>
                            <div className="mail-desc">{item.subject}</div>
<<<<<<< HEAD
                            <div className="sche-time">Time | Date</div>
                            <button className="dlt-btn" onClick={deleteQuestion(item.taskid)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                            </button>
=======
                <div className="sche-time">{item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[2]} {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[1]} {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[0]} | {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[4]} | {item.category} | Audience:{item.toEmail.length}</div>
                        
>>>>>>> 4b3e2d8e8486a02859b40ec4e4ac8638d2da532b
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Schedule;