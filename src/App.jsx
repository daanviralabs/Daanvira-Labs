import useReveal from "./hooks/useReveal";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import SocialProof from "./components/SocialProof";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // One IntersectionObserver powers every .reveal animation on the page.
  useReveal();

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <SocialProof />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
