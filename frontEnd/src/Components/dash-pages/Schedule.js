import React from 'react';
import './schedule.css'
import {
    Link
} from "react-router-dom";
import {initData} from './data'

function Schedule(){
    return (
        <div>
            <div className="prev-tit">
                <span style={{marginLeft:-10}}>Scheduled Mails</span>
                <span ><Link className="view-all" to="/index/Explore">View all</Link></span>
            </div>
            {initData.map((item)=>{
                return(
                    <div className="sche-card">
                        <div>
                            <div className="mail-desc">{item.qst}</div>
                            <div className="sche-time">Time | Date</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Schedule;