import OrderTables from "../../containers/OrderTables";
import React from 'react';
import {useNavigate} from "react-router-dom";

function OrderHistory(){
    let navigate = useNavigate();

    return (
        <div>
            <h1 style={{textAlign:"center", marginTop: "5%"}}> Order History</h1>
            <OrderTables />
            <div style={{textAlign: "center"}}>
                <button
                    onClick={() => {
                        navigate('/user-profile')}}>
                    Go Back</button>
            </div>


        </div>
    );
}
export default OrderHistory;