import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function EditOrderDetails() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/';
        navigate(path);
    }

    return (
        <div>
            <h2>end odometres etc</h2>
            <h2>Vehicle class....</h2>
            <div style={{textAlign: "center"}}>
                <button onClick={routeChange} >Back To Home</button>
            </div>

        </div>

    );
}

export default EditOrderDetails;
