//essentially -> similar to log in
import React, {useState, useRef} from 'react';
import {useNavigate} from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
function EmployeeLogin(){
    const form = useRef();
    const checkBtn = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");


    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");

    const handleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    function handleEmployeeLogin(event) {
        // form would refresh the page
        event.preventDefault();
        console.log("handled employee login");

        axios.post("http://127.0.0.1:5000/employee-login", {
            employee_id: employeeId,
            password: password
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

        //JWT token -> validation -> uncomment later

        // setMessage("");
        // setLoading(true);
        // form.current.validateAll();
        //
        // if (checkBtn.current.context._errors.length === 0) {
        //     AuthService.login(employeeId, password).then(
        //         () => {
        //             navigate("/records");
        //             window.location.reload();
        //         },
        //         (error) => {
        //             const resMessage =
        //                 (error.response && error.response.data && error.response.data.message)
        //                 || error.message || error.toString();
        //             setLoading(false);
        //             setMessage(resMessage);
        //         }
        //     );
        // } else {
        //     setLoading(false);
        // }
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/employee-profile';
        navigate(path);
    }


    return (
        <div className="container">
            <h1>Log in (Employee)</h1>
            <h3>We're honored to have you has part of our company.</h3>
            <br/>
            <Form onSubmit={handleEmployeeLogin} name = "information">
                <div className="input-container">
                    <label>Employee ID</label>
                    <Input onChange = {handleEmployeeIdChange} type="text"
                           placeholder="Employee Id" defaultValue={employeeId}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <Input onChange = {handlePasswordChange} type="password"
                           placeholder="Password" defaultValue={password}
                           validations={[required]} />
                </div>

                <button onClick={routeChange}>Log in</button>
                {/*<div className="form-group">*/}
                {/*    <button disabled={loading}>*/}
                {/*        {loading && (*/}
                {/*            <span className="spinner-border spinner-border-sm"></span>*/}
                {/*        )}*/}
                {/*        <span>Log in</span>*/}
                {/*    </button>*/}
                {/*</div>*/}
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>

        </div>
    );
}

export default EmployeeLogin;