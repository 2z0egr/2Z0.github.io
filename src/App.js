import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
