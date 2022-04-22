import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CarTypes from "../selections/CarTypes";
import PickUpLocations from "../selections/PickUpLocations";
import DropOffLocations from "../selections/DropOffLocations";
import Datepicker from "../selections/Datepicker";

function SearchCars() {

    const [carInformation, setCarInformation] = useState({
        carType:"",
        pickUpLocation: "",
        dropOffLocation:"",
        pickUpDate:"",
        dropOffDate:"",
    });

    const handleCarInformation = (event) => {
        setCarInformation((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/display';
        navigate(path);
    }


    return (
        <div className="container">
            <h1>Search Cars</h1>
            {/*<FontAwesomeIcon icon="fa-solid fa-calendar-day" />*/}

            <CarTypes />
            {/*<div className="input-container">*/}
            {/*    <label>Car Type</label>*/}
            {/*    <input onChange = {handleCarInformation} type="text" placeholder="Car Type" value={carInformation.carType} />*/}
            {/*</div>*/}

            <h4>Currently our offices are only located in NYC</h4>
            <PickUpLocations />
            {/*<div className="input-container">*/}
            {/*    <label>Pick-up Location</label>*/}
            {/*    <input onChange = {handleCarInformation} type="text" placeholder="Pick-up Location" value={carInformation.pickUpLocation} />*/}
            {/*</div>*/}
            <h4 />
            <DropOffLocations />
            {/*<div className="input-container">*/}
            {/*    <label>Drop-off Location</label>*/}
            {/*    <input onChange = {handleCarInformation} type="text" placeholder="Drop-off Location" value={carInformation.dropOffLocation} />*/}
            {/*</div>*/}

            <h4 />

            <div className="input-container">
                <label>Pick-up Date</label>
                <Datepicker />
                <label>Drop-off Date</label>
                <Datepicker />
                {/*<input onChange = {handleCarInformation} type="text" placeholder="Pick-up Date" value={carInformation.pickUpDate} />*/}
            </div>
            {/*<div className="input-container">*/}
            {/*    <label>Drop-off Date</label>*/}
            {/*    <input onChange = {handleCarInformation} type="text" placeholder="Drop-off Date" value={carInformation.dropOffDate} />*/}
            {/*</div>*/}
            <h4 />

            <button onClick={routeChange}>Search</button>

        </div>

    );
}

export default SearchCars;
