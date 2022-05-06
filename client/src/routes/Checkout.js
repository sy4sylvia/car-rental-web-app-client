import React, {useState} from 'react';
//need more on requiring information: PropTypes?
import { useNavigate } from "react-router-dom";
import CompanyNames from "../selections/CompanyNames";
import axios from "axios";

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

    const [corporateCouponId, setCorporateCouponId] =useState("");


    const handlePaymentInfoChange = (event) => {
        setPaymentInfo((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleIndividualCouponChange = (event) => {
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

    const handleCorporateCouponChange = (event) => {
        setCorporateCouponId((prevalue) => {
            alert("You have chosen the corporate discount!");
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    //validation handled in the backend


    function handleClick(event) {
        event.preventDefault();

        console.log("handled payment information");

        axios.post("http://127.0.0.1:5000/checkout", {
            payment_method: paymentInfo.paymentMethod,
            card_number: paymentInfo.cardNumber,
            coupon_id: coupon.couponId,
            regi_num: corporateCouponId
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
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
                                   type="text" placeholder="Payment Method"
                                   defaultValue={paymentInfo.paymentMethod} />
                        </div>
                        <div className="input-container">
                            <label>Card Number</label>
                            <input onChange = {handlePaymentInfoChange}
                                   type="text" placeholder="Card Number"
                                   defaultValue={paymentInfo.cardNumber} />
                        </div>


                        <h3>Have a discount coupon or want to use corporate discount?</h3>
                        <div className="input-container">
                            <label>Individual Discount Coupon: </label>
                            <input onChange = {handleIndividualCouponChange}
                            type="text" placeholder="Individual Coupon Id" defaultValue={coupon.couponId} />
                            <button onClick={handleValidateChange} style={{width: "15%"}}>Apply</button>
                        </div>

                        <h4></h4>
                        <div className="input-container">
                            <label>Corporate: </label>
                            <CompanyNames />
                            <input onChange = {handleCorporateCouponChange}
                            type="text" placeholder="Corporate Coupon Id" defaultValue={corporateCouponId} />
                            {/*<input onChange = {handleCouponChange} type="text" placeholder="Please input the discount coupon here." value={coupon.couponId} />*/}
                            <button style={{width: "15%"}}>Choose</button>
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