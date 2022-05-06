import React, {useState, useRef} from 'react';
import {useNavigate} from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import axios from "axios";

function UpdateOrder(){
    const required = (value) => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            );
        }
    };

    const [customerId, setCustomerId] = useState("");
    const [endOdometer, setEndOdometer] = useState("");
    const [dropOffOfficeId, setDropOffOfficeId] = useState("");

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleCustomerIdChange = (event) => {
        setCustomerId(event.target.value);
        //value given by the customer
    }
    const handleEndOdometerChange = (event) => {
        setEndOdometer(event.target.value);
    }
    const handleDropOffOfficeIdChange = (event) => {
        setDropOffOfficeId(event.target.value);
    }


    const handleSubmitForm = event => {
        event.preventDefault();

        //testing
        alert("Updated order information successfully!");
        console.log("Updated order information successfully!!");

        axios.post("http://127.0.0.1:5000/update-order", {
            cust_customer_id: customerId,
            end_odometer: endOdometer,
            dropoff_office_id: dropOffOfficeId



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
            <h1>Update Order Information</h1>

            <br/>
            <Form onSubmit={handleSubmitForm} name = "information" ref={form}>

                <div className="input-container">
                    <label>Customer WOW No.</label>
                    <Input onChange = {handleCustomerIdChange} type="text"
                           placeholder="Customer Id" defaultValue={customerId}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>End Odometer</label>
                    <Input onChange = {handleEndOdometerChange} type="text"
                           placeholder="End Odometer" defaultValue={endOdometer}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Drop Off Location</label>
                    <Input onChange = {handleDropOffOfficeIdChange} type="text"
                           placeholder="Drop Off Location" defaultValue={dropOffOfficeId}
                           validations={[required]} />
                </div>


                {/*<div className="input-container">*/}
                {/*    <label>Drop Off Date</label>*/}
                {/*    <Input onChange = {handleDropOffChange} type="text"*/}
                {/*           placeholder="Drop Off Date" defaultValue={dropOffInfo.dropOffDate}*/}
                {/*           validations={[required]} />*/}
                {/*</div>*/}
                <br/>


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

export default UpdateOrder;