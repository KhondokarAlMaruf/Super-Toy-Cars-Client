import React, { useState } from "react";
import "../ShopByCategory/ShopByCategory.css";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ShopByCategory = () => {
  const [activeParentTab, setActiveParentTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const parentCategories = ["Police Car", "Racing Car", "Regular Car"];

  const subCategories = [
    [
      "Interceptor Squad Car",
      "Guardian Patrol Cruiser",
      "Enforcer Tactical Vehicle",
    ],
    ["Velocity Viper", "Thunderbolt Racer", "Turbo Blaze GT"],
    ["Classic Cruiser", "City Commuter", "Family Traveler"],
  ];

  const carData = [
    [
      {
        name: "Interceptor Squad Car",
        price: "$50",
        rating: "4.5",
        image:
          "https://m.media-amazon.com/images/I/51owZQnueVL._AC_UF894,1000_QL80_.jpg",
      },

      {
        name: "Guardian Patrol Cruiser",
        price: "$60",
        rating: "4.7",
        image:
          "https://m.media-amazon.com/images/I/71TEVvSfBQL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        name: "Enforcer Tactical Vehicle",
        price: "$70",
        rating: "4.6",
        image: "https://m.media-amazon.com/images/I/61lsB80txkL.jpg",
      },
    ],
    [
      {
        name: "Velocity Viper",
        price: "$80",
        rating: "4.8",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81+HM8SSvSL._AC_UL600_SR600,600_.jpg",
      },
      {
        name: "Thunderbolt Racer",
        price: "$90",
        rating: "4.6",
        image:
          "https://rukminim1.flixcart.com/image/850/1000/jiyvvrk0/vehicle-pull-along/6/x/s/heavy-duty-crazy-quick-runner-racing-thunderbolt-friction-original-imaf6kxqa3tmkdzg.jpeg?q=20",
      },
      {
        name: "Turbo Blaze GT",
        price: "$100",
        rating: "4.5",
        image: "https://m.media-amazon.com/images/I/71GIjvv8Y3L.jpg",
      },
    ],
    [
      {
        name: "Classic Cruiser",
        price: "$110",
        rating: "4.5",
        image: "https://m.media-amazon.com/images/I/61mxMkVGubL.jpg",
      },
      {
        name: "City Commuter",
        price: "$120",
        rating: "4.9",
        image:
          "https://cdn.shopify.com/s/files/1/0283/9805/9606/products/mb22freemanintercitycommuter7_530x@2x.jpg?v=1636280821",
      },
      {
        name: "Family Traveler",
        price: "$130",
        rating: "4.8",
        image:
          "https://img.freepik.com/premium-photo/toy-travel-van-with-umbrella-yellow-background-with-plants-shadow-minimalistic-summer-family-travel-concept_150893-3335.jpg?w=2000",
      },
    ],
  ];

  const handleParentTabClick = (index) => {
    setActiveParentTab(index);
    setActiveSubTab(0);
  };

  const handleSubTabClick = (index) => {
    setActiveSubTab(index);
  };

  return (
    <div>
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        Shop By Category
      </h1>
      <div className="container">
        <div className="tab-container">
          {parentCategories.map((parentCategory, index) => (
            <div
              key={index}
              className={`tab ${index === activeParentTab ? "active" : ""}`}
              onClick={() => handleParentTabClick(index)}
            >
              {parentCategory}
            </div>
          ))}

          <div className="tab-content active">
            {subCategories[activeParentTab].map((subCategory, index) => (
              <div
                key={index}
                className={`sub-tab ${index === activeSubTab ? "active" : ""}`}
                onClick={() => handleSubTabClick(index)}
              >
                {subCategory}
              </div>
            ))}

            <div className="car-details">
              {carData[activeParentTab][activeSubTab] && (
                // <div>
                //   <div className="w-80 h-64 border">
                //     <img
                //       src={carData[activeParentTab][activeSubTab].image}
                //       alt={carData[activeParentTab][activeSubTab].name}
                //     />
                //   </div>
                //   <p>Name: {carData[activeParentTab][activeSubTab].name}</p>
                //   <p>Price: {carData[activeParentTab][activeSubTab].price}</p>
                //   <p>Rating: {carData[activeParentTab][activeSubTab].rating}</p>
                //   <button>View Details</button>
                // </div>

                <div>
                  <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={carData[activeParentTab][activeSubTab].image}
                        alt={carData[activeParentTab][activeSubTab].name}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title ">
                        {" "}
                        Name: {carData[activeParentTab][activeSubTab].name}
                      </h2>

                      <h2 className="card-title ">
                        Price: {carData[activeParentTab][activeSubTab].price}
                      </h2>
                      <h2 className="card-title ">
                        Rating: {carData[activeParentTab][activeSubTab].rating}
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-info">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
