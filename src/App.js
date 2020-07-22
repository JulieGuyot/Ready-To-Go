import React, { useState } from "react";
import "./App.css";
import Choice from "./components/Choice";
import Footer from "./components/Footer";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <>
      <div className="header">
        <i class="fas fa-space-shuttle"></i>
        <span className="title">{"Ready To Go"}</span>
      </div>
      <div className="all">
        <div>
          <Choice state={switch1} choice={setSwitch1} />
          <Choice state={switch2} choice={setSwitch2} />
          <Choice state={switch3} choice={setSwitch3} />
        </div>
        <div>
          {switch1 === false || switch2 === false || switch3 === false ? (
            <div className="red-button">{"No way !"}</div>
          ) : (
            <div className="green-button">{"Go ! "}</div>
          )}
        </div>
      </div>
      <div className="footer">
        {" "}
        <Footer tech="React" lieu="Le Reacteur" name="Julie" />
      </div>
    </>
  );
};

export default App;
