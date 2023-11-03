import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
  <>
    {/* <Cursor /> */}
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Technologies"><Parallax type="technologies" /></section>
    <section><Services /></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Contacts"><Contact /></section>
  </>
  )
};

export default App;
