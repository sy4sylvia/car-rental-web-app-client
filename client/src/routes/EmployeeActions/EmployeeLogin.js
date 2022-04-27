//essentially -> similar to log in
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function EmployeeLogin(){
    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");

    const handleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
        //actually not set...?send data back to database and verify?
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        //actually not set...?send data back to database and verify?
    }

    function handleClick(event) {
        // form would refresh the page
        event.preventDefault();
        //verify login information in the backend?
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/records';
        navigate(path);
    }


    return (
        <div className="container">
            <h1>Log in (Employee)</h1>
            <h3>We're honored to have you has part of our company.</h3>
            <br/>
            <form onSubmit={handleClick} name = "information">
                <div className="input-container">
                    <label>Employee ID</label>
                    <input onChange = {handleEmployeeIdChange} type="text" placeholder="Employee Id" value={employeeId} />
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <input onChange = {handlePasswordChange} type="text" placeholder="Password" value={password} />
                </div>

                <button onClick={routeChange}>Log in</button>
            </form>

        </div>
    );
}

export default EmployeeLogin;