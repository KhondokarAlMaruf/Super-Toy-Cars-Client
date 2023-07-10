import banner from "../../Images/banner1.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 rounded-lg ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-14 justify-between items-center">
          <div className="">
            <img
              src={banner}
              className="w-full rounded-lg shadow-2xl h-1/2"
              alt="fiveM Heist Cover"
            />
          </div>
          <div className="w-full lg:w-full">
            <h1 className="text-4xl md:text-6xl font-semibold font-teko text-sky-500 leading-relaxed">
              Welcome to <br /> World of <br />
              <span className="text-fuchsia-900">Super Toy Cars</span>
            </h1>
            <p className="font-barlow my-4 md:my-8 w-11/12 text-xl leading-loose">
              Experience the power of play with our super toy cars, fueling
              imagination and excitement.Discover endless adventures on wheels
              with our premium collection of car toys.
            </p>
            <div className="mt-8 font-barlow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
