import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Men from "./components/Men";
import Women from "./components/Women";
import Fragrances from "./components/Fragrances";
import Teens from "./components/Teens";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";


function App() {
  return (
    <>
      <header>
        <Navbar title="TAANKA OFFICIAL" comp="Home" />
      </header>

      <main style={{ marginTop: 55 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <footer className="footer mt-5 container" style={{backgroundColor:"rgb(250,250,250)"}}>
        <Footer />
      </footer>
    </>
  );
}
export default App;