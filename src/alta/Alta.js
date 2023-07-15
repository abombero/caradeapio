import imgAlta from "../img/alta_img.jpg";
import bckgClouds from "../img/clouds-bckgnd.jpg";
import SectionTitle from "../section_title/SectionTitle";
import { useEffect } from "react";

export default function Alta({
  collections,
  figureAlta,
  setFigureAlta,
  collectionAlta,
  setCollectionAlta,
  priceAlta,
  setPriceAlta,
  imagenAlta,
  setImagenAlta,
  descrpitionAlta,
  setDescriptionAlta,
  newFigures,
  setNewFigures,
}) {
  // LOCAL STORAGE
  function handleAlta(e) {
    e.preventDefault();

    const newFigure = {
      collection: collectionAlta,
      figure: figureAlta,
      description: descrpitionAlta,
      price: parseInt(priceAlta),
      img: imagenAlta,
    };

    const updatedFigures = [...newFigures, newFigure];
    setNewFigures(updatedFigures);

    localStorage.setItem("figures", JSON.stringify(updatedFigures));

    // Limpiar los valores del formulario
    setFigureAlta("");
    setCollectionAlta("");
    setPriceAlta("");
    setImagenAlta("");
    setDescriptionAlta("");
  }

  return (
    <section
      id="alta"
      className="bckgnd__clouds"
      style={{ backgroundImage: `url("${bckgClouds}")` }}
    >
      <SectionTitle title="ALTA PRODUCTO" />
      <div className="main-contact">
        <form id="frmContacto" method="post" action="" onSubmit={handleAlta}>
          <div>
            <label htmlFor="figure__name">Figura</label>
            <input
              type="text"
              id="figure__name"
              value={figureAlta}
              onChange={(e) => setFigureAlta(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="collection">Coleccion</label>
            <select onChange={(e) => setCollectionAlta(e.target.value)}>
              {collections.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.collection}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={priceAlta}
              onChange={(e) => setPriceAlta(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="img">Imagen</label>
            <input
              type="text"
              name=""
              id="img"
              value={imagenAlta}
              onChange={(e) => setImagenAlta(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description">Descripcion</label>
            <textarea
              name=""
              id="description"
              cols="30"
              rows="8"
              value={descrpitionAlta}
              onChange={(e) => setDescriptionAlta(e.target.value)}
            ></textarea>
          </div>

          <button>ENVIAR</button>
        </form>

        <img
          onClick={() => console.log(localStorage.getItem("figures"))}
          src={imgAlta}
          alt={imgAlta}
        />
      </div>
    </section>
  );
}
