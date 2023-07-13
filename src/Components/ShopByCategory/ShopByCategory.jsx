import React, { useState } from "react";
import "../ShopByCategory/ShopByCategory.css";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const ShopByCategory = () => {
  const [activeParentTab, setActiveParentTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const parentCategories = ["Police Car", "Racing Car", "Regular Car"];

  const subCategories = [
    ["Police Car 1", "Police Car 2", "Police Car 3"],
    ["Racing Car 1", "Racing Car 2", "Racing Car 3"],
    ["Regular Car 1", "Regular Car 2", "Reagular Car 3"],
  ];

  const carData = [
    [
      { name: "Car 1", price: "$50,000" },
      { name: "Car 2", price: "$60,000" },
      { name: "Car 3", price: "$70,000" },
    ],
    [
      { name: "Car 4", price: "$80,000" },
      { name: "Car 5", price: "$90,000" },
      { name: "Car 6", price: "$100,000" },
    ],
    [
      { name: "Car 7", price: "$110,000" },
      { name: "Car 8", price: "$120,000" },
      { name: "Car 9", price: "$130,000" },
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
              <div>
                <p>Name: {carData[activeParentTab][activeSubTab].name}</p>
                <p>Price: {carData[activeParentTab][activeSubTab].price}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopByCategory;
