import React, {useState, useRef} from 'react';

function Login(){
    const email = useRef();
    const password = useRef();

    const handleLogin = event => {
        event.preventDefault();

        const data = {
            email: email.current.value,
            password: password.current.value
        };

        //try to log in with the data
    }


    function handleClick(event) {
        event.preventDefault();
    }


    return (
        <div className="container">
            <h1>Log in</h1>
            <p>Welcome back! </p>

            <br/>
            {/* form would refresh the page */}

            <form onSubmit={handleClick} name = "information">


            </form>

        </div>
    );
}

export default Login;