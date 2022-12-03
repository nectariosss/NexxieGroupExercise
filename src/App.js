import React from "react"
import Header from "./Components/Header";
import LowWrapper from "./Components/LowWrapper";
import UpperWrapper from "./Components/UpperWrapper";
import "./Styles/styles.css";

function App() {
  return (
    <div className="grand-wrapper">
      <Header />
      <UpperWrapper />
      <LowWrapper />
    </div>
  );
}

export default App;
