import Banner from "../Banner/Banner";
import OurGallery from "../OurGallery/OurGallery";
import ParentsTips from "../ParentsTips/ParentsTips";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShopCategory></ShopCategory>
      <OurGallery></OurGallery>
      <ParentsTips></ParentsTips>
    </div>
  );
};

export default Home;
