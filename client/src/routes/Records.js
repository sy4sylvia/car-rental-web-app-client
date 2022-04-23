import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Records(){
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/employee';
        navigate(path);
    }

    return (
        <div className="container">
            <h3>Records maintained by employees.
            </h3>
            <br/>
            <button onClick={routeChange}>Log out</button>
            {/*for employee - log out and redirect to the log in page*/}
        </div>
    );
}

export default Records;