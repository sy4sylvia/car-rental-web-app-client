import React, {useState} from 'react';
//need more on requiring information: PropTypes?
import { useNavigate } from "react-router-dom";
import CompanyNames from "../selections/CompanyNames";
import UserAddressInfo from "../containers/UserAddressInfo";
import CommonCustomerInfo from "../containers/CommonCustomerInfo";
import CorpCustomerInfo from "../containers/CorpCustomerInfo";

function Register(){
    const [information, setInformation] = useState({
        firstName: "",
        middleName:"",
        lastName:"",
        email:"",
        phone:"",
        driverLicenseNo:""
    });


    const [password, setPassword] = useState("");

    const handleInformationChange = (event) => {
        setInformation((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        //when would encryption process be handled?
    }


    function handleClick(event) {
        //after clicking the submit button -> should be saved to database
        //then direct to car rental page

        //form would automatically refresh the page
        //prevent current page being refreshed after submitting information
        event.preventDefault();
    }


    let navigate = useNavigate();
    const routeChange = () =>{
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

            <CommonCustomerInfo />
            <UserAddressInfo />
            <CorpCustomerInfo />



            <form onSubmit={handleClick} name = "information">
                <div className="input-container">
                    <label>First Name</label>
                    <input className = "input-form-box"
                           onChange = {handleInformationChange}
                           type="text" placeholder="First Name" defaultValue={information.firstName} />
                </div>

                <div className="input-container">
                    <label>Middle Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Middle Name(optional)" value={information.middleName} />
                </div>

                <div className="input-container">
                    <label>Last Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Last Name" value={information.lastName} />
                </div>


                <div className="input-container">
                    <label>Driver License Number</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Driver License Number" value={information.driverLicenseNo} />
                </div>

                <button onClick={handleClick}>Submit</button>
            </form>

            <button onClick={routeChange}>Finish Registration</button>



        </div>
    );
}

export default Register;