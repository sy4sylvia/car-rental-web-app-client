import React, {useState} from 'react';

function Login(){
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
        //try to log in with the data
    }

    function handleClick(event) {
        // form would refresh the page
        event.preventDefault();
    }

    return (
        <div className="container">
            <h1>Log in</h1>
            <h3>Welcome back! </h3>
            <br/>
            <form onSubmit={handleClick} name = "information">
                <div className="input-container">
                    <label>Email</label>
                    <input onChange = {handleEmailChange} type="text" placeholder="Email" value={email} />
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <input onChange = {handlePasswordChange} type="text" placeholder="Password" value={password} />
                </div>

                <button onClick={handleClick}>Submit</button>
            </form>

        </div>
    );
}

export default Login;