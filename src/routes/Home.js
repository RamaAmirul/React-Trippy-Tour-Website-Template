import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg="\src\assets\heroimg.jpg"
        title="Your Journey ends here"
        text="Pilih destinasi favoritmu"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />

      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
