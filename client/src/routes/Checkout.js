import React, {useState} from 'react';
//need more on requiring information: PropTypes?
import { useNavigate } from "react-router-dom";
import CompanyNames from "../selections/CompanyNames";

//already logged in, no need to login and use password again.

function Checkout(){
    const [paymentInfo, setPaymentInfo] = useState({
        paymentMethod:"",
        cardNumber:""
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

    // validation of individual coupon
    const handleValidateChange = (event) => {
        setCoupon((prevalue) => {
            alert("coupon applied!");
            console.log("Successfully applied coupon");
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleCorporateInformationChange = (event) => {
        setCorporateCustomerInformation((prevalue) => {
            alert("You have chosen the corporate discount!");
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleValidateCorporateId = (event) => {
        setCorporateCustomerInformation((prevalue) => {
            alert("Corporate discout applied!");
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

                </div>

                <div className="feature-box col-lg-4">
                    <i className="icon fa-solid fa-bullseye fa-4x"></i>
                    <form onSubmit={handleClick}>


                        <h2>Payment Info</h2>

                        <div className="input-container">
                            <label>Payment Method</label>
                            <input onChange = {handlePaymentInfoChange}
                                   type="text" placeholder="Credit Card Number"
                                   defaultValue={paymentInfo.paymentMethod} />
                        </div>
                        <div className="input-container">
                            <label>Credit Card Number</label>
                            <input onChange = {handlePaymentInfoChange}
                                   type="text" placeholder="Credit Card Number"
                                   defaultValue={paymentInfo.cardNumber} />
                        </div>


                        <h3>Have a discount coupon or want to use corporate discount?</h3>
                        <div className="input-container">
                            <label>Individual Discount Coupon: </label>
                            <input onChange = {handleCouponChange} 
                            type="text" placeholder="Individual Coupon Id" defaultValue={coupon.couponId} />
                            <button onClick={handleValidateChange} style={{width: "15%"}}>Apply</button>
                        </div>

                        <h4></h4>
                        <div className="input-container">
                            <label>Corporate: </label>
                            <CompanyNames />
                            <input onChange = {handleCorporateInformationChange} 
                            type="text" placeholder="Corporate Coupon Id" defaultValue={corporateCustomerInformation.corporateID} />
                            {/*<input onChange = {handleCouponChange} type="text" placeholder="Please input the discount coupon here." value={coupon.couponId} />*/}
                            <button onClick={handleValidateCorporateId} style={{width: "15%"}}>Choose</button>
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