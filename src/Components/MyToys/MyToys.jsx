import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToy from "./MyToy";

const MyToys = () => {
  const [cars, setCars] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <h2>My Toys:{cars.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car, index) => (
          <MyToy key={index} car={car}></MyToy>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
