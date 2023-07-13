import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Home } from "./Inicio/Home";
import Header from "./header/Header";
import Contacto from "./contacto/Contacto";
import Alta from "./alta/Alta";
import motuBanner from "./img/motu-banner.jpg";
import tmntBanner from "./img/tmnt-banner.jpg";
import motuLogo from "./img/motu-logo-card.png";
import tmntLogo from "./img/tmnt-logo.png";
import hemanImg from "./img/he-man-front.jpg";
import skeletorImg from "./img/skeletor.jpg";
import bebopImg from "./img/bebop.jpg";

export default function App() {
  const collections = [
    {
      id: "motu",
      collection: "Masters of the Universe",
      get href() {
        return "#" + this.id;
      },
      banner: motuBanner,
      logo: motuLogo,
    },
    {
      id: "tmnt",
      collection: "TMNT",
      get href() {
        return "#" + this.id;
      },
      banner: tmntBanner,
      logo: tmntLogo,
    },
    {
      id: "thundercats",
      collection: "Thundercats",
      get href() {
        return "#" + this.id;
      },
      banner: "",
      logo: "",
    },
  ];

  const figures = [
    {
      collection: "motu",
      figure: "HE-MAN",
      description: "USED",
      price: 40000,
      img: hemanImg,
    },
    {
      collection: "motu",
      figure: "SKELETOR",
      description: "NEW",
      price: 30000,
      img: skeletorImg,
    },
    {
      collection: "tmnt",
      figure: "BE-BOP",
      description: "NEW",
      price: 25000,
      img: bebopImg,
    },
  ];

  const [figureAlta, setFigureAlta] = useState("");
  const [collectionAlta, setCollectionAlta] = useState("");
  const [priceAlta, setPriceAlta] = useState("");
  const [imagenAlta, setImagenAlta] = useState("");
  const [descrpitionAlta, setDescriptionAlta] = useState("");

  const [newFigures, setNewFigures] = useState(figures);

  const [carrito, setCarrito] = useState(0);

  // useEffect(() => {
  //   setNewFigures();
  // }, [newFigures]);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                collections={collections}
                figures={figures}
                newFigures={newFigures}
              />
            }
          />
          <Route path="/contacto" element={<Contacto />} />
          {/* <Route path="/Nosotros" element={<Nosotros />} /> */}
          <Route
            path="/alta"
            element={
              <Alta
                figures={figures}
                collections={collections}
                figureAlta={figureAlta}
                setFigureAlta={setFigureAlta}
                priceAlta={priceAlta}
                setPriceAlta={setPriceAlta}
                imagenAlta={imagenAlta}
                setImagenAlta={setImagenAlta}
                collectionAlta={collectionAlta}
                setCollectionAlta={setCollectionAlta}
                descrpitionAlta={descrpitionAlta}
                setDescriptionAlta={setDescriptionAlta}
                newFigures={newFigures}
                setNewFigures={setNewFigures}
              />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
