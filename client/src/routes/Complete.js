import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Complete(){
    //route change after checking for corporate discount
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/home';
        navigate(path);
    }

    return (
        <div className="container">
            {/*style="color:blue;"*/}
            <h1>Congratulations!</h1>
            <h3>We have received your car rental request and will get back to you soon.
                <br/>
                You may close current page now.
            </h3>
            <br/>
            <button onClick={routeChange}>Take Me to Home</button>

        </div>
    );
}

export default Complete;