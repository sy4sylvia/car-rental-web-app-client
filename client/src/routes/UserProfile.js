import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function UserProfile(){

    //route change after checking for corporate discount
    let navigate = useNavigate();
    const routeChangeEditInfo = () =>{
        let path = '/user-profile-edit-info';
        navigate(path);
    }

    const routeChangeEditAddressInfo = () =>{
        let path = '/user-profile-edit-address';
        navigate(path);
    }

    const routeChangeViewOrder = () =>{
        let path = '/order-history';
        navigate(path);
    }

    return (
        <div className="container">
           <h4>User profile home page - in progress</h4>
            <div>
                <button onClick={routeChangeEditInfo}>Edit personal info</button>
            </div>
            <br />
            <div>
                <button onClick={routeChangeEditAddressInfo}>Edit billing address info</button>
            </div>
            <br />
            <div>
                <button onClick={routeChangeViewOrder}>View your order history</button>
            </div>

        </div>
    );
}

export default UserProfile;