import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetailsToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  return (
    <div className="m-16">
      <h2>{toy.price}</h2>
    </div>
  );
};

export default ViewDetailsToy;
