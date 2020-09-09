import React from "react";
import "./Home.scss";
import Product from "../Product/Product"

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
        <Product />
      </div>
      <div className="home__row">
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>
      <div className="home__row">
        {/* Product */}
      </div>
    </div>
  );
}

export default Home;
