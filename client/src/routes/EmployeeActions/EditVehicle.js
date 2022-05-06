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


    const [vehicleInfo, setVehicleInfo] = useState({
        make: "",
        model: "",
        year: "",
        vin: "",
        licencePlateNumber: ""
    });

    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [vin, setVIN] = useState("");
    const [licPlateNo, setLicPlateNo] = useState("");

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






    const handleEditVehicle = event => {
        event.preventDefault();

        //testing
        alert("Edited vehicle information successfully!");
        console.log("Edited vehicle information successfully!");

        axios.post("http://127.0.0.1:5000/edit-vehicle", {





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


                {/*<button onClick={routeChange}>Log in</button>*/}
                <div>
                    <button onClick>Confirm Update</button>
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