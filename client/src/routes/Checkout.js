import React, {useState} from 'react';
//need more on requiring information: PropTypes?
import { useNavigate } from "react-router-dom";
import CompanyNames from "../selections/CompanyNames";

//already logged in, no need to login and use password again.

function Checkout(){
    const [customerInfo, setCustomerInfo] = useState({
        firstName: "",
        lastName:"",
        email:"",
        phone:"",
        driverLicenseNo:""
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber:"",
        month: "",
        year:"",
        cvc:"",
        zipcode:"",
        state:"",
        country:""
    });

    const [coupon, setCoupon] = useState({
            couponId: ""
        }
    );

    const handleCustomerInformationChange = (event) => {
        setCustomerInfo((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

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

    const handleValidateChange = (event) => {
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
        <div className="container">
            <div className="row" >
                <div className="feature-box col-lg-4">
                    <i className="icon fa-solid fa-circle-check fa-4x"></i>

                    <h2>Customer Info</h2>
                    <form onSubmit={handleClick} name = "information">
                        <div className="input-container">
                            <label className="checkout-label">First Name</label>
                            <input onChange = {handleCustomerInformationChange} type="text" placeholder="First Name" value={customerInfo.firstName} />
                        </div>

                        <div className="input-container">
                            <label>Last Name</label>
                            <input onChange = {handleCustomerInformationChange} type="text" placeholder="Last Name" value={customerInfo.lastName} />
                        </div>

                        <div className="input-container">
                            <label>Email</label>
                            <input onChange = {handleCustomerInformationChange} type="text" placeholder="Email" value={customerInfo.email} />
                        </div>

                        <div className="input-container">
                            <label>Mobile Phone</label>
                            <input onChange = {handleCustomerInformationChange} type="text" placeholder="Mobile Phone" value={customerInfo.phone} />
                        </div>
                    </form>

                </div>

                <div className="feature-box col-lg-4">
                    <i className="icon fa-solid fa-bullseye fa-4x"></i>

                    <h2>Payment Info</h2>

                    <form onSubmit={handleClick} name = "address">
                        <div className="input-container">
                            <label>Credit Card Number</label>
                            <input onChange = {handlePaymentInfoChange} type="text" placeholder="Credit Card Number" value={paymentInfo.cardNumber} />
                        </div>

                        {/*use select instead*/}
                        <div className="input-container">
                            <label>Expire Month</label>
                            <input onChange = {handlePaymentInfoChange} type="text" placeholder="Expire Month" value={paymentInfo.month} />
                        </div>

                        <div className="input-container">
                            <label>Expire Year</label>
                            <input onChange = {handlePaymentInfoChange} type="text" placeholder="Expire Year" value={paymentInfo.year} />
                        </div>

                        <div className="input-container">
                            <label>CVV/CVC</label>
                            <input onChange = {handlePaymentInfoChange} type="text" placeholder="CVV/CVC" value={paymentInfo.cvc} />
                        </div>

                        <div className="input-container">
                            <label>Billing Zipcode</label>
                            <input onChange = {handlePaymentInfoChange} type="text" placeholder="Billing Zipcode" value={paymentInfo.zipcode} />
                        </div>





                        <h4>Have a discount coupon?</h4>
                        <div className="input-container">
                            <label>Discount Coupon: </label>
                            <input onChange = {handleCouponChange} type="text" placeholder="Please input the discount coupon here." value={coupon.couponId} />
                            <button onClick={handleValidateChange}>Apply</button>
                        </div>

                        <br/>
                        <br/>
                        <br/>

                        <button onClick={routeChange}>Confirm and Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Checkout;