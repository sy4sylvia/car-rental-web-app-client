import CompanyNames from "../selections/CompanyNames";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function PaymentInfo() {

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber:"",
        month: "",
        year:"",
        securityCode:"",
        zipcode:"",
        state:"",
        country:""
    });

    const [coupon, setCoupon] = useState({
            couponId: ""
        }
    );

    const [corporateCustomerInformation, setCorporateCustomerInformation] = useState({
            corporateID: ""
        }
    );

    const handlePaymentInfoChange = (event) => {
        setPaymentInfo((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleCouponChange = (event) => {
        setCoupon((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
    }

    //route change after checking for corporate discount
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/complete';
        navigate(path);
    }

    return (
        <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-bullseye fa-4x"></i>

            <h2>Payment Info</h2>

            <form onSubmit={handleClick} name = "address">
                <div className="input-container">
                    <label>Credit Card Number</label>
                    <input onChange = {handlePaymentInfoChange} type="text"
                           placeholder="Credit Card Number" defaultValue={paymentInfo.cardNumber}
                           validations={[required]} />
                </div>

                {/*use select instead*/}
                <div className="input-container">
                    <label>Expire Month</label>
                    <input onChange = {handlePaymentInfoChange} type="text"
                           placeholder="Expire Month" defaultValue={paymentInfo.month}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Expire Year</label>
                    <input onChange = {handlePaymentInfoChange} type="text"
                           placeholder="Expire Year" defaultValue={paymentInfo.year}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Security Code</label>
                    <input onChange = {handlePaymentInfoChange} type="text"
                           placeholder="Security Code" defaultValue={paymentInfo.securityCode}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Billing Zipcode</label>
                    <input onChange = {handlePaymentInfoChange} type="text"
                           placeholder="Billing Zipcode" defaultValue={paymentInfo.zipcode}
                           validations={[required]} />
                </div>



                <button onClick={routeChange}>Confirm and Submit</button>
            </form>
        </div>


    );
}

export default PaymentInfo;