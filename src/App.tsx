import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Info from "./pages/Info";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <NavigationBar />

      <div className="px-4 mt-8 xl:px-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
