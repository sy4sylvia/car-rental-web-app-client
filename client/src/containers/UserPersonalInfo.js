import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function UserPersonalInfo() {
    const[indCustInfo, setIndCustInfo] = useState({
        firstName: "",
        middleName:"",
        lastName:"",
        driverLicenseNo:"",
        insuranceCompanyName:"", //insurance company name -> ins_com_name
        insurancePolicyNo:"" //insurance policy number -> ins_pol_num
    });

    const handleInformationChange = (event) => {
        setIndCustInfo((prevalue) => {
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
        let path = '/search-cars';
        navigate(path);
    };


    return (
        <div className="container">
            <h1>Personal Info</h1>
            <form onSubmit={handleClick} name = "information">

                <div className="input-container">
                    <label>First Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange}
                           type="text" placeholder="First Name" defaultValue={indCustInfo.firstName} />
                </div>

                <div className="input-container">
                    <label>Middle Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange}
                           type="text" placeholder="Middle Name(optional)" defaultValue={indCustInfo.middleName} />
                </div>

                <div className="input-container">
                    <label>Last Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange}
                           type="text" placeholder="Last Name" defaultValue={indCustInfo.lastName} />
                </div>

                {/*change password - another route*/}

                <div className="input-container">
                    <label>Driver License Number</label>
                    <input className = "input-form-box" onChange = {handleInformationChange}
                           type="text" placeholder="Driver License Number" defaultValue={indCustInfo.driverLicenseNo} />
                </div>

                <div className="input-container">
                    <label>Insurance Company</label>
                    <input className = "input-form-box" onChange = {handleInformationChange}
                           type="text" placeholder="Insurance Company" defaultValue={indCustInfo.insuranceCompanyName} />
                </div>

                <div className="input-container">
                    <label>Insurance Policy Number</label>
                    <input className = "input-form-box" onChange = {handleInformationChange}
                           type="text" placeholder="Insurance Policy Number" defaultValue={indCustInfo.insurancePolicyNo} />
                </div>


                <button onClick={routeChange}>Submit</button>
            </form>

        </div>
    );
}