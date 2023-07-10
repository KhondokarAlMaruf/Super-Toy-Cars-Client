import PoliceCar from "./PoliceCar/PoliceCar";
import RacingCar from "./RacingCar/RacingCar";
import RegularCar from "./RegularCar/RegularCar";

const OurGallery = () => {
  return (
    <div>
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        Our Gallery
      </h1>
      <RacingCar></RacingCar>
      <RegularCar></RegularCar>
      <PoliceCar></PoliceCar>
    </div>
  );
};

export default OurGallery;
