import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import CompanyNames from "../selections/CompanyNames";

function SignUpCorpCustomer(){
    const[corpCustInfo, setCorpCustInfo] = useState({
        //corporate name already selected from previous selections
        //registration number not displayed
        emp_id: "", //employee id
    });

    const handleCorpCustInfoChange = (event) => {
        setCorpCustInfo((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    };


    function handleClick(event) {
        //after clicking the submit button -> should be saved to database
        //then direct to car rental page

        //form would automatically refresh the page
        //prevent current page being refreshed after submitting information
        event.preventDefault();
    }

    let navigate = useNavigate();
    const routeChangeCorpRegister = () =>{
        let path = '/test';
        navigate(path);
    }


    return (
        <div className>
            <h3>Belong to a company?
                <br />
                Select your company below 👇🏻👇👇🏾
                <br />
                Register for corporate account with corporate discount only!</h3>
            <div>
                <CompanyNames />
                <SignUpCorpCustomer />

            </div>

            {/*if className = "container" extra space at the top*/}
            <h3>Validate your corporate information</h3>

            <form onSubmit={handleClick} name = "address">
                <div className="input-container">
                    <label>Employee ID</label>
                    <input className = "input-form-box" onChange = {handleCorpCustInfoChange}
                           type="text" placeholder="Employee ID" defaultValue={corpCustInfo.emp_id} />
                </div>

                <button onClick={handleClick}>Submit</button>

                <button onClick={routeChangeCorpRegister}>Continue as a Corporate Customer</button>
            </form>
        </div>
    );
}

export default SignUpCorpCustomer;