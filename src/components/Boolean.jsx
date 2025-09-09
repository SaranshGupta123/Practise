import React, { useState } from "react";

const BooleanCounter = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
      <button onClick={() => setIsOn(true)}>Set ON</button>
      <button onClick={() => setIsOn(false)}>Set OFF</button>
    </div>
  );
};

export default BooleanCounter;
