import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigationbar from "./navbar";

function App() {
  return (
    <main>
      <Navigationbar />

      <h1 className=" display-6 mt-5 text-center">
        Welcome to TaskItAll
      </h1>
      
    </main>
  );
}

export default App;
