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

    const carTypeOptions = [
        { value: 'Small Car', label: 'Small Car' },
        { value: 'Mid-size Car', label: 'Midsize Car' },
        { value: 'SUV', label: 'SUV' },
        { value: 'Premium SUV', label: 'Premium SUV' },
        { value: 'Luxury Car', label: 'Luxury Car' },
        { value: 'Station Wagon', label: 'Station Wagon' },
        { value: 'miniVan', label: 'Mini Van' },
        { value: 'others', label: 'Others' },
    ];

    const [carType, setCarTypeOption] = useState("");

    //pick up office location options selection bar according state
    //FL NY CA
    const officeLocationOptions = [
        { value: 'NY', label: "NY" },
        { value: 'CA', label: "CA" },
        { value: 'FL', label: "FL" },
    ];
    const [officeOption, setOfficeOption] = useState(""); //pick up office location


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


    const handleSearchCar = (event) => {
        event.preventDefault();
        console.log("handled car information filtered by the user");
        console.log(carType.value);

        //display: Form submission canceled because the form is not connected
        axios.post("http://127.0.0.1:5000/search-cars", {
            class_name: carType.value,
            add_state: officeOption.value,
            // pickup_date: initialState.date,

        }).then(function (response) {
                console.log(response);


            if (response.status === 200) {
                //get corresponding result

                var filteredVehicleInfo = response.data;
                if (filteredVehicleInfo.length === 0) {
                    alert("Sorry, we have no cars available that meet your requirement.");
                    navigate('/search-cars');
                } else {
                    alert("Ready for some results?");
                    // Put the object into storage
                    localStorage.setItem('filteredVehicleInfo', JSON.stringify(filteredVehicleInfo));
                    console.log(JSON.stringify(filteredVehicleInfo));

                    //take out and then send corresponding message to review page.
                    navigate('/display');
                }

                console.log(response.data);

                console.log(response.data.length);

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
                        defaultValue={carType.value}
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
                        defaultValue={officeOption.value}
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

                <button >Search</button>
            </div>
        </Form>


    );
}

export default SearchCars;
