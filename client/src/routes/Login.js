import React, {useState, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { isEmail } from "validator";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function Login(){
    const form = useRef();
    const checkBtn = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        //actually not set...?send data back to database and verify?
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        //actually not set...?send data back to database and verify?
    }

    const handleLogin = event => {
        event.preventDefault();

        setMessage("");
        setLoading(true);
        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(email, password).then(
                () => {
                    navigate("/user-profile");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response && error.response.data && error.response.data.message)
                        || error.message || error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }

    }

    // function handleClick(event) {
    //     // form would refresh the page
    //     event.preventDefault();
    // }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/search-cars';
        navigate(path);
    }

    return (
        <div className="container">
            <h1>Log in</h1>
            <h2>Welcome back! </h2>
            <br/>
            <Form onSubmit={handleLogin} name = "information" ref={form}>
                <div className="input-container">
                    <label>Email</label>
                    <Input onChange = {handleEmailChange} type="text"
                           placeholder="Email" defaultValue={email}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <Input onChange = {handlePasswordChange} type="password"
                           placeholder="Password" defaultValue={password}
                           validations={[required]} />
                </div>

                {/*<button onClick={routeChange}>Log in</button>*/}
                <div className="form-group">
                    <button disabled={loading}>
                        {loading &&
                            (<span className="spinner-border spinner-border-sm"></span>)}
                        <span>Log in</span>
                    </button>
                </div>

                {message &&
                    (<div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>)}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>

        </div>
    );
}

export default Login;