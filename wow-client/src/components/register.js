import React, {useState} from 'react';

function Register(){
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [driverLicenseNo, setdriverLicenseNo] = useState("");

    function handleClick(event) {

    }

    function handleChange(event) {

    }

    return (
        <div className="container">
            <h1>Register</h1>
            <p>Nice to meet you! Register and book your ride today!</p>
            {/* form would refresh the page */}
            <form onSubmit={handleClick} name = "information">
                {/*need to add action*/}
                <input onChange = {handleChange} type="text" placeholder="First Name" value={firstName} />
                <input onChange = {handleChange} type="text" placeholder="Middle Name(optional)" value={middleName} />
                <input onChange = {handleChange} type="text" placeholder="Last Name" value={lastName} />

                <input onChange = {handleChange} type="text" placeholder="Email" value={email} />
                <input onChange = {handleChange} type="text" placeholder="Mobile Phone" value={phone} />
                <input onChange = {handleChange} type="text" placeholder="Driver License Number" value={driverLicenseNo} />
                <button onClick={handleClick}>Submit</button>
            </form>

            <h2>Address Book</h2>
            <p>Please edit your address here.</p>
            <form onSubmit={handleClick} name = "address">
                {/*need to add action*/}
                <input onChange = {handleChange} type="text" placeholder="Street" value={email} />
                <input onChange = {handleChange} type="text" placeholder="Apt(optional)" value={phone} />
                <input onChange = {handleChange} type="text" placeholder="City" value={lastName} />
                <input onChange = {handleChange} type="text" placeholder="Zipcode" value={email} />
                <input onChange = {handleChange} type="text" placeholder="State" value={phone} />
                <input onChange = {handleChange} type="text" placeholder="Country" value={lastName} />

                <button onClick={handleClick}>Submit</button>
            </form>




        </div>
    );
}

export default Register;