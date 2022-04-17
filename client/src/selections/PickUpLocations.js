import React from "react";

class PickUpLocations extends React.Component {
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
                Pick-up Locations {" "}
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="henry">1 Henry Street</option>
                    <option value="monroe">490 Monroe Street</option>
                    <option value="west">23 W 66th Street</option>
                    <option value="humboldt">Humboldt Street</option>
                    <option value="union">Union Street</option>
                    {/*other values not added yet*/}
                    <option value="others">Others</option>
                </select>
            </label>

        );
    }
}

export default PickUpLocations;