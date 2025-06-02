
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <Portfolio />
      </main>
    </>
  );
}
