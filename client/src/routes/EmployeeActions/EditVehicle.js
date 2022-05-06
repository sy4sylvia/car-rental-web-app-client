import React, {useState,useRef } from 'react';
import {useNavigate} from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";

function EditVehicle(){
    const required = (value) => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            );
        }
    };

    const form = useRef();
    const checkBtn = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");


    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [vin, setVIN] = useState("");
    const [licPlateNo, setLicPlateNo] = useState("");
    const [vehicleClassId, setVehicleClassId] = useState("");
    const [officeId, setOfficeId] = useState("");

    const handleMakeChange = (event) => {
        setMake(event.target.value);
    }
    const handleModelChange = (event) => {
        setModel(event.target.value);
    }
    const handleYearChange = (event) => {
        setYear(event.target.value);
    }
    const handleVINChange = (event) => {
        setVIN(event.target.value);
    }
    const handleLicPlateNoChange = (event) => {
        setLicPlateNo(event.target.value);
    }
    const handleVehicleClassChange = (event) => {
        setVehicleClassId(event.target.value);
    }
    const handleOfficeIdChange = (event) => {
        setOfficeId(event.target.value);
    }





    const handleEditVehicle = event => {
        event.preventDefault();

        //testing
        alert("Edited vehicle information successfully!");
        console.log("Edited vehicle information successfully!");

        axios.post("http://127.0.0.1:5000/edit-vehicle", {
            make: make,
            model: model,
            year: year,
            vin:vin,
            lic_plt_num: licPlateNo,
            class_id: vehicleClassId,
            office_id: officeId


        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

        setMessage("");
        setLoading(true);
        // form.current.validateAll();

    }

    let navigate = useNavigate();


    return (
        <div className="container">
            <h1>Edit Vehicle Information</h1>

            <br/>
            <Form onSubmit={handleEditVehicle} name = "information" ref={form}>

                <div className="input-container">
                    <label>Make</label>
                    <Input onChange = {handleMakeChange} type="text"
                           placeholder="Make" defaultValue={make}
                           validations={[required]} />
                </div>
                <div className="input-container">
                    <label>Model</label>
                    <Input onChange = {handleModelChange} type="text"
                           placeholder="Model" defaultValue={model}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Year of Manufacturing</label>
                    <Input onChange = {handleYearChange} type="text"
                           placeholder="Year" defaultValue={year}
                           validations={[required]} />
                </div>
                <div className="input-container">
                    <label>VIN</label>
                    <Input onChange = {handleVINChange} type="text"
                           placeholder="VIN" defaultValue={vin}
                           validations={[required]} />
                </div>
                <div className="input-container">
                    <label>License Plate Number</label>
                    <Input onChange = {handleLicPlateNoChange} type="text"
                           placeholder="License Plate No" defaultValue={licPlateNo}
                           validations={[required]} />
                </div>


                <div className="input-container">
                    <label>Vehicle Class ID</label>
                    <Input onChange = {handleVehicleClassChange} type="text"
                           placeholder="Vehicle Class ID" defaultValue={vehicleClassId}
                           validations={[required]} />
                </div>
                <div className="input-container">
                    <label>Office ID</label>
                    <Input onChange = {handleOfficeIdChange} type="text"
                           placeholder="Office ID" defaultValue={officeId}
                           validations={[required]} />
                </div>

                {/*<button onClick={routeChange}>Log in</button>*/}
                <div>
                    <button onClick>Confirm</button>
                </div>

                <br />

                <div>
                    <button onClick={() => {
                        navigate('/employee-profile')}}>
                        Go Back</button>
                </div>

            </Form>

        </div>
    );
}

export default EditVehicle;