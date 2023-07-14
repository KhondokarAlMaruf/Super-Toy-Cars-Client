import { useEffect, useState } from "react";
import AllToy from "./AllToy";

const AllToys = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  console.log(cars);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cars.map((car, i) => (
        <AllToy key={i} car={car}></AllToy>
      ))}
    </div>
  );
};

export default AllToys;
