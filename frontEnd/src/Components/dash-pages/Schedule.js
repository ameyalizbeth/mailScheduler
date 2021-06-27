import React,{useState, useEffect} from 'react';
import './schedule.css';
import Axios from "axios";

function Schedule(){
    const user = localStorage.getItem("email");
    const [data, setData] = useState("");


    useEffect(() => {
        Axios.get(`https://maileasy.herokuapp.com/user/api/${user}/homepage`, {
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

        fetch(`https://maileasy.herokuapp.com/question/user`, {
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
            <div style={{marginBottom:20}}>Scheduled Emails</div>

            {data==="" || data===undefined?"":data.map((item)=>{
                return(
                    <div className="sche-card">
                        <div>
                            <div className="mail-desc">{item.subject}</div>
                <div className="sche-time">{item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[2]} {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[1]} {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[0]} | {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[4]} | {item.category} | Audience:{item.toEmail.length}</div>
                        
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Schedule;