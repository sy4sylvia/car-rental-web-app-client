import React from 'react';

import {Button} from "react-bootstrap";
import Navigation from "../components/Navigation";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

// this page displays search results by the customers
function Display() {

    const itemData = [
        {
            img: 'https://www.byri.net/wp-content/uploads/2021/07/Audi-A1-a-special-Entry-series.jpg',
            title: "Audi A1",
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.dealer.com/ddc/vehicles/2022/Audi/Q5/SUV/trim_45_S_line_Premium_a174ae/color/Florett%20Silver%20Metallic-L5L5-173%2C170%2C170-640-en_US.jpg?impolicy=resize&w=1024',
            title: 'Audi Q5',
            author: '@helloimnik',
        },
        {
            img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/980c5437-dbd0-49fb-859d-591474a106a2/f2e59b72-0627-4694-9a87-48d74f5a681a.png",
            title: 'BMW M3',
            author: '@bkristastucchio',
        },
        {
            img: "https://cdn.motor1.com/images/mgl/WmQb1/s3/custom-bronco-builder-announces-6x6-for-customers-seeking-extra-wheels.webp",
            title: 'Ford Bronco',
            author: '@nolanissac',
        },

        // to be continued according to database
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
        },
    ];

    return (

        <div>
            <h1>This page should display results according to customers' search</h1>
            <h2>Here are some results!</h2>
            <div className = "search-results">
                <ImageList sx={{ width: 900, height: 800 }} cols={3} >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={
                                    <span>
                                <a href="/home">
                                    <button>Check this one out!</button>
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
