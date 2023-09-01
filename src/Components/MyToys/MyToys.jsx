import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToy from "./MyToy";

const MyToys = () => {
  const [cars, setCars] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://super-toy-cars-server.vercel.app/my-toys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        My Toys:{cars.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car, index) => (
          <MyToy key={index} car={car}></MyToy>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
