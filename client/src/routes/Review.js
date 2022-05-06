import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import OrderTables from "../containers/OrderTables";

function Review() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/checkout';
        navigate(path);
    }

    return (
       <div>
       <div style={{textAlign: "center", marginTop:"5%"}}>
            <h2>Review the details of this car</h2>
           <h2>Daily odometer....</h2>
           <h2>Vehicle class....</h2>
       </div>
           <OrderTables />
           <div style={{textAlign: "center"}}>
           <button onClick={routeChange}>Continue</button>
           </div>
       </div>

    );
}

export default Review;
