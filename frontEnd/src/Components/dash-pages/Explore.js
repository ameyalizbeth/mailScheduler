import React,{useState, useEffect} from 'react';
import './schedule.css';
import Axios from "axios";

function Explore(){
    const user = localStorage.getItem("email");
    const [data, setData] = useState("");


    useEffect(() => {
        Axios.get(`https://maileasy.herokuapp.com/user/api/sendmails/${user}`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
            setData(response.data.result);
        });
    }, []);
    return (
        <div className="explore-main" style={{marginLeft:"50vh", marginTop:"30vh"}}>
            

            {data==="" || data===undefined?"":data.map((item)=>{
                return(
                    <div className="sche-card" style={{height:"auto"}}>
                        <div>
                            <div className="mail-desc">{item.subject}</div>
                <div className="sche-time">{item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[2]} {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[1]} {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[0]} | {item.dateAndTime===undefined?"":(item.dateAndTime.split(" "))[4]} | {item.category} | Audience:{item.toEmail.length}</div>
                
                {(item.toEmail).map((item)=>{
                    return(<p style={{fontSize:"0.75rem", color:"black", magin:"none"}}>{item}</p>)
                })}
                <p style={{fontSize:"small", color:"black"}}>{item.body}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Explore;