import React, {useState} from 'react';

function Register(){
    // const [firstName, setFirstName] = useState("");
    // const [middleName, setMiddleName] = useState("");
    // const [lastName, setLastName] = useState("");
    //
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [driverLicenseNo, setDriverLicenseNo] = useState("");

    const [information, setInformation] = useState({
        firstName: "",
        middleName:"",
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

    const handleInformationChange = (event) => {
        setInformation((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
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

    }



    // function handleFirstNameChange(event) {
    //     setFirstName(event.target.value);
    // }
    // function handleMiddleNameChange(event) {
    //     setMiddleName(event.target.value);
    // }
    // function handleLastNameChange(event) {
    //     setLastName(event.target.value);
    // }
    // function handleEmailChange(event) {
    //     setEmail(event.target.value);
    // }
    //
    // function handlePhoneChange(event) {
    //     setPhone(event.target.value);
    // }
    //
    // function handleDriverLicenseNoChange(event) {
    //     setDriverLicenseNo(event.target.value);
    // }
    //
    // function handleStreetChange(event) {
    //     setEmail(event.target.value);
    // }
    //
    // function handleAptChange(event) {
    //     setPhone(event.target.value);
    // }
    //
    // function handleCityChange(event) {
    //     setDriverLicenseNo(event.target.value);
    // }
    // function handleZipcodeChange(event) {
    //     setPhone(event.target.value);
    // }
    //
    // function handleCityChange(event) {
    //     setDriverLicenseNo(event.target.value);
    // }


    return (
        <div className="container">
            <h1>Register</h1>
            <p>Nice to meet you! Register and book your ride today!</p>
            {/* form would refresh the page */}
            <form onSubmit={handleClick} name = "information">
                {/*need to add action*/}
                <input onChange = {handleInformationChange} type="text" placeholder="First Name" value={information.firstName} />
                <input onChange = {handleInformationChange} type="text" placeholder="Middle Name(optional)" value={information.middleName} />
                <input onChange = {handleInformationChange} type="text" placeholder="Last Name" value={information.lastName} />

                <input onChange = {handleInformationChange} type="text" placeholder="Email" value={information.email} />
                <input onChange = {handleInformationChange} type="text" placeholder="Mobile Phone" value={information.phone} />
                <input onChange = {handleInformationChange} type="text" placeholder="Driver License Number" value={information.driverLicenseNo} />
                <button onClick={handleClick}>Submit</button>
            </form>

            <h2>Address Book</h2>
            <p>Please edit your address here.</p>
            <form onSubmit={handleClick} name = "address">
                {/*need to add action*/}
                <input onChange = {handleAddressChange} type="text" placeholder="Street" value={address.street} />
                <input onChange = {handleAddressChange} type="text" placeholder="Apt(optional)" value={address.apt} />
                <input onChange = {handleAddressChange} type="text" placeholder="City" value={address.city} />
                <input onChange = {handleAddressChange} type="text" placeholder="Zipcode" value={address.zipcode} />
                <input onChange = {handleAddressChange} type="text" placeholder="State" value={address.state} />
                <input onChange = {handleAddressChange} type="text" placeholder="Country" value={address.country} />

                <button onClick={handleClick}>Submit</button>
            </form>




        </div>
    );
}

export default Register;