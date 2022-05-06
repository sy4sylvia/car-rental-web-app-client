import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function DeleteCustomers() {
    const [customerId, setCustomerId] = useState("");


    const handleCustomerIdChange = (event) => {
        setCustomerId(event.target.value);
    }


    function handleDeleteCustomer(event) {
        // form would refresh the page
        event.preventDefault();
        alert("Successfully deleted customer record");
        console.log("Successfully deleted customer record");
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/employee-profile';
        navigate(path);
    }


    return(
        <div className="container">
            <h1>Delete Customers</h1>
            <Form onSubmit={handleDeleteCustomer} name = "information">
                <div className="input-container">
                    <label>Customer WOW No.</label>
                    <Input onChange = {handleCustomerIdChange} type="text"
                           placeholder="Customer Id" defaultValue={customerId}
                           validations={[required]} />
                </div>

                {/*<div className="input-container">*/}
                {/*    <label>Password</label>*/}
                {/*    <Input onChange = {handlePasswordChange} type="password"*/}
                {/*           placeholder="Password" defaultValue={password}*/}
                {/*           validations={[required]} />*/}
                {/*</div>*/}

                <div>
                    <button>Confirm Deletion</button>
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

export default DeleteCustomers;