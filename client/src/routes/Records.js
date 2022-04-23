import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Records(){
    //route change after checking for corporate discount
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/home';
        navigate(path);
    }

    return (
        <div className="container">
            <h3>Records maintained by employees.
            </h3>
            <br/>
            <button onClick={routeChange}>Take Me to Home</button>

        </div>
    );
}

export default Records;