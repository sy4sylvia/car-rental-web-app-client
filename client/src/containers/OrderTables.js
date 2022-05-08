import React from 'react';

function OrderTables() {

    const order = [
        { customer_id: 9, pickup_date: "2022-05-07", pickup_office_name: "Unit 033 W 113th Street",
            vin_val:"1HGBH41JXMN109113", start_odometer: 500.00, end_odometer: 7777,
            daily_odometer_limit:500.00}
        //duplicate orders for testing only
    ]

    const restOfOrder = [
        { customer_id: 9, dropoff_date: "2022-05-07", dropoff_office_name: "Unit 490 Monroe Street",
            vin_val:"1HGBH41JXMN109113", end_odometer: 7777}
    ]
    return (

        <div>
            <div className="order-tables">
                <table>
                    <tr>
                        <th style={{width: "20%"}}>Your WOW No.</th>
                        <th style={{width: "20%"}}>Pick Up Date</th>
                        <th style={{width: "30%"}}>Pick Up Office</th>
                        {/*get office name according to id*/}

                        <th>VIN</th>
                        <th>Start Odometer</th>
                        <th style={{width: "15%"}}>Daily Odometer Limit</th>
                    </tr>
                    {order.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td>{value.customer_id}</td>
                                <td>{value.pickup_date}</td>
                                <td>{value.pickup_office_name}</td>
                                <td>{value.vin_val}</td>
                                <td>{value.start_odometer}</td>
                                <td>{value.daily_odometer_limit}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

            <div className="order-tables">
                <table>
                    <tr>
                        <th style={{width: "20%"}}>Your WOW No.</th>
                        <th style={{width: "20%"}}>Drop Off Date</th>
                        <th style={{width: "30%"}}>Drop Off Office</th>
                        {/*get office name according to id*/}

                        <th>VIN</th>
                        <th>End Odometer</th>

                    </tr>
                    {restOfOrder.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td>{value.customer_id}</td>
                                <td>{value.dropoff_date}</td>
                                <td>{value.dropoff_office_name}</td>
                                <td>{value.vin_val}</td>
                                <td>{value.end_odometer}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>


    );
}

export default OrderTables;