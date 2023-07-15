import PoliceCar from "./PoliceCar/PoliceCar";
import RacingCar from "./RacingCar/RacingCar";
import RegularCar from "./RegularCar/RegularCar";

const OurGallery = () => {
  return (
    <div className="m-20">
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
        Our Gallery
      </h1>
      <RacingCar></RacingCar>
      <PoliceCar></PoliceCar>
      <RegularCar></RegularCar>
    </div>
  );
};

export default OurGallery;
