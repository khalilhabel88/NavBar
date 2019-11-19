import React from "react";
import "./App.css";
import Barre from "./component/navbar";
const menuitems = [
  { title: "home" },
  { title: "service", sousitems: ["for entrepernuer", "for student","for hobbyists"] },
  { title: "contact" }
];
function App() {
  return (
    <div className="App">
      <Barre item={menuitems} />
    </div>
  );
}

export default App;
