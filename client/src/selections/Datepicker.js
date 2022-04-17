import React, {useReducer} from 'react';

import {DateSingleInput} from '@datepicker-react/styled';
import { ThemeProvider } from "styled-components";

const initialState = {
    date: new Date(),
    // date: null,
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
        // <ThemeProvider
        //     theme={{
        //         breakpoints: ["32em", "48em", "64em"],
        //         reactDatepicker: {
        //             daySize: [36, 40],
        //             fontFamily: "system-ui, -apple-system",
        //             colors: {
        //                 accessibility: "#D80249",
        //                 selectedDay: "#f7518b",
        //                 selectedDayHover: "#F75D95",
        //                 primaryColor: "#d8366f"
        //             }
        //         }
        //     }}
        // >
        <div className="date-picker">
            <DateSingleInput
                             onDateChange={data => dispatch({type: "dateChange", payload: data})}
                             onFocusChange={focusedInput => dispatch({type: "focusChange", payload: focusedInput})}
                             date={state.date} // Date or null
                             showDatepicker={state.showDatepicker} // Boolean
            />
        </div>

        // </ThemeProvider>

    );
}
export default Datepicker;
