import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import IndexPage from "./components/page/index";
import AboutPage from "./components/page/About_us";
import ShopPage from "./components/page/Shop";
import ContactPage from "./components/page/Contact_us";
import FaqPage from "./components/page/faq";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
