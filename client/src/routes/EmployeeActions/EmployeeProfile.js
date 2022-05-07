import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";

//this is where employee can be redirected to other pages
function EmployeeProfile() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/employee-login';
        navigate(path);
    }

    const deleteCustomers = () =>{
        let path = '/delete-customers';
        navigate(path);
    }

    const editVehicle = () =>{
        let path = '/insert-vehicle';
        navigate(path);
    }
    const editVehicleClass = () =>{
        let path = '/insert-vehicle-class';
        navigate(path);
    }

    const updateOrder = () =>{
        let path = '/dropoff-order';
        navigate(path);
    }

    function handleEmployeeLogout(event) {
        AuthService.logout();
        navigate('/employee-login');
        // localStorage.removeItem(""); //access token
    }

    return (
        <div className="container">
            <h1>Employee Profile</h1>
            <div>
                <br/>
            </div>

            <div className>
                <button onClick={deleteCustomers}>Delete Customers</button>
            </div>

            <div>
                <br/>
            </div>

            <div className>
                <button onClick={editVehicleClass}>Insert Vehicle Class Information</button>
            </div>

            <div>
                <br/>
            </div>


            <div className>
                <button onClick={editVehicle}>Edit Vehicle Information</button>
            </div>

            <div>
                <br/>
            </div>

            <div className="input-container">
                <button onClick={updateOrder}>Drop off Order Information</button>
            </div>

            <br/>
            <h2>Log Out</h2>
            <button onClick={handleEmployeeLogout} style = {{width: "13%"}}>Log out</button>
            {/*for employee - log out and redirect to the login page*/}
        </div>


    );
}



export default EmployeeProfile;