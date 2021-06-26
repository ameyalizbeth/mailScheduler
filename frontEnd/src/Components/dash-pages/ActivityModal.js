import React, { useState, useEffect } from "react";
import './modal.css'
import { Link, Redirect } from "react-router-dom";




function ActivityModal(props) {
    
    const [body, setBody] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [toEmail, setToEmail] = useState("");
    const [subject, setSubject] = useState("");
    
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");


    const uploadDetails = (e) => {
        
        const str1 = "<h1>"+body+"</h1>";
        
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
                body:str1
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
            <h5 className=' my-3'>Ask Your Question </h5>
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
                                    placeholder='from email'
                                    name='fromemail'
                                    onChange={(e) => {
                                        setSubject(e.target.value);
                                    }}
                                    required
                                ></input >
                    <textarea
                        className='form-control iin my-3'
                        type='text'
                        placeholder='Write your Question'
                        name='question'
                        onChange={(e) => {
                            setBody(e.target.value);
                        }}
                        required
                    ></textarea>
                </div>
                
                <div className='my-2 d-flex justify-content-end align-items-center'>
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
                    <div>
                        <button
                            className='btn start-btn col-6'
                            onClick={uploadDetails}
                            type="submit"
                        >
                            Ask Question
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