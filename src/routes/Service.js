import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".hero-mid"
        heroimg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Service;
