import React, { useState } from 'react';
import Select from 'react-select';

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

    return (
        <div className="selection-bar">
            <h4> Car Type</h4>
            <Select
                defaultValue={carType}
                onChange={setCarTypeOption}
                options={options}
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
    );
}

//
// class CarTypes extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'standard'};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Your favorite flavor is: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <label>
//                 Car Type {" "}
//                 <select value={this.state.value} onChange={this.handleChange}>
//                     <option value="standard">Standard</option>
//                     {/*corresponding to the small car in database*/}
//                     {/*Hatchback and station wagon can be considered as standard*/}
//                     <option value="midsize">Midsize</option>
//                     <option value="SUV">SUV</option>
//                     <option value="premium">Premium</option>
//                     {/*corresponding to the Premium SUV in database*/}
//                     <option value="miniVan">Mini Van</option>
//                     <option value="others">Others</option>
//                 </select>
//             </label>
//
//         );
//     }
// }
//
// export default CarTypes;