import React, {useState} from 'react';
//need more on requiring information: PropTypes?
function Register(){
    const [information, setInformation] = useState({
        firstName: "",
        middleName:"",
        lastName:"",
        email:"",
        phone:"",
        driverLicenseNo:""
    });

    const [address, setAddress] = useState({
        street: "",
        apt:"",
        city:"",
        zipcode:"",
        state:"",
        country:""
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
        //when would encrpytion process be handled?
    }

    const handleAddressChange = (event) => {
        setAddress((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleClick(event) {
        //after clicking the submit button -> should be saved to database
        //then direct to car rental page

        //form would automatically refresh the page
        //prevent current page being refreshed after submitting information
        event.preventDefault();
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <p>Nice to meet you! </p>
            <p>Register and book your ride today!</p>
            <br/>

            <form onSubmit={handleClick} name = "information">
                <div className="input-container">
                    <label>First Name</label>
                    <input onChange = {handleInformationChange} type="text" placeholder="First Name" value={information.firstName} />
                </div>

                <div className="input-container">
                    <label>Middle Name</label>
                    <input onChange = {handleInformationChange} type="text" placeholder="Middle Name(optional)" value={information.middleName} />
                </div>

                <div className="input-container">
                    <label>Last Name</label>
                    <input onChange = {handleInformationChange} type="text" placeholder="Last Name" value={information.lastName} />
                </div>

                <div className="input-container">
                    <label>Email</label>
                    <input onChange = {handleInformationChange} type="text" placeholder="Email" value={information.email} />
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <input onChange = {handlePasswordChange} type="text" placeholder="Password" value={password} />
                </div>

                <div className="input-container">
                    <p>Hold on, we still need addtional information...</p>
                </div>

                <div className="input-container">
                    <label>Mobile Phone</label>
                    <input onChange = {handleInformationChange} type="text" placeholder="Mobile Phone" value={information.phone} />
                </div>

                <div className="input-container">
                    <label>Driver License Number</label>
                    <input onChange = {handleInformationChange} type="text" placeholder="Driver License Number" value={information.driverLicenseNo} />
                </div>

                <button onClick={handleClick}>Submit</button>
            </form>

            <h3>Address Book</h3>
            <p>Please edit your address here.</p>
            <form onSubmit={handleClick} name = "address">
                <div className="input-container">
                    <label>Street</label>
                    <input onChange = {handleAddressChange} type="text" placeholder="Street" value={address.street} />
                </div>

                <div className="input-container">
                    <label>Apt/Unit</label>
                    <input onChange = {handleAddressChange} type="text" placeholder="Apt(optional)" value={address.apt} />
                </div>

                <div className="input-container">
                    <label>City</label>
                    <input onChange = {handleAddressChange} type="text" placeholder="City" value={address.city} />
                </div>

                <div className="input-container">
                    <label>State</label>
                    <input onChange = {handleAddressChange} type="text" placeholder="State" value={address.state} />
                </div>

                <div className="input-container">
                    <label>Country</label>
                    <input onChange = {handleAddressChange} type="text" placeholder="Country" value={address.country} />
                </div>

                <div className="input-container">
                    <label>Zipcode</label>
                    <input onChange = {handleAddressChange} type="text" placeholder="Zipcode" value={address.zipcode} />
                </div>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}

export default Register;