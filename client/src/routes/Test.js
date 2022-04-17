import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Test() {
    return (
        <div className = "search-results">
            <ImageList sx={{ width: 1000, height: 900 }} cols={3} >
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

    );
}

const itemData = [
    {
        img: 'https://www.byri.net/wp-content/uploads/2021/07/Audi-A1-a-special-Entry-series.jpg',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.dealer.com/ddc/vehicles/2022/Audi/Q5/SUV/trim_45_S_line_Premium_a174ae/color/Florett%20Silver%20Metallic-L5L5-173%2C170%2C170-640-en_US.jpg?impolicy=resize&w=1024',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/980c5437-dbd0-49fb-859d-591474a106a2/f2e59b72-0627-4694-9a87-48d74f5a681a.png",
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: "https://cdn.motor1.com/images/mgl/WmQb1/s3/custom-bronco-builder-announces-6x6-for-customers-seeking-extra-wheels.webp",
        title: 'Coffee',
        author: '@nolanissac',
    },
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
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
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
