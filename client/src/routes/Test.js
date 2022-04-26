import React, {useState} from 'react';
import UserPersonalInfo from "../containers/UserPersonalInfo";
import OrderTables from "../containers/OrderTables";

function Test() {

    //test textarea

    const [state, setState] = useState({
        essay: "Please input the discount coupon here."
        }
    );

    const handleChange = (event) => {
        setState((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        alert('An essay was submitted: ' + state.essay);
        event.preventDefault();
    }


    return (

    <div>
        <OrderTables />

        <form onSubmit={handleSubmit}>
            <label>
                Apply Discount:

                <textarea value={state.essay} onChange={handleChange} />
            </label>
            <div className="input-container">
                <label>First Name</label>
                <input className = "input-form-box" onChange = {handleChange} type="text" placeholder="First Name" value={state.essay} />
            </div>

            <input type="submit" value="Submit" />
        </form>
    </div>

    );
}

export default Test;