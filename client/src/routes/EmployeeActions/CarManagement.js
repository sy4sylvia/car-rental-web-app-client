import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function CarManagement() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/';
        navigate(path);
    }

    return (
        <div>
            <h2>Review the details of which office has what kind of cars????</h2>
            <h2>What kind of records should the employee access?????</h2>
            <h2>Vehicle class....</h2>
            <div style={{textAlign: "center"}}>
                <button onClick={routeChange} >Back To Home</button>
            </div>

        </div>

    );
}

export default CarManagement;
