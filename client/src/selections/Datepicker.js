import React, {useReducer} from 'react';
import {DateSingleInput} from '@datepicker-react/styled';


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

function Datepicker() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="date-picker">
            <DateSingleInput
                             onDateChange={data => dispatch({type: "dateChange", payload: data})}
                             onFocusChange={focusedInput => dispatch({type: "focusChange", payload: focusedInput})}
                             date={state.date} // Date or null
                             showDatepicker={state.showDatepicker} // Boolean
            />
        </div>
    );
}
export default Datepicker;
