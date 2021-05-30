import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
               className="home__img"
               src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
               alt=""
               />
            <div className="home__products">
            <Product
                id="1"
                title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)"
                price={12499}
                rating={4}
                image="https://m.media-amazon.com/images/I/71dujTTJDZL._AC_UL480_QL65_.jpg"
             />
             <Product
                id="2"
                title="Lenovo IdeaPad Slim 3 N4020 15.6-inch HD Thin and Light Laptop (4GB/256GB SSD/Windows 10/Platinum Grey/1.7Kg)"
                price={59990}
                rating={5}
                image="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_QL65_.jpg"
             />
             </div>
             <div className="home__products">
             <Product
                id="3"
                title="The Complete Novels of Sherlock Holmes"
                price={222}
                rating={4}
                image="https://m.media-amazon.com/images/I/71OlzI76McL._AC_UY327_QL65_.jpg"
             />
             <Product
                id="4"
                title="Mi Smart Band 4 0.94-inch AMOLED Color Display, 20 Days Battery Life, Unlimited Watch Faces, 5ATM Water Resistant, Music Control"
                price={2099}
                rating={4}
                image="https://m.media-amazon.com/images/I/71ZSpNjEl0L._AC_UY327_QL65_.jpg"
             />
             <Product
                id="5"
                title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
                price={4990}
                rating={5}
                image="https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY327_QL65_.jpg"
             />
             </div>
             <div className="home__products">
             <Product
                id="6"
                title="LG 126 cm (50 inches) 4K Ultra HD Smart LED TV 50UM7290PTD (Ceramic BK + Dark Steel Silver)"
                price={43890}
                rating={5}
                image="https://m.media-amazon.com/images/I/71tV-vh33tL._AC_UY327_FMwebp_QL65_.jpg"
             />
             </div>
             
            
        </div>
    )
}

export default Home
