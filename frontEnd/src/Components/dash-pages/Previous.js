import React from 'react';
import './prev.css'
import {initData} from './data'

function Previous(){
    return(

        <div>
            <div style={{marginBottom:20}}>Previous Emails</div>
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