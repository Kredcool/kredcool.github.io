import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// component imports
import Header from "./Component/Header";

// page imports
import EtaliStickers from "./pages/Etali";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<div>Welcome to the Home page</div>} />
      <Route path="/Etali_Stickers" element={<EtaliStickers />} />
    </Routes>
  </div>
);

export default App;
