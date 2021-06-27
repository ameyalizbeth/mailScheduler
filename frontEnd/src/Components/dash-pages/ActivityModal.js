import React, { useState, useEffect } from "react";
import './modal.css'
import { Link, Redirect } from "react-router-dom";
import Inputs from './Input';




function ActivityModal(props) {

    const [second, setSeconds] = useState("*");
    const [minute, setMinute] = useState("*");
    const [hour, setHour] = useState("*");
    const [day, setDay] = useState("*");
    const [week, setWeek] = useState("*");
    const [month, setMonth] = useState("*");
    const [schedulePlan, setSchedulePlan] = useState("None");
    
    const [body, setBody] = useState("");
    // const [fromEmail, setFromEmail] = useState("");
    const [toEmail, setToEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [schedule, setSchedule] = useState(false);
    const [category, setCategory] = useState("Select category");
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");


    function handleSchedule(){
        schedule===false?setSchedule(true):setSchedule(false);
    }

    function sec(val){
        setSeconds(val);
    }
    function min(val){
        setMinute(val);
    }
    function hr(val){
        setHour(val);
    }
    function dy(val){
        setDay(val);
    }
    function mnth(val){
        setMonth(val);
    }
    function wk(val){
        setWeek(val);
    }

    function handlePrint(){
        const str = second.concat(" ",minute," ",hour," ",day," ", month," ", week);
        console.log(str);
        console.log(toEmail.split(","));
    }

    const uploadDetails = (e) => {
        const str1 = "<h1>"+body+"</h1>";
        const str = second.concat(" ",minute," ",hour," ",day," ", month," ", week);
        const token = localStorage.getItem("token");
        const d = new Date();
        if(schedulePlan!=="None"){
            fetch(`https://maileasy.herokuapp.com/user/api/schedule`, {
                method: "POST",
                headers: {
                    'content-type':'application/json',
                    "x-access-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    toEmail:toEmail.split(","),
                    fromEmail:localStorage.getItem("email"),
                    subject:subject,
                    body:body,
                    html: str1,
                    schedule: str,
                    count:(toEmail.split(",")).length,
                    category:schedulePlan,
                    dateAndTime: d.toString()
                }),
            })
                .then((r) => {
                    console.log(r);
                    
                    if (r.status == 200) {                    
                        alert("Mail send successfully");
                    } else if (r.status == 422) alert("Invalid File format");
                    else if (r.status == 401) alert("Authentication error");
                })
                .catch((err) => console.log(err));
        }
        
            else{
                fetch(`https://maileasy.herokuapp.com/user/api/sendone`, {
                    method: "POST",
                    headers: {
                        'content-type':'application/json',
                        "x-access-token": localStorage.getItem("token"),
                    },
                    body: JSON.stringify({
                        toEmail:toEmail.split(","),
                        fromEmail:localStorage.getItem("email"),
                        subject:subject,
                        body:body,
                        html: str1,
                        schedule: str,
                        count:(toEmail.split(",")).length,
                        category:schedulePlan,
                        dateAndTime: d.toString()
                    }),
                })
                    .then((r) => {
                        console.log(r);
                        
                        if (r.status == 200) {                    
                            alert("Mail send successfully");
                        } else if (r.status == 422) alert("Invalid File format");
                        else if (r.status == 401) alert("Authentication error");
                    })
                    .catch((err) => console.log(err));
        
            }
            
    };
    if (!token) {
        return <Redirect to='/login' />;
    }

    return (
        <div className=' mx-5 my-3'>
            <h5 className='modal-heading my-3'>Compose your mail </h5>
            <form className='form-group'>
                
                <div class='form-group'>
                <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">To</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" onChange={(e) => {
                                        setToEmail(e.target.value);
                                    }} required/>
    </div>
  </div>
                                <input
                                    className='form-control subject px-3'
                                    type='subject'
                                    placeholder='Subject'
                                    name='subject'
                                    onChange={(e) => {
                                        setSubject(e.target.value);
                                    }}
                                    required
                                ></input >
                    <textarea
                        className='form-control iin'
                        type='text'
                        placeholder='Write the body'
                        name='question'
                        onChange={(e) => {
                            setBody(e.target.value);
                        }}
                        required
                    ></textarea>
                </div>
                
                <div className='my-2 d-flex align-items-center'>
                    
                    <div>
                        
                    <h5 className='modal-heading my-3'>Schedule your mail </h5>
                    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-8 col-form-label">Choose your schedule plan</label>
    <div class="col-sm-4">
    <div className="dropdown">
                        <button className="drop-btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {schedulePlan}
                        </button>
                        <div class="dropdown-menu drop-it " aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setSchedulePlan("Every Minute")}}>Every Minute</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setSchedulePlan("Every Week")}}>Every Week</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setSchedulePlan("Every Month")}}>Every Month</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setSchedulePlan("Every Year")}}>Every Year</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setSchedulePlan("None")}}>None</button>
                        </div>
                    </div>
    </div>
  </div>
                    

                        {schedulePlan!=="None"?<div>
                    <Inputs input={schedulePlan} second={sec} minute={min} hour={hr} day={dy} month={mnth} week={wk}/>
                   
                   </div>:""}
                        
                        <button
                            type='button'
                            class=' btn cancel-btn ml-auto py-3 px-4'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            Cancel
                        </button>
                        <button
                            className='btn send-btn col-6'
                            onClick={uploadDetails}
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </div>
                

                {/* <p
                    style={{
                        color: "red",
                        fontSize: 12,
                        textAlign: "center",
                    }}
                >
                    {message}
                </p> */}
            </form>
        </div>
    );
}

export default ActivityModal;
