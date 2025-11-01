import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navBar";
import HeroSlider from "./components/hero_slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
       < HeroSlider/>
      </div>
    </>
  );
}

export default App;
