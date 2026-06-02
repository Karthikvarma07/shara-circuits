import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/services";
import FloatingButtons from "./components/FloatingButtons";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <Reviews />
      <WhyChooseUs />
      <FAQ />
      <QuoteForm />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;