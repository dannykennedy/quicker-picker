import React, { useState } from "react";
import QuickerPicker from "./ColorPicker/QuickerPicker";
import "./App.css";
import Switch from "react-switch";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className="App"
      style={{ backgroundColor: darkMode ? "#12263f" : "white" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          height: 30,
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: 20, color: darkMode ? "#ccc" : "#333" }}>
          Dark mode
        </span>
        <label>
          <Switch onChange={setDarkMode} checked={darkMode} />
        </label>
      </div>
      <div className="select-wrapper">
        <QuickerPicker
          onSetColor={(option) => {
            console.log(option);
          }}
          mode={darkMode ? "dark" : "light"}
        />
      </div>
    </div>
  );
}

export default App;
