import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function UserProfile(){
    //route change after checking for corporate discount
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/home';
        navigate(path);
    }

    return (
        <div className="container">
           <h4>User profile home page - in progress</h4>
        </div>
    );
}

export default Complete;