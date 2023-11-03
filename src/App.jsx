import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

const App = () => {
  return (
  <>
    {/* <Cursor /> */}
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="About%20Me"><Parallax type="aboutMe" /></section>
    <section><About /></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Contacts"><Contact /></section>
  </>
  )
};

export default App;
