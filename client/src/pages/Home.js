import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import HomeCards from "../components/HomeCards";

const Home = () => {
  return (
    <div>
      <p className="home-description">
        Clinically Tested, Ethically Sourced Skincare{" "}
      </p>
      <h1 className="home-company-name">Matcha Matcha Skincare</h1>
      <HomeCarousel />
      <HomeCards />
    </div>
  );
};

export default Home;
