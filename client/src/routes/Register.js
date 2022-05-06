import React, {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import "../index.css"
import axios from "axios";
import {Checkbox} from "@mui/material";

//⭐️⭐️⭐️⭐️⭐

//constraints on input fields
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


function Register(){
    const form = useRef();
    const checkBtn = useRef();
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    //common customer info
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

    //address information
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [address, setAddress] = useState({
        street: "",
        apt:"",
        city:"",
        state:"",
        country:"",
        zipcode:""
    });
    const handleAddressChange = (event) => {
        setAddress((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    };

    //corporate or individual -> checkbox group
    //depending on which box is checked -> I / C in the database
    const [checkedIndividual, setCheckedIndividual] = useState(false);
    // const handleCheckboxIndividual = (event) => {
    //     setCheckedIndividual(event.target.value);
    // };
    const handleCheckboxIndividual = () => {
        setCheckedIndividual(!checkedIndividual);
    };

    const [checkedCorporate, setCheckedCorporate] = useState(false);
    // const handleCheckboxCorporate = (event) => {
    //     setCheckedCorporate(event.target.value);
    // };
    const handleCheckboxCorporate = () => {
        setCheckedCorporate(!checkedCorporate);
    };


    //individual personal info - first name, etcs
    const[indCustInfo, setIndCustInfo] = useState({
        firstName: "",
        middleName:"",
        lastName:"",
        driverLicenseNo:"",
        insuranceCompanyName:"", //insurance company name -> ins_com_name
        insurancePolicyNo:"" //insurance policy number -> ins_pol_num
    });

    const handleIndividualInformationChange = (event) => {
        setIndCustInfo(event.target.value);
    };

    //corporate customer information
    const[corpCustInfo, setCorpCustInfo] = useState({
        //corporate name no longer selected from selections -> input instead
        corporateName:"",
        registrationNo:"",
        empId: "", //employee id -> database: emp_id
    });

    const handleCorpCustInfoChange = (event) => {
        setCorpCustInfo((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    };

















    function handleRegister(event) { //click submitting form button
        event.preventDefault();
        console.log("handled registration");

        axios.post("http://127.0.0.1:5000/register", {
            email: customerInfo.email,
            password: password,


            zipcode: address.zipcode,




        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

        setMessage("");
        setSuccessful(false);

        //following: validation -> token

        // form.current.validateAll();
        //
        // if (checkBtn.current.context._errors.length === 0) {
        //     AuthService.register(customerInfo.email, customerInfo.phone, password).then(
        //         (response) => {
        //             setMessage(response.data.message);
        //             setSuccessful(true);
        //         },
        //         (error) => {
        //             const resMessage =
        //                 (error.response && error.response.data && error.response.data.message)
        //                 || error.message || error.toString();
        //             setMessage(resMessage);
        //             setSuccessful(false);
        //         }
        //     );
        // }
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        alert("personal information submitted successfully.");
        console.log("registration: successful");
        let path = '/login';
        navigate(path);
    }


    return (
        <div className="container">
            <h1>Register</h1>
            <h3>
                Nice to meet you!
                <br/>
                Register and book your ride today!
            </h3>
            <br/>
            <div>
                <p>
                    Already have an account? Log in here.
                    <br /></p>
                <button onClick={routeChange} style={{width: "10%"}}>
                    Log in
                </button>
            </div>

            <br/>
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

                            <div>
                                <h2>Address Book</h2>
                            </div>

                            <div className="input-container">
                                <label>Street</label>
                                <input className = "input-form-box" onChange = {handleAddressChange}
                                       type="text" placeholder="Street" defaultValue={address.street} />
                            </div>

                            <div className="input-container">
                                <label>Apt/Unit</label>
                                <input className = "input-form-box" onChange = {handleAddressChange}
                                       type="text" placeholder="Unit(optional)" defaultValue={address.apt} />
                            </div>

                            <div className="input-container">
                                <label>City</label>
                                <input className = "input-form-box" onChange = {handleAddressChange}
                                       type="text" placeholder="City" defaultValue={address.city} />
                            </div>

                            <div className="input-container">
                                <label>State</label>
                                <input className = "input-form-box" onChange = {handleAddressChange}
                                       type="text" placeholder="State" defaultValue={address.state} />
                            </div>

                            <div className="input-container">
                                <label>Country</label>
                                <input className = "input-form-box" onChange = {handleAddressChange}
                                       type="text" placeholder="Country" defaultValue={address.country} />
                            </div>

                            <div className="input-container">
                                <label>Zipcode</label>
                                <input className = "input-form-box" onChange = {handleAddressChange}
                                       type="text" placeholder="Zipcode" defaultValue={address.zipcode} />
                            </div>
                            {/*<button onClick={handleSaveAddressInfo}>Submit Address Information</button>*/}

                            <br />
                            <h2>Belong to a company? {" "}
                            </h2>

                            <h3>

                                {/*<input type="checkbox" id="topping" name="topping"*/}
                                {/*       value={checkedIndividual} />*/}


                                <Checkbox
                                    value={checkedIndividual}
                                    onChange={handleCheckboxIndividual}
                                    label="Value 1"
                                    // inputProps={{ 'aria-label': 'controlled' }}
                                />
                                "No - continue as an individual customer"
                                <br />

                                <Checkbox
                                    value={checkedCorporate}
                                    onChange={handleCheckboxCorporate}
                                    // onChange to be changed to post type???
                                    label="Value 2"
                                />
                                "Yes - please scroll down to the bottom to register as a corporate customer👇🏻👇👇🏾"


                            </h3>
                            <h2> Personal Information (for individual customer)</h2>

                            <div className="input-container">
                                <label>First Name</label>
                                <input className = "input-form-box" onChange = {handleIndividualInformationChange}
                                       type="text" placeholder="First Name" defaultValue={indCustInfo.firstName} />
                            </div>

                            <div className="input-container">
                                <label>Middle Name</label>
                                <input className = "input-form-box" onChange = {handleIndividualInformationChange}
                                       type="text" placeholder="Middle Name(optional)" defaultValue={indCustInfo.middleName} />
                            </div>

                            <div className="input-container">
                                <label>Last Name</label>
                                <input className = "input-form-box" onChange = {handleIndividualInformationChange}
                                       type="text" placeholder="Last Name" defaultValue={indCustInfo.lastName} />
                            </div>

                            {/*change password - another route*/}

                            <div className="input-container">
                                <label>Driver License Number</label>
                                <input className = "input-form-box" onChange = {handleIndividualInformationChange}
                                       type="text" placeholder="Driver License Number" defaultValue={indCustInfo.driverLicenseNo} />
                            </div>

                            <div className="input-container">
                                <label>Insurance Company</label>
                                <input className = "input-form-box" onChange = {handleIndividualInformationChange}
                                       type="text" placeholder="Insurance Company" defaultValue={indCustInfo.insuranceCompanyName} />
                            </div>

                            <div className="input-container">
                                <label>Insurance Policy Number</label>
                                <input className = "input-form-box" onChange = {handleIndividualInformationChange}
                                       type="text" placeholder="Insurance Policy Number" defaultValue={indCustInfo.insurancePolicyNo} />
                            </div>



                            <h3>
                                <br />
                                Register for corporate account with corporate discount only!
                            </h3>



                            {/*<CorpCustomerInfo />*/}
                            <div className="input-container">
                                <label>Corporate Name</label>
                                <input className = "input-form-box" onChange = {handleCorpCustInfoChange}
                                       type="text" placeholder="Corporate Name" defaultValue={corpCustInfo.corporateName} />
                            </div>
                            <div className="input-container">
                                <label>Registration Number</label>
                                <input className = "input-form-box" onChange = {handleCorpCustInfoChange}
                                       type="text" placeholder="Registration Number" defaultValue={corpCustInfo.registrationNo} />
                            </div>
                            <div className="input-container">
                                <label>Employee ID</label>
                                <input className = "input-form-box" onChange = {handleCorpCustInfoChange}
                                       type="text" placeholder="Employee ID" defaultValue={corpCustInfo.empId} />
                            </div>




                            <button onClick={routeChange}>Finish Registration</button>




                        </div>
                    )

                }

                {message &&
                    (<div className="form-group">
                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>


            {/*<CommonCustomerInfo />*/}


            {/*<UserAddressInfo />*/}


            {/*<button onClick={routeChange}>Finish Registration</button>*/}

        </div>
    );
}

export default Register;