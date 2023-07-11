import { useState } from "react";
import imgAlta from "../img/alta_img.jpg";
import bckgClouds from "../img/clouds-bckgnd.jpg";
import SectionTitle from "../section_title/SectionTitle";

export default function Alta({
  collections,
  figures,
  figureAlta,
  setFigureAlta,
  collectionAlta,
  priceAlta,
  setPriceAlta,
  imagenAlta,
  setImagenAlta,
  descrpitionAlta,
  setDescriptionAlta,
  newFigures,
  setNewFigures,
}) {
  // const [figureAlta, setFigureAlta] = useState("");
  // const [collectionAlta, setCollectionAlta] = useState("");
  // const [priceAlta, setPriceAlta] = useState("");
  // const [imagenAlta, setImagenAlta] = useState("");
  // const [descrpitionAlta, setDescriptionAlta] = useState("");

  // const [newFigures, setNewFigures] = useState(figures);

  console.log(newFigures);

  function handleAlta(e) {
    e.preventDefault();
    setNewFigures([
      ...figures,
      {
        collection: collectionAlta,
        figure: figureAlta,
        description: descrpitionAlta,
        price: priceAlta,
        img: imgAlta,
      },
    ]);
    console.log(newFigures);
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
            <select>
              {collections.map((el) => (
                <option
                  value={(collectionAlta = el.collection)}
                  key={el.collection}
                >
                  {el.collection}
                </option>
              ))}
            </select>
            {/* <input
              type="text"
              id="collection"
              value={collectionAlta}
              onChange={(e) => setCollectionAlta(e.target.value)}
            /> */}
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

        <img src={imgAlta} alt={imgAlta} />
      </div>
    </section>
  );
}
