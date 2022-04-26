import React from 'react';

function OrderTables() {

    const order = [
        { customer_id: 1, pickup_date: "2022-03-27", pickup_office_name: "Unit 490 Monroe Street",
            vin_val:"1HGBH41JXMN109101", start_odometer: 500.00,
            daily_odometer_limit:500.00},
        //already corresponding to mySQL database
        { customer_id: 1, pickup_date: "2022-03-27", pickup_office_name: "Unit 490 Monroe Street",
            vin_val:"1HGBH41JXMN109101", start_odometer: 500.00,
            daily_odometer_limit:500.00},
        { customer_id: 1, pickup_date: "2022-03-27", pickup_office_name: "Unit 490 Monroe Street",
            vin_val:"1HGBH41JXMN109101", start_odometer: 500.00,
            daily_odometer_limit:500.00},
        { customer_id: 1, pickup_date: "2022-03-27", pickup_office_name: "Unit 490 Monroe Street",
            vin_val:"1HGBH41JXMN109101", start_odometer: 500.00,
            daily_odometer_limit:500.00},
        { customer_id: 1, pickup_date: "2022-03-27", pickup_office_name: "Unit 490 Monroe Street",
            vin_val:"1HGBH41JXMN109101", start_odometer: 500.00,
            daily_odometer_limit:500.00},
        //duplicate orders for testing only
    ]


    return (
        <div className="order-tables">
            <table>
                <tr>
                    <th>Customer WOW No.</th>
                    <th>Pick Up Date</th>
                    <th>Pick Up Office</th>
                    {/*get office name according to id*/}

                    <th>VIN</th>
                    <th>Start Odometer</th>
                    <th>Daily Odometer Limit</th>
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
    );
}

export default OrderTables;