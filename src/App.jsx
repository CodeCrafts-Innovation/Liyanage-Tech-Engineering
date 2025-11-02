import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navBar";
import HeroSlider from "./components/hero_slider";
import PopularCategories from "./components/Popular_categories";
import Product from "./components/product";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
        <HeroSlider />
        <PopularCategories />
        <Product/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
