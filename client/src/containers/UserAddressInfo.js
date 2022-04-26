import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


export default function UserAddressInfo() {
    const [address, setAddress] = useState({
        street: "",
        apt:"",
        city:"",
        zipcode:"",
        state:"",
        country:""
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
        let path = '/user-profile';
        navigate(path);
    };


    return (
        <div className="container">
            <h3>Address Book</h3>
            <p>Please edit your address here.</p>
            <form onSubmit={handleClick} name = "address">
                <div className="input-container">
                    <label>Street</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Street" value={address.street} />
                </div>

                <div className="input-container">
                    <label>Apt/Unit</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Apt(optional)" value={address.apt} />
                </div>

                <div className="input-container">
                    <label>City</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="City" value={address.city} />
                </div>

                <div className="input-container">
                    <label>State</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="State" value={address.state} />
                </div>

                <div className="input-container">
                    <label>Country</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Country" value={address.country} />
                </div>

                <div className="input-container">
                    <label>Zipcode</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Zipcode" value={address.zipcode} />
                </div>
                <button onClick={routeChange}>Submit</button>
            </form>

        </div>
    );
}