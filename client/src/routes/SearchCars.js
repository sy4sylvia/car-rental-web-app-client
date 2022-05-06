import React, {useState, useReducer} from 'react';

import {Link, useNavigate} from 'react-router-dom';
import Form from "react-validation/build/form";
import axios from "axios";
import Select from "react-select";
import {DateSingleInput} from '@datepicker-react/styled';


//date-picker here doesn't send any data to the backend
//no corresponding queries in the backend as well.
//⭐️⭐️⭐️⭐️⭐

function SearchCars() {
    //selection bar for the car type
    // const options = [
    const carTypeOptions = [
        { value: 'standard', label: 'Standard' },
        { value: 'midsize', label: 'Midsize' },
        { value: 'suv', label: 'SUV' },
        { value: 'premium', label: 'Premium' },
        { value: 'miniVan', label: 'Mini Van' },
        { value: 'others', label: 'Others' },
    ];

    const [carType, setCarTypeOption] = useState(null);

    //pick up office location options selection bar according state
    //FL NY CA
    const officeLocationOptions = [
        { value: 'NY', label: "NY" },
        { value: 'CA', label: "CA" },
        { value: 'FL', label: "FL" },
    ];
    const [officeOption, setOfficeOption] = useState(null); //pick up office location


    // //pick up office location options selection bar
    // const officeLocationOptions = [
    //     { value: 'henry', label: "1 Henry Street" },
    //     { value: 'monroe', label: "490 Monroe Street" },
    //     { value: 'west', label: "23 W 66th Street" },
    //     { value: 'humboldt', label: "45 Humboldt Street" },
    //     { value: 'union', label: "2 Union Street" },
    //     { value: 'others', label: 'Others' },
    // ];
    // const [officeOption, setOfficeOption] = useState(null); //pick up office location

    //date picker
    const initialState = {
        date: new Date(),
        showDatepicker: false,
    }
    function reducer(state, action) {
        switch (action.type) {
            case 'focusChange':
                return {...state, showDatepicker: action.payload}
            case 'dateChange':
                return action.payload
            default:
                throw new Error()
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    // const handleCarInformation = (event) => {
    //     setCarInformation((prevalue) => {
    //         return {
    //             ...prevalue,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }

    const handleSearchCar = (event) => {
        event.preventDefault();
        console.log("handled car information filtered by the user");
        console.log(carType);

        //display: Form submission canceled because the form is not connected
        axios.post("http://127.0.0.1:5000/serach-cars", {
            class_name: carType,
            add_state: officeOption,
            //don't use date any more
            // pickup_date: initialState.date,

        }).then(function (response) {
                console.log(response);



            if (response.status === 200) {
                //get corresponding result

                //[{"make": "Honda", "model": "Accord Hybrid", "over_mileage_fee": "3.00", "rental_rate": "40.00", "year": "Tue, 08 Mar
                // 2022 00:00:00 GMT"}, {"make": "Subaru", "model": "Outback", "over_mileage_fee": "3.00", "rental_rate": "40.00", "year":
                // "Wed, 06 Apr 2022 00:00:00 GMT"}]

                //take out and then send corresponding message to review page.
                let path = '/review';
                navigate(path);
            };

            }).catch(function (error) {
                console.log(error);
            });

    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/display';
        navigate(path);
    }

    //incorporated the car types page

    return (
        <Form onSubmit={handleSearchCar}>
            <div className="container">
                <h1>Search Cars</h1>
                {/*<FontAwesomeIcon icon="fa-solid fa-calendar-day" />*/}
                {/*<CarTypes />*/}
                <div className="selection-bar">
                    <label> Car Type </label>
                    <Select
                        onChange={setCarTypeOption}
                        options={carTypeOptions}
                        defaultValue={carType}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                neutral0: 'floralWhite',
                                primary25: 'silver',
                            },
                        })}
                    />
                </div>

                <div className="selection-bar">
                    <label>Pickup State</label>
                    {/*<PickUpLocations />*/}
                    <Select
                        onChange={setOfficeOption}
                        options={officeLocationOptions}
                        defaultValue={officeOption}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                neutral0: 'floralWhite',
                                primary25: 'silver',
                            },
                        })}
                    />
                </div>


                <div className>
                    <label>Pick-up Date</label>
                    {/*<Datepicker />*/}
                    <div className="date-picker">
                        <DateSingleInput
                            onDateChange={data => dispatch({type: "dateChange", payload: data})}
                            onFocusChange={focusedInput => dispatch({type: "focusChange", payload: focusedInput})}
                            date={state.date} // Date or null
                            showDatepicker={state.showDatepicker} // Boolean
                        />
                    </div>
                    {/*<input onChange = {handleCarInformation} type="text" placeholder="Pick-up Date" value={carInformation.pickUpDate} />*/}
                </div>

                <h4 />

                <button onClick={routeChange}>Search</button>
            </div>
        </Form>


    );
}

export default SearchCars;
