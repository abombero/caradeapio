import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Home } from "./Inicio/Home";
import Header from "./header/Header";
import Contacto from "./contacto/Contacto";
import Alta from "./alta/Alta";

export default function App() {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* <Route path="/Nosotros" element={<Nosotros />} /> */}
          <Route path="/alta" element={<Alta />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

/* <Router>
  <MainLayout>
    <Routes>
      <Route path="/inicio/Home" element={<Main />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Nosotros" element={<Nosotros />} />
      <Route path="/Alta" element={<Alta />} />
    </Routes>
  </ MainLayout>
</Router>; */
