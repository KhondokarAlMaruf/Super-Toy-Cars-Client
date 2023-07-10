import car1 from "../../../Images/regular-car/car-1.jpg";
import car2 from "../../../Images/regular-car/car-2.jpg";
import car3 from "../../../Images/regular-car/car-3.jpg";
import car4 from "../../../Images/regular-car/car-4.jpg";
import car5 from "../../../Images/regular-car/car-5.jpg";
import car6 from "../../../Images/regular-car/car-6.jpg";
const RegularCar = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={car1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Regular Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={car2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Regular Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={car3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Regular Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={car4} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Regular Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={car5} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Regular Car</h2>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={car6} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Regular Car</h2>
        </div>
      </div>
    </div>
  );
};

export default RegularCar;
