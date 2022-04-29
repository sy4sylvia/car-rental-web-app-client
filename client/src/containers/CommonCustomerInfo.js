import React, {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";

//added
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const validPhone= (value) => {
    if (value.length !== 10) {
        return (
            <div className="alert alert-danger" role="alert">
                The phone number must has 10 digits.
            </div>
        );
    }
};


const validPassword = (value) => {
    if (value.length < 6 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 20 characters.
            </div>
        );
    }
};

function CommonCustomerInfo() {

    const form = useRef();
    const checkBtn = useRef();
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");


    const [customerInfo, setCustomerInfo] = useState({
        email:"",
        phone:"",
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
    }

    function handleRegister(event) { //click submitting form button
        event.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(customerInfo.email, customerInfo.phone, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response && error.response.data && error.response.data.message)
                        || error.message || error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
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
            <Form onSubmit={handleRegister} name = "information" ref={form}>
                {!successful &&
                    (
                        <div>
                            <div className="input-container">
                                <label>Email</label>
                                <Input className = "input-form-box" onChange = {handleCustomerInfoChange}
                                       type="text" placeholder="Email" defaultValue={customerInfo.email}
                                       validations={[required, validEmail]} />
                            </div>

                            <div className="input-container">
                                <label>Mobile Phone</label>
                                <Input className = "input-form-box" onChange = {handleCustomerInfoChange}
                                       type="text" placeholder="Mobile Phone" defaultValue={customerInfo.phone}
                                       validations = {[required, validPhone]} />
                            </div>

                            <div className="input-container">
                                <label>Password</label>
                                <Input className = "input-form-box" onChange = {handlePasswordChange}
                                       type="password" placeholder="Password" defaultValue={password}
                                       validations = {[required, validPassword]}/>
                            </div>

                            {/*<button onClick={routeChange}>Submit</button>*/}
                            <div>
                                <button>Submit</button>
                            </div>
                        </div>
                    )

                }

                {message &&
                    (<div className="form-group">
                            <div
                                className={ successful ? "alert alert-success" : "alert alert-danger" }
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>

        </div>
    );
}

export default CommonCustomerInfo;