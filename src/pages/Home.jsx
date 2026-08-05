import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Experience />
      <Education />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
