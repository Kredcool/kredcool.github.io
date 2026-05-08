import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// component imports
import Header from "./component/Header";

// page imports
import EtaliStickers from "./pages/Etali";
import Wtcd from "./pages/Wtcd";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<div>Welcome to the Home page</div>} />
      <Route path="/Etali_Stickers" element={<EtaliStickers />} />
      <Route path="/wtcd" element={<Wtcd />} />
    </Routes>
  </div>
);

export default App;
