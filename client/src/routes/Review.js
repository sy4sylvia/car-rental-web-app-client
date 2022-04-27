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
           <h2>Review the details of this car</h2>
           <h2>Daily odometer....</h2>
           <h2>Vehicle class....</h2>
           <OrderTables />
           <button onClick={routeChange}>Continue</button>
       </div>

    );
}

export default Review;
