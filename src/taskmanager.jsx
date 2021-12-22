import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tasks from "./tasks";

import Navigationbar from "./navbar";



export default function TaskManager() {
  
  return (
    <main>
      <Navigationbar />
      <Tasks></Tasks>
    </main>
  );
}
