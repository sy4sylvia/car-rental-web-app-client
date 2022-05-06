import React, {useState} from 'react';
import AuthService from "../services/auth.service";
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

    const routeChangeEditCorporateInfo = () => {
        navigate('/corp-customer-edit-info');
    }

    const routeChangeViewOrder = () =>{
        let path = '/order-history';
        navigate(path);
    }

    const routeChangeViewCoupon = () =>{
        let path = '/order-history'; //->??
        navigate(path);
    }

    const logOut = () => {
        AuthService.logout();
        navigate('/login');
    }

    return (
        <div className="container">
            <h1> Hello{" "} </h1>
            {/*followed by the customer name retrieved from database*/}
           <h4>User profile home page - in progress</h4>
            <div>
                {/*information only available to individual customers*/}
                <button onClick={routeChangeEditInfo}>My Personal information</button>
            </div>
            <br />


            <div>
                {/*information only available to individual customers*/}
                <button onClick={routeChangeEditCorporateInfo}>Corporate Information</button>
            </div>
            <br />


            <div>
                <button onClick={routeChangeEditAddressInfo}>My address</button>
            </div>
            <br />

            <div>
                <button onClick={routeChangeViewOrder}>My orders</button>
            </div>
            <br />

            <div>
                <button onClick={routeChangeViewCoupon}>My coupons</button>
            </div>
            <br />

            <div>
                <br />
                <button onClick={logOut} style={{width: "20%"}}>Log Out</button>
            </div>

        </div>
    );
}

export default UserProfile;