import React from "react";

class CarTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'standard'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <label>
                Car Type {" "}
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="standard">Standard</option>
                    {/*corresponding to the small car in database*/}
                    {/*Hatchback and station wagon can be considered as standard*/}
                    <option value="midsize">Midsize</option>
                    <option value="SUV">SUV</option>
                    <option value="premium">Premium</option>
                    {/*corresponding to the Premium SUV in database*/}
                    <option value="miniVan">Mini Van</option>
                    <option value="others">Others</option>
                </select>
            </label>

        );
    }
}

export default CarTypes;