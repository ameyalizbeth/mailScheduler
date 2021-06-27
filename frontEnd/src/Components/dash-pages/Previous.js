import React,{useState,useEffect} from 'react';
import Axios from "axios";
import './prev.css'
import {initData} from './data'

function Previous(){

    const user = localStorage.getItem("email");
    const [data, setData] = useState("");


    useEffect(() => {
        Axios.get(`http://localhost:8001/user/api/sendmails/${user}`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
            setData(response.data.result);
        });
    }, []);

    return(

        <div>
            <div style={{marginBottom:20}}>Previous Emails</div>
            <div class="container">
                <div className="row prev-row">
            {data==="" || data===undefined?"":data.map((item)=>{
                return(
                   <div>{item===""?"":<div className="col-xl-6 card prev-card">
                   <div className="card-pad">{item.subject}
                   <p>{item.toEmail.length}</p>
                   </div>

               </div>}</div>
                         
                )
            })}
            </div>
            </div>
        </div>
    );
}


export default Previous;