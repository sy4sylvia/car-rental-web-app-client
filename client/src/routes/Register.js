import React, {useState} from 'react';
//need more on requiring information: Prop?
import { useNavigate } from "react-router-dom";
import CompanyNames from "../selections/CompanyNames";
import UserAddressInfo from "../containers/UserAddressInfo";
import CommonCustomerInfo from "../containers/CommonCustomerInfo";
import CorpCustomerInfo from "../containers/CorpCustomerInfo";
import UserPersonalInfo from "../containers/UserPersonalInfo";

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
            <div>
                <p>
                    Already have an account? Log in here.
                    <br /></p>
                <button onClick={routeChange} style={{width: "10%"}}>
                    Log in
                </button>
            </div>

            <CommonCustomerInfo />
            <UserAddressInfo />
            <CorpCustomerInfo />

            {/*<button onClick={routeChange}>Finish Registration</button>*/}

        </div>
    );
}

export default Register;