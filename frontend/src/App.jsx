import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Reviews />
      <Stats />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;