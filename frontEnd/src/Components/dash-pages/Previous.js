import React from 'react';
import './prev.css'
import {
    Link
} from "react-router-dom";
import {initData} from './data'

function Previous(){
    return(

        <div>
            <div className="prev-tit">
                <span>Sent Mails</span>
                <span ><Link className="view-all" to="/index/Explore">View all</Link></span>
            </div>
            <div class="container">
                <div className="row prev-row">
            {initData.map((item)=>{
                return(
                    
                    <div className="col-xl-6 card prev-card">
                        <div className="card-pad">{item.name}</div>
                    </div>     
                )
            })}
            </div>
            </div>
        </div>
    );
}


export default Previous;