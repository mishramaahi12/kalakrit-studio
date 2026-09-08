import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* HOME / HERO */}
      <div id="home">
        <Hero />
      </div>

      {/* WORK */}
      <div id="work">
        <Work />
      </div>

      {/* SERVICES */}
      <div id="services">
        <Services />
      </div>

      {/* ABOUT */}
      <div id="about">
        <About />
      </div>

      {/* FOUNDER */}
      <div id="founder">
        <Founder />
      </div>

      {/* WHY US */}
      <div id="why-us">
        <WhyUs />
      </div>

      {/* PRICING */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* TESTIMONIALS */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* FAQ */}
      <div id="faq">
        <FAQ />
      </div>

      {/* FINAL CTA */}
      <FinalCTA />

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;