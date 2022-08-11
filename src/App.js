import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Navbar title="TAANKA OFFICIAL" comp="Home" />
      </header>

      <main style={{ marginTop: 55 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <footer className="footer mt-5 container" style={{backgroundColor:"rgb(250,250,250)"}}>
        <Footer />
      </footer>
    </>
  );
}

export default App;
