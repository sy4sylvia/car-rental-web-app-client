import React from 'react';

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import {useNavigate} from "react-router-dom";

// this page displays search results by the customers
function Display() {

    var retrievedObject = localStorage.getItem('filteredVehicleInfo');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    const retrievedVehicleInfo = JSON.parse(retrievedObject);

    const itemData = [
        {
            img: 'https://www.autoparkhonda.com/assets/stock/colormatched_01/transparent/640/cc_2022hoc09_01_640/cc_2022hoc090068_01_640_wx.png?height=400',
            brand: "Honda",
            model: "Accord Hybrid",
        },
        {
            img: "https://images.dealer.com/ddc/vehicles/2022/Subaru/Outback/SUV/trim_Limited_fe9741/color/Crystal%20White%20Pearl-WHC-239%2C239%2C232-640-en_US.jpg?impolicy=resize&w=640",
            brand: "Subaru",
            model: "Outback",
        },
        {
            img: "https://manofmany.com/wp-content/uploads/2022/04/Omaze-Tesla-1200x900.jpg",
            brand: "Tesla",
            model: "Model X",
        },
        {
            img: 'https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy/v1/svp/dep/21hondaaccordhyexlsd10t/honda_21accordhyexlsd10t_angularfront_modernsteelmetallic',
            brand: "Honda",
            model: "Accord Hybrid",
        },
        {
            img: "https://www.subaru.com/content/dam/subaru/vehicles/2022/OBK/byo/NDL/byo/360/mobile/exterior/SAL-side.png",
            brand: "Subaru",
            model: "Outback",
        },

        {
            img: "https://cdn.motor1.com/images/mgl/jzgzl/s3/2021-tesla-model-x.webp",
            brand: "Tesla",
            model: "Model X",
        },

        {
            img: 'http://cdn.carbuzz.com/car-thumbnails/original/3000/300/3377.jpg',
            brand: "Honda",
            model: "Accord Hybrid",
        },
        {
            img: "https://www.autotrader.com/wp-content/uploads/2020/08/2021-subaru-outback-front-right-side.jpg?w=1024",
            brand: "Subaru",
            model: "Outback",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1OxQPT2tV-BB5Yv49dfMnQFWEphMFX1TUJA&usqp=CAU",
            brand: "Tesla",
            model: "Model X",
        },
    ];

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/checkout';
        navigate(path);
    }

    return (

        <div>
            <h1 style={{textAlign: "center", marginTop: "5%"}}>
                Here are some results!
                <br/>
            </h1>

            <h3 style={{textAlign: "center", marginBottom: "5%"}}>
                Please be sure to copy the VIN for the next step.
                <br/>
            </h3>

            <div className="order-tables">
                <table>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>VIN</th>
                        {/*get office name according to id*/}

                        <th>Pick Up Address</th>
                        <th>Over Mileage Fee</th>
                        <th>Rental Rate</th>

                    </tr>

                    {retrievedVehicleInfo.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td>{value.make}</td>
                                <td>{value.model}</td>
                                <td>{value.vin}</td>
                                <td>{value.pickup_address}</td>
                                <td>{value.over_mileage_fee}</td>
                                <td>{value.rental_rate}</td>
                                <td>

                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>

            <div className = "search-results">
                <ImageList sx={{ width: 900, height: 600 }} cols={3}
                           style={{marginLeft: "18%", marginRight: "8%"}}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} style={{marginLeft: "20%"}}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.brand + " " + item.model}
                                subtitle={<div>SUV</div>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </div>

            <div style={{textAlign: "center"}}>
                <button onClick={routeChange} style={{marginTop:"3%", width: "15%"}}>
                    Check Out
                </button>

            </div>
        </div>

    );

}
export default Display;
