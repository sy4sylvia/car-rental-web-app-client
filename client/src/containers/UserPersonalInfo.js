import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function UserPersonalInfo() {
    const[indCustInfo, setIndCustInfo] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        dri_lic_num: "",
        ins_com_name:"", //insurance company name
        ins_pol_num:"" //insurance policy number
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
            <h1>User Profile</h1>

            <form onSubmit={handleClick} name = "information">

                <div className="input-container">
                    <label>First Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="First Name" defaultValue={indCustInfo.first_name} />
                </div>

                <div className="input-container">
                    <label>Middle Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Middle Name(optional)" defaultValue={indCustInfo.middle_name} />
                </div>

                <div className="input-container">
                    <label>Last Name</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Last Name" defaultValue={indCustInfo.last_name} />
                </div>

                {/*change password - another route*/}

                <div className="input-container">
                    <label>Driver License Number</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Driver License Number" defaultValue={indCustInfo.dri_lic_num} />
                </div>

                <div className="input-container">
                    <label>Insurance Company</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Insurance Company" defaultValue={indCustInfo.ins_com_name} />
                </div>

                <div className="input-container">
                    <label>Insurance Policy Number</label>
                    <input className = "input-form-box" onChange = {handleInformationChange} type="text" placeholder="Insurance Policy Number" defaultValue={indCustInfo.ins_pol_num} />
                </div>


                <button onClick={routeChange}>Submit</button>
            </form>

        </div>
    );
}