import React from 'react';

import {Button} from "react-bootstrap";
import Navigation from "../containers/abandoned/Navigation";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";

// this page displays search results by the customers
function Test() {

    var retrievedObject = localStorage.getItem('filteredVehicleInfo');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    const retrievedVehicleInfo = JSON.parse(retrievedObject);

    return (

        <div>
            <h1 style={{textAlign: "center", marginTop: "5%", marginBottom: "5%"}}>
                Here are some results!
                <br/>
            </h1>

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
                        <th>Choose</th>
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
                                    <a href="/checkout">
                                        <button>Check this one out!</button>
                                        {/*when click the button, send corresponding vin to backend*/}
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>



            {/*<div className = "search-results" style={{marginLeft: "10%", marginRight: "10%"}}>*/}
            {/*    <ImageList sx={{ width: 900, height: 800 }} cols={3} >*/}
            {/*        {itemData.map((item) => (*/}
            {/*            <ImageListItem key={item.img} style={{marginLeft: "20%"}}>*/}
            {/*                <img*/}
            {/*                    src={`${item.img}?w=248&fit=crop&auto=format`}*/}
            {/*                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
            {/*                    alt={item.title}*/}
            {/*                    loading="lazy"*/}
            {/*                />*/}
            {/*                <ImageListItemBar*/}
            {/*                    title={item.brand + " " + item.model +" " + item.carType}*/}

            {/*                    subtitle={*/}
            {/*                        <span>*/}
            {/*                        <div>{item.carType}</div>*/}

            {/*                    <a href="/review-pickup">*/}
            {/*                        <button>Check this one out!</button>*/}
            {/*                        /!*when click the button, send corresponding vin to backend*!/*/}
            {/*                    </a>*/}
            {/*                            /!*by: {item.author}*!/*/}
            {/*                    </span>}*/}
            {/*                    position="below"*/}
            {/*                />*/}
            {/*            </ImageListItem>*/}
            {/*        ))}*/}
            {/*    </ImageList>*/}

            {/*</div>*/}

        </div>

    );

}
export default Test;
