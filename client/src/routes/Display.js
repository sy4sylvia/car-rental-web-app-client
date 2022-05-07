import React from 'react';

import {Button} from "react-bootstrap";
import Navigation from "../containers/abandoned/Navigation";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";

// this page displays search results by the customers
function Display() {


    // var retrievedObject = localStorage.getItem('filteredVehicleInfo');
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
    // alert(JSON.parse(retrievedObject));

    const axios = require('axios');
    const url = require("http://127.0.0.1:5000/search-cars");

    async function makeGetRequest() {
        let payload = {
            name: 'John Doe', occupation: 'gardener'
        };
        const params = new url.URLSearchParams(payload);

        let res = await axios.get(`http://httpbin.org/get?${params}`);

        let data = res.data;
        console.log(data);
    }


    makeGetRequest();

    const itemData = [
        {
            img: 'https://www.byri.net/wp-content/uploads/2021/07/Audi-A1-a-special-Entry-series.jpg',
            brand: "Audi",
            model: "A1",
            carType:"SUV",
            vin: "1HGBH41JXMN109102",
            //get from backend ->
            // when chekout, would send back so that would be displayed
            //on the review page
        },
        {
            img: 'https://images.dealer.com/ddc/vehicles/2022/Audi/Q5/SUV/trim_45_S_line_Premium_a174ae/color/Florett%20Silver%20Metallic-L5L5-173%2C170%2C170-640-en_US.jpg?impolicy=resize&w=1024',
            brand: "Audi",
            model: "Q5",
            carType: "Mid-size Car",
            vin:"1HGBH41JXMN10911"
        },
        {
            img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/980c5437-dbd0-49fb-859d-591474a106a2/f2e59b72-0627-4694-9a87-48d74f5a681a.png",
            brand: "BMW",
            model: "M3",
            carType:"Small Car",
            vin: "1HGBH41JXMN109101",
        },
        {
            img: "https://cdn.motor1.com/images/mgl/WmQb1/s3/custom-bronco-builder-announces-6x6-for-customers-seeking-extra-wheels.webp",
            brand: "Ford",
            model: "Bronco",
            carType:"Small Car",
            vin: "1HGBH41JXMN109103",
        },










        // to be continued according to database
        {
            img: 'https://www.byri.net/wp-content/uploads/2021/07/Audi-A1-a-special-Entry-series.jpg',
            brand: "Audi",
            model: "A1",
        },
        {
            img: 'https://images.dealer.com/ddc/vehicles/2022/Audi/Q5/SUV/trim_45_S_line_Premium_a174ae/color/Florett%20Silver%20Metallic-L5L5-173%2C170%2C170-640-en_US.jpg?impolicy=resize&w=1024',
            brand: "Audi",
            model: "Q5",
        },
        {
            img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/980c5437-dbd0-49fb-859d-591474a106a2/f2e59b72-0627-4694-9a87-48d74f5a681a.png",
            brand: "BMW",
            model: "M3"

        },
        {
            img: "https://cdn.motor1.com/images/mgl/WmQb1/s3/custom-bronco-builder-announces-6x6-for-customers-seeking-extra-wheels.webp",
            brand: "Ford",
            model: "Bronco",
        },
        {
            img: 'https://www.byri.net/wp-content/uploads/2021/07/Audi-A1-a-special-Entry-series.jpg',
            brand: "Audi",
            model: "A1",
        },
        {
            img: 'https://images.dealer.com/ddc/vehicles/2022/Audi/Q5/SUV/trim_45_S_line_Premium_a174ae/color/Florett%20Silver%20Metallic-L5L5-173%2C170%2C170-640-en_US.jpg?impolicy=resize&w=1024',
            brand: "Audi",
            model: "Q5",
        },
        {
            img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/980c5437-dbd0-49fb-859d-591474a106a2/f2e59b72-0627-4694-9a87-48d74f5a681a.png",
            brand: "BMW",
            model: "M3"
        },
        {
            img: "https://cdn.motor1.com/images/mgl/WmQb1/s3/custom-bronco-builder-announces-6x6-for-customers-seeking-extra-wheels.webp",
            brand: "Ford",
            model: "Bronco",
        },

    ];

    return (

        <div>
            <h1 style={{textAlign: "center", marginTop: "5%", marginBottom: "5%"}}>
                Here are some results!
                <br/>
            </h1>
            <div className = "search-results" style={{marginLeft: "10%", marginRight: "10%"}}>
                <ImageList sx={{ width: 900, height: 800 }} cols={3} >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} style={{marginLeft: "20%"}}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.brand + " " + item.model +" " + item.carType}

                                subtitle={
                                <span>
                                    <div>{item.carType}</div>

                                <a href="/review-pickup">
                                    <button>Check this one out!</button>
                                    {/*when click the button, send corresponding vin to backend*/}
                                </a>
                                        {/*by: {item.author}*/}
                                </span>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </div>







        </div>
    );
}
export default Display;
