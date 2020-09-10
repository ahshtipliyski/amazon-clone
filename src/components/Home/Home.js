import React from "react";
import "./Home.scss";
import Product from "../Product/Product";
import { v4 as uuidv4 } from "uuid";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_HO_PVD5388._CB406163142_.jpg"
          alt="background"
          className="home__image"
        />
      </div>
      <div className="home__row">
        <Product
          id={uuidv4()}
          title="The lean startup"
          price={35.64}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id={uuidv4()}
          title="Cuisinart SM-48RC Precision Master Petite 4.5 Qt Stand Mixer, Red"
          price={247.58}
          image="https://images-na.ssl-images-amazon.com/images/I/61sVtNJROSL._AC_SX522_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={uuidv4()}
          title="Fitbit Charge 4 fitness and Activity Tracker with Built-In Gps, Heart Rate, Black, One Size"
          price={169.95}
          image="https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SX679_.jpg"
          rating={4}
        />
        <Product
          id={uuidv4()}
          title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
          price={39.99}
          image="https://images-na.ssl-images-amazon.com/images/I/419SVFEiGcL._AC_SY355_.jpg"
          rating={5}
        />
        <Product
          id={uuidv4()}
          title="Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 512GB) - Silver (3rd Generation)"
          price={1799.90}
          image="https://images-na.ssl-images-amazon.com/images/I/71Egx0o9q3L._AC_SY450_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={uuidv4()}
          title="Samsung Home Entertainment LC49G95TSSNXZA 240Hz G-Sync WQHD Curved Super Wide 32:9 Gaming Monitor - 49 inch, Dark Blue Grey"
          price={1999.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SX569_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
