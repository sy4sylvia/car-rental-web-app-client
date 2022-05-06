import React, { useState } from 'react';
import Select from 'react-select';
import axios from "axios";
import {Form} from "react-bootstrap";

const options = [
    { value: 'standard', label: 'Standard' },
    { value: 'midsize', label: 'Midsize' },
    { value: 'suv', label: 'SUV' },
    { value: 'premium', label: 'Premium' },
    { value: 'miniVan', label: 'Mini Van' },
    { value: 'others', label: 'Others' },

];

export default function CarTypes() {
    const [carType, setCarTypeOption] = useState(null);

    const handleCarTypeChange = (event) => {

        event.preventDefault();

        console.log("handled car type change -> vehicle class");

        axios.post("/corresponding-backend-url-not-provided", {
            class_name: carType
            // class_name (MySQL) -> carType here
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <Form onSubmit={handleCarTypeChange}>
            <div className="selection-bar">
                <h4> Car Type</h4>
                <Select
                    // onChange = {handleCarTypeChange}
                    onChange={setCarTypeOption}
                    options={options}
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
        </Form>


    );
}