import React, { useState, useEffect } from "react";
import './modal.css'
import { Link, Redirect } from "react-router-dom";




function Inputs(props){
    
    return (<div>
        {props.input==="Every Minute"?<div><input
                                    className='form-control px-3 my-4'
                                    type='subject'
                                    placeholder='Second'
                                    name='fromemail'
                                    onChange={(e) => {
                                        props.second(e.target.value);
                                    }}
                                    required
                                ></input ></div>:props.input==="Every Week"?<div><input
                className='form-control px-3 my-4'
                type='subject'
                placeholder='Second'
                name='fromemail'
                onChange={(e) => {
                    props.second(e.target.value);
                }}
                required
            ></input ><input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Minute'
            name='fromemail'
            onChange={(e) => {
                props.minute(e.target.value);
            }}
            required
        ></input >
        <input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Hour'
            name='fromemail'
            onChange={(e) => {
                props.hour(e.target.value);
            }}
            required
        ></input >
        <input
                className='form-control px-3 my-4'
                type='subject'
                placeholder='Day'
                name='fromemail'
                onChange={(e) => {
                    props.week(e.target.value);
                }}
                required
            ></input ></div>:props.input==="Every Month"?<div><input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Second'
            name='fromemail'
            onChange={(e) => {
                props.second(e.target.value);
            }}
            required
        ></input ><input
        className='form-control px-3 my-4'
        type='subject'
        placeholder='Minute'
        name='fromemail'
        onChange={(e) => {
            props.minute(e.target.value);
        }}
        required
    ></input >
    <input
        className='form-control px-3 my-4'
        type='subject'
        placeholder='Hour'
        name='fromemail'
        onChange={(e) => {
            props.hour(e.target.value);
        }}
        required
    ></input >
    <input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Day'
            name='fromemail'
            onChange={(e) => {
                props.day(e.target.value);
            }}
            required
        ></input >
        </div>:props.input==="Every Year"?<div><input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Second'
            name='fromemail'
            onChange={(e) => {
                props.second(e.target.value);
            }}
            required
        ></input ><input
        className='form-control px-3 my-4'
        type='subject'
        placeholder='Minute'
        name='fromemail'
        onChange={(e) => {
            props.minute(e.target.value);
        }}
        required
    ></input >
    <input
        className='form-control px-3 my-4'
        type='subject'
        placeholder='Hour'
        name='fromemail'
        onChange={(e) => {
            props.hour(e.target.value);
        }}
        required
    ></input >
    <input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Day'
            name='fromemail'
            onChange={(e) => {
                props.day(e.target.value);
            }}
            required
        ></input >
        <input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Month'
            name='fromemail'
            onChange={(e) => {
                props.month(e.target.value);
            }}
            required
        ></input ></div>:""}
    </div>)
}

function ActivityModal(props) {

    const [second, setSeconds] = useState("*");
    const [minute, setMinute] = useState("*");
    const [hour, setHour] = useState("*");
    const [day, setDay] = useState("*");
    const [week, setWeek] = useState("*");
    const [month, setMonth] = useState("*");
    
    const [body, setBody] = useState("");
    const [fromEmail, setFromEmail] = useState("");
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

    // function handlePrint(){
    //     const str = second.concat(" ",minute," ",hour," ",day," ", month," ", week);
    //     console.log(str);
        
    // }

    const uploadDetails = (e) => {
        
        const str1 = "<h1>"+body+"</h1>";
        const str = second.concat(" ",minute," ",hour," ",day," ", month," ", week);
        const token = localStorage.getItem("token");

        fetch(`http://localhost:8001/user/api/schedule`, {
            method: "POST",
            headers: {
                'content-type':'application/json',
                "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                toEmail:toEmail,
                fromEmail:fromEmail,
                subject:subject,
                body:body,
                html: str1,
                schedule: str
            }),
        })
            .then((r) => {
                if (r.status == 200) {
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
            <h5 className=' my-3'>Compose your mail </h5>
            <form className='form-group'>
                {/* <div class='form-group'>
                    <div className="qst-rules">
                        <ul>
                            <li>Make sure your question has not been asked already</li>
                            <li>Keep your question short and to the point</li>
                            <li>Make sure your question does not contain anything offensive or immoral</li>
                        </ul>
                    </div>
                    
                </div> */}
                <div class='form-group'>
                    {/* <div className="dropdown">
                        <button className="drop-btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {category}
                        </button>
                        <div class="dropdown-menu drop-it " aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("Entertainment")}}>Entertainment</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("News & Events")}}>News and Events</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("Arts & Sports")}}>Arts and Sports</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("Education & Reference")}}>Education and Reference</button>
                            <button className="dropdown-item drop-each" type="button" onClick={()=>{setCategory("Society & Lifestyle")}}>Society and Lifestyle</button>
                        </div>
                    </div> */}
                    <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='to email'
                                    name='toemail'
                                    onChange={(e) => {
                                        setToEmail(e.target.value);
                                    }}
                                    required
                                ></input >

                    <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='from email'
                                    name='fromemail'
                                    onChange={(e) => {
                                        setFromEmail(e.target.value);
                                    }}
                                    required
                                ></input >
                                <input
                                    className='form-control px-3 my-4'
                                    type='subject'
                                    placeholder='Subject'
                                    name='fromemail'
                                    onChange={(e) => {
                                        setSubject(e.target.value);
                                    }}
                                    required
                                ></input >
                    <textarea
                        className='form-control iin my-3'
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
                    {/* <button
                            className='btn start-btn col-6'
                            onClick={handlePrint}
                            type="submit"
                        >
                            Print
                        </button> */}
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