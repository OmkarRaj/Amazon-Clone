import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/GZK/Launch/3000x1200_Hero-Tall_JPN._CB644089983_.jpg"
        alt="Home BG"
      ></img>

      {/* Product */}
      <div className="home__row">
        <Product
          id={435784}
          title="TP-Link AC1900 WiFi Extender (RE550), Covers Up to 2800 Sq.ft and 35 Devices, 1900Mbps Dual Band Wireless Repeater, Internet Booster, Gigabit Ethernet Port"
          price={64.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51VydDACQKS._AC_SX679_.jpg"
        ></Product>

        <Product
          id={435787}
          title="Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
          price={85.92}
          rating={5}
          image="https://m.media-amazon.com/images/I/71i08qnZeDL._AC_SY450_.jpg"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id={435790}
          title="100% Cotton Bath Towels, Set of 6, Extra-Absorbent-Cotton, Size (27' X 54'),Mixed Random Color Assorted Style, Light Weight, Quick Dry Best for Parties and Guests "
          price={24.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/91qt3aOuxJL._AC_SX679_.jpg"
        ></Product>

        <Product
          id={435793}
          title="Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery, Midnight Blue/Gold, One Size (S & L Bands Included)"
          price={288.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/61FKUFQ7XiS._AC_SX569_.jpg"
        ></Product>

        <Product
          id={435796}
          title="HoMedics Indoor 3-Tier Relaxation Tabletop Fountain, Automatic Pump with Power Switch, Extra Deep Basin with Natural River Rocks and Reflective Lighting Feature, EnviraScape Silver Springs"
          price={22.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71gvpZYgPxS._AC_SL1500_.jpg"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id={435799}
          title="Sceptre Curved 30inch 21:9 Gaming LED Monitor 2560x1080p UltraWide Ultra Slim HDMI DisplayPort Up to 85Hz MPRT 1ms FPS-RTS Build-in Speakers, Machine Black (C305W-2560UN) "
          price={239.50}
          rating={5}
          image="https://m.media-amazon.com/images/I/71hlqZS61bL._AC_SX679_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
