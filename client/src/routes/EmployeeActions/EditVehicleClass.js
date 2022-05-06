import React, {useState,useRef } from 'react';
import {useNavigate} from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";

function EditVehicleClass(){
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

    const[overMileageFee, setOverMileageFee] = useState("");
    const handleOverMileageFeeChange = (event) => {
        setOverMileageFee(event.target.value);
    }

    const[rentalRate, setRentalRate] = useState("");
    const handleRentalRateChange = (event) => {
        setRentalRate(event.target.value);
    }
    const[className, setClassName] = useState("");
    const handleClassNameChange = (event) => {
        setClassName(event.target.value);
    }


    const handleEditVehicleClass = event => {
        event.preventDefault();

        //testing
        alert("Edited vehicle information successfully!");
        console.log("Edited vehicle class information successfully!");
        axios.post("http://127.0.0.1:5000/edit-vehicle-class", {
            over_mileage_fee: overMileageFee,
            rental_rate: rentalRate,
            class_name: className

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
            <h1>Insert Vehicle Class Information</h1>

            <br/>
            <Form onSubmit={handleEditVehicleClass} name = "information" ref={form}>

                <div className="input-container">
                    <label>Class Name</label>
                    <Input onChange = {handleClassNameChange} type="text"
                           placeholder="Class Name" defaultValue={className}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Rental Rate</label>
                    <Input onChange = {handleRentalRateChange} type="text"
                           placeholder="Rental Rate" defaultValue={rentalRate}
                           validations={[required]} />
                </div>



                <div className="input-container">
                    <label>Over Mileage Fee</label>
                    <Input onChange = {handleOverMileageFeeChange} type="text"
                           placeholder="Over Mileage Fee" defaultValue={overMileageFee}
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

export default EditVehicleClass;