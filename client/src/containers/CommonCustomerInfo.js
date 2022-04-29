import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function CommonCustomerInfo() {
    const [customerInfo, setCustomerInfo] = useState({
        cust_email_address:"",
        cust_phone_number:"",
    });

    const [password, setPassword] = useState("");

    const handleCustomerInfoChange = (event) => {
        setCustomerInfo((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        //when would encryption process be handled?
    }

    function handleClick(event) {
        event.preventDefault();
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        alert("personal information submitted successfully.");
        let path = '/register'; //stay the same
        navigate(path);
    };


    return (
        <div className>
            <br />
            <h2>Personal Information</h2>
            {/*<h3>Let's start with filling out your information.</h3>*/}
            <form onSubmit={handleClick} name = "information">
                <div className="input-container">
                    <label>Email</label>
                    <input className = "input-form-box" onChange = {handleCustomerInfoChange} type="text" placeholder="Email" defaultValue={customerInfo.cust_email_address} />
                </div>

                {/*change password - another route*/}
                <div className="input-container">
                    <label>Mobile Phone</label>
                    <input className = "input-form-box" onChange = {handleCustomerInfoChange} type="text" placeholder="Mobile Phone" defaultValue={customerInfo.cust_phone_number} />
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <input className = "input-form-box" onChange = {handlePasswordChange} type="text" placeholder="Password" defaultValue={password} />
                </div>

                <button onClick={routeChange}>Submit</button>
            </form>

        </div>
    );
}