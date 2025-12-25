import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

/*
  App.jsx is the "main page layout".
  Think of it like a big container that arranges your website sections in order.
*/

export default function App() {
  return (
    <div className="app">
      <Header />

      {/* The <main> tag holds the main content of the page */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}


