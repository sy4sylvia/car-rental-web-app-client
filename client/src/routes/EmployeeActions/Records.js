import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Records(){
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/employee-login';
        navigate(path);
    }

    const updateVehicle = () =>{
        let path = '/edit-vehicle';
        navigate(path);
    }

    const updateOrder = () =>{
        let path = '/update-order';
        navigate(path);
    }

    return (
        <div className="container">
            <h3>Records maintained by employees.
            </h3>

            <div className="input-container">
                <button onClick={updateVehicle}>Edit vehicle information</button>
            </div>

            <div>
                <br/>
            </div>

            <h2>end odometers etc</h2>
            <h2>Vehicle class....</h2>


            <div className="input-container">
                <button onClick={updateOrder}>Update order information</button>
            </div>





            <br/>
            <h2>Safely Log Out</h2>
            <button onClick={routeChange}>Log out</button>
            {/*for employee - log out and redirect to the log in page*/}
        </div>
    );
}

export default Records;