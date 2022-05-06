import React, {useState} from 'react';
//need more on requiring information: PropTypes?
import { useNavigate } from "react-router-dom";
import CompanyNames from "../selections/CompanyNames";
import axios from "axios";

//already logged in, no need to login and use password again.

function Checkout(){

    const[paymentMethod, setPaymentMethod] = useState("");
    const[cardNumber, setCardNumber] = useState("");
    const [individualCouponId, setIndividualCouponId] =useState("");
    const [corporateCouponId, setCorporateCouponId] =useState("");

    //route change after checking for corporate discount
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/complete';
        navigate(path);
    }


    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    }
    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    }

    const handleIndividualCouponChange = (event) => {
        setIndividualCouponId(event.target.value);
    }

    // validation of individual coupon
    // const handleValidateChange = (event) => {
    //     setIndividualCouponId((prevalue) => {
    //         alert("coupon applied!");
    //         console.log("Successfully applied coupon");
    //         return {
    //             ...prevalue,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }

    const handleCorporateCouponChange = (event) => {
        setCorporateCouponId((prevalue) => {
            alert("You have chosen the corporate discount!");
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }


    function handleClick(event) {
        event.preventDefault();

        console.log("handled filter search results");

        axios.post("http://127.0.0.1:5000/checkout", {
            payment_method: paymentMethod,
            card_number: cardNumber,
            coupon_id: individualCouponId,
            //coupon_id either individual or binded with corporate
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                //take out and then send corresponding message to review page.
                let path = '/complete';
                navigate(path);
            };
        }).catch(function (error) {
            console.log(error);
        });
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
                            <input onChange = {handlePaymentMethodChange}
                                   type="text" placeholder="Payment Method"
                                   defaultValue={paymentMethod} />
                        </div>
                        <div className="input-container">
                            <label>Card Number</label>
                            <input onChange = {handleCardNumberChange}
                                   type="text" placeholder="Card Number"
                                   defaultValue={cardNumber} />
                        </div>


                        <h3>Have a discount coupon or want to use corporate discount?</h3>
                        <div className="input-container">
                            <label>Individual Discount Coupon: </label>
                            <input onChange = {handleIndividualCouponChange}
                            type="text" placeholder="Individual Coupon Id" defaultValue={individualCouponId} />
                            <button style={{width: "15%"}}>Apply</button>
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