import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


export default function UserAddressInfo() {
    //only note down address for individual customers
    const [address, setAddress] = useState({
        // street: "",
        cust_add_street:"",
        // apt:"",
        cust_add_unit:"",
        cust_add_city:"",
        city:"",
        // zipcode:"",
        cust_add_zipcode:"",
        // state:"",
        cust_add_state:"",
        cust_add_country:""
        // country:""
    });

    const handleAddressChange = (event) => {
        setAddress((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    };

    function handleClick(event) {
        event.preventDefault();
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        alert("address information submitted successfully.");
        let path = '/register';
        navigate(path);
    };

    return (
        <div className>
            <br />
            <h2>Address Book</h2>
            <h3>Let's start with filling out your address information.</h3>
            <br />
            <form onSubmit={handleClick} name = "address">
                <div className="input-container">
                    <label>Street</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Street" defaultValue={address.cust_add_street} />
                </div>

                <div className="input-container">
                    <label>Apt/Unit</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Unit(optional)" defaultValue={address.cust_add_unit} />
                </div>

                <div className="input-container">
                    <label>City</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="City" defaultValue={address.cust_add_city} />
                </div>

                <div className="input-container">
                    <label>State</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="State" defaultValue={address.cust_add_state} />
                </div>

                <div className="input-container">
                    <label>Country</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Country" defaultValue={address.cust_add_country} />
                </div>

                <div className="input-container">
                    <label>Zipcode</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Zipcode" defaultValue={address.cust_add_zipcode} />
                </div>
                <button onClick={routeChange}>Submit Address Information</button>
            </form>

        </div>
    );
}