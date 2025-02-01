import React, { useState } from "react";
import "./styles/App.css";
import bg from "./img/bg.png";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
//import Income from "./Components/Income/Income";
//import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Orb />
      <div className="main-layout">
        <Navigation active={active} setActive={setActive} />
        <h1>heyy</h1>
        <main className="inner-layout">{displayData()}</main>
      </div>
    </div>
  );
}

export default App;
