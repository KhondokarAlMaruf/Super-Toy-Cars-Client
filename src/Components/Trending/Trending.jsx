import React from "react";
import police2 from "../../Images/police-car/police-2.jpg";
import police3 from "../../Images/police-car/police-3.jpg";
import race1 from "../../Images/racing-car/racing-car-6.jpg";

const Trending = () => {
  return (
    <div className="m-20">
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        Our Trending toys
      </h1>
      <div className="mt-10 ms-56">
        <div className="carousel carousel-end rounded-box">
          <div className="carousel-item">
            <img src={police2} alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src={police3} alt="Drink" />
          </div>
          <div className="carousel-item">
            <img src={race1} alt="Drink" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
