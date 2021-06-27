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
        const d = new Date();
        const str1 = "<h1>"+body+"</h1>";
        const str = second.concat(" ",minute," ",hour," ",day," ", month," ", week);
        const token = localStorage.getItem("token");
        const d = new Date();
        fetch(`http://localhost:8001/user/api/schedule`, {
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
                count: toEmail.split(",").length,
                category:category,
                dateAndTime: d.toString()
            }),
        })
            .then((r) => {
                if (r.status == 200) {
                    console.log(toEmail.split(','));
                    
                    alert("Question added successfully");
                } else if (r.status == 422) alert("Invalid File format");
                else if (r.status == 401) alert("Authentication error");
            })
            .catch((err) => console.log(err));

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
                    
                    {/* <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='to email'
                                    name='toemail'
                                    onChange={(e) => {
                                        setToEmail(e.target.value);
                                    }}
                                    required
                                ></input > */}
{/* 
                    <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='from email'
                                    name='fromemail'
                                    onChange={(e) => {
                                        setFromEmail(e.target.value);
                                    }}
                                    required
                                ></input > */}
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
                
                <div className='my-2 d-flex justify-content-end align-items-center'>
                    
                    <div>
                        
                        
                        {schedule===true?<div><div className="dropdown">
                        <button className="drop-btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {category}
                        </button>
                        <div class="dropdown-menu drop-it " aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("Every Minute")}}>Every Minute</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("Every Week")}}>Every Week</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("Every Month")}}>Every Month</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("Every Year")}}>Every Year</button>
                        </div>
                    </div>
                    <Inputs input={category} second={sec} minute={min} hour={hr} day={dy} month={mnth} week={wk}/>
                    <button
                            className='btn start-btn col-6'
                            onClick={handlePrint}
                            type="submit"
                        >
                            Print
                        </button>
                    <button
                            className='btn start-btn col-6'
                            onClick={handleSchedule}
                            type="submit"
                        >
                            Cancel
                        </button></div>:<div>
                        <button
                            className='btn start-btn col-6'
                            onClick={handleSchedule}
                            type="submit"
                        >
                            Schedule
                        </button></div>}
                        <div>
                        <button
                            type='button'
                            class=' btn ml-auto py-3 px-4'
                            data-dismiss='modal'
                            aria-label='Close'
                            style={{color:"#fff"}}
                        >
                            Cancel
                        </button>
                    </div>
                    </div>
                </div>
                <button
                            className='btn start-btn col-6'
                            onClick={uploadDetails}
                            type="submit"
                        >
                            Send
                        </button>

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