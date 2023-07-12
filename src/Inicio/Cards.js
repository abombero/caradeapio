import { Items } from "./Items";
import { useState } from "react";

export function Cards({ colec, figures, newFigures }) {
  const [searchInput, setSearchInput] = useState("");
  console.log(newFigures);
  newFigures.map((f) =>
    colec.map((c) => (c.id === f.collection ? (f.logo = c.logo) : ""))
  );

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="collections">
      <input
        type="text"
        placeholder="Buscar figuras"
        onChange={inputHandler}
        value={searchInput}
      />

      <button>BUSCAR</button>
      {colec.map((col) => (
        <section key={col.collection} id={col.id}>
          <img id="banner" src={col.banner} alt={col.banner} />
          {newFigures.map((f) =>
            col.id === f.collection ? <Items key={f.figure} fig={f} /> : ""
          )}
        </section>
      ))}
    </div>
  );
}
