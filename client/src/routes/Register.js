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
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    //common customer info
    const[email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const[phone, setPhone] = useState("");
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const [password, setPassword] = useState("");
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    //address information
    const[street, setStreet] = useState("");
    const handleStreetChange = (event) => {
        setStreet(event.target.value);
    };
    const[apt, setApt] = useState("");
    const handleAptChange = (event) => {
        setApt(event.target.value);
    };
    const[city, setCity] = useState("");
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const[state, setState] = useState("");
    const handleStateChange = (event) => {
        setState(event.target.value);
    };
    const[country, setCountry] = useState("");
    const handleCountryChange = (event) => {
        setApt(event.target.value);
    };
    const[zipcode, setZipcode] = useState("");
    const handleZipcodeChange = (event) => {
        setCity(event.target.value);
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
    const[firstName, setFirstName] = useState("");
    const[middleName, setMiddleName] = useState("");
    const[lastName, setLastName] = useState("");
    const[driverLicenseNo, setDriverLicenseNo] = useState("");
    const[insuranceCompanyName, setInsuranceCompanyName] = useState("");
    const[insurancePolicyNo, setInsurancePolicyNo] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleMiddleNameChange = (event) => {
        setMiddleName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleDriverLicenseNoChange = (event) => {
        setDriverLicenseNo(event.target.value);
    };
    const handleInsuranceCompanyNameChange = (event) => {
        setInsuranceCompanyName(event.target.value);
    };
    const handleInsurancePolicyNoChange = (event) => {
        setInsurancePolicyNo(event.target.value);
    };
    //insurance company name -> ins_com_name
    // insurance policy number -> ins_pol_nu


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

        axios.post("http://127.0.0.1:5000/register",{
            //customer common info
            email: email,
            phone: phone,
            password: password,
            //address
            add_street: street,
            add_unit:apt,
            add_city:city,
            add_state:state,
            add_country:country,
            add_zipcode:zipcode,


            //type: i / c

            cust_type: "I",

            //individual customer info
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            dri_lic_num: driverLicenseNo,
            ins_com_name: insuranceCompanyName,
            ins_pol_num: insurancePolicyNo,

            //corporate customer info
            corp_name: corpCustInfo.corporateName,
            regi_num: corpCustInfo.registrationNo,
            emp_id: corpCustInfo.empId




        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
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
            <h3>Nice to meet you!
                <br/>
                Register and book your ride today!
            </h3>
            <br/>
            <div>
                <p>Already have an account? Log in here.
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
                                <Input className = "input-form-box" onChange = {handleEmailChange}
                                       type="text" placeholder="Email" defaultValue={email}
                                       validations={[required, validEmail]} />
                            </div>

                            <div className="input-container">
                                <label>Mobile Phone</label>
                                <Input className = "input-form-box" onChange = {handlePhoneChange()}
                                       type="text" placeholder="Mobile Phone" defaultValue={phone}
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
                                <input className = "input-form-box" onChange = {handleStreetChange}
                                       type="text" placeholder="Street" defaultValue={street} />
                            </div>

                            <div className="input-container">
                                <label>Apt/Unit</label>
                                <input className = "input-form-box" onChange = {handleAptChange}
                                       type="text" placeholder="Unit(optional)" defaultValue={apt} />
                            </div>

                            <div className="input-container">
                                <label>City</label>
                                <input className = "input-form-box" onChange = {handleCityChange}
                                       type="text" placeholder="City" defaultValue={city} />
                            </div>

                            <div className="input-container">
                                <label>State</label>
                                <input className = "input-form-box" onChange = {handleStateChange}
                                       type="text" placeholder="State" defaultValue={state} />
                            </div>

                            <div className="input-container">
                                <label>Country</label>
                                <input className = "input-form-box" onChange = {handleCountryChange}
                                       type="text" placeholder="Country" defaultValue={country} />
                            </div>

                            <div className="input-container">
                                <label>Zipcode</label>
                                <input className = "input-form-box" onChange = {handleZipcodeChange}
                                       type="text" placeholder="Zipcode" defaultValue={zipcode} />
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
                                <input className = "input-form-box" onChange = {handleFirstNameChange}
                                       type="text" placeholder="First Name" defaultValue={firstName} />
                            </div>

                            <div className="input-container">
                                <label>Middle Name</label>
                                <input className = "input-form-box" onChange = {handleMiddleNameChange}
                                       type="text" placeholder="Middle Name(optional)" defaultValue={middleName} />
                            </div>

                            <div className="input-container">
                                <label>Last Name</label>
                                <input className = "input-form-box" onChange = {handleLastNameChange}
                                       type="text" placeholder="Last Name" defaultValue={lastName} />
                            </div>

                            {/*change password - another route*/}

                            <div className="input-container">
                                <label>Driver License Number</label>
                                <input className = "input-form-box" onChange = {handleDriverLicenseNoChange}
                                       type="text" placeholder="Driver License Number" defaultValue={driverLicenseNo} />
                            </div>

                            <div className="input-container">
                                <label>Insurance Company</label>
                                <input className = "input-form-box" onChange = {handleInsuranceCompanyNameChange}
                                       type="text" placeholder="Insurance Company" defaultValue={insuranceCompanyName} />
                            </div>

                            <div className="input-container">
                                <label>Insurance Policy Number</label>
                                <input className = "input-form-box" onChange = {handleInsurancePolicyNoChange}
                                       type="text" placeholder="Insurance Policy Number" defaultValue={insurancePolicyNo} />
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
                            

                            <button>Finish Registration</button>


                            {/*<button onClick={routeChange}>Finish Registration</button>*/}




                        </div>
                    )

                }

            {/*    {message &&*/}
            {/*        (<div className="form-group">*/}
            {/*                <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">*/}
            {/*                    {message}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    <CheckButton style={{ display: "none" }} ref={checkBtn} />*/}
            </Form>


            {/*<CommonCustomerInfo />*/}


            {/*<UserAddressInfo />*/}


            {/*<button onClick={routeChange}>Finish Registration</button>*/}

        </div>
    );
}

export default Register;