import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function UserPersonalInfo() {
    const [information, setInformation] = useState({
        cust_email_address:"",
        // email:"",
        cust_phone_number:"",
        // phone:"",
        // driverLicenseNo:""
    });

    const[indCustInfo, setIndCustInfo] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        dri_lic_num: "",
        ins_com_name:"", //insurance company name
        ins_pol_num:"" //insurance policy number
    });

    const handleInformationChange = (event) => {
        setInformation((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    };

    function handleClick(event) {
        event.preventDefault();
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/user-profile';
        navigate(path);
    };


    return (
        <div className="container">
            <h1>User profile: for the customer to edit personal information</h1>

            <form onSubmit={handleClick} name = "information">

                <div className="input-container">
                    <label>First Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="First Name" value={information.firstName} />
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
                    <label>Email</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Email" value={information.email} />
                </div>

                {/*change password - another route*/}

                <div className="input-container">
                    <label>Mobile Phone</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Mobile Phone" value={information.phone} />
                </div>

                <div className="input-container">
                    <label>Driver License Number</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Driver License Number" value={information.driverLicenseNo} />
                </div>

                <button onClick={routeChange}>Submit</button>
            </form>

        </div>
    );
}