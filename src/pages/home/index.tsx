import Banner from "../../components/banner/Banner";
import OurPackages from "../../components/packages/OurPackages";
import PopularRoutes from "../../components/routes/PopularRoutes";
import WhyChooseUs from "../../components/why-choose-us/WhyChooseUs";
import DayTrips from "../../components/day-trips/DayTrips";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full m-0 p-0">
      <Banner />
      <OurPackages />
      <PopularRoutes />
      <WhyChooseUs />
      <DayTrips />
      <Footer />
    </div>
  );
};

export default HomePage;