import React from 'react';
import Cards from './Cards';
import Schedule from './Schedule';
import Previous from './Previous';
import './dash.css'

function Dash(){
    return (
        <div className="dash-main">
            {/* <div className="card-main">
                <Cards/>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 schedule-main">
                        <Schedule/>
                    </div>
                    <div className="col-xl-6 previous-main">
                        <Previous/>
                    </div>
                </div>
            </div>
            
           
        </div>
            
    );
}


export default Dash;