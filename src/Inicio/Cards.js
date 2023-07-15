import { Items } from "./Items";
import { useState } from "react";

export function Cards({ collections, figures, newFigures, allFigures }) {
  const [searchInput, setSearchInput] = useState("");

  newFigures.map((f) =>
    collections.map((c) => (c.id === f.collection ? (f.logo = c.logo) : ""))
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
      {collections.map((collections) => (
        <section key={collections.collection} id={collections.id}>
          <img id="banner" src={collections.banner} alt={collections.banner} />
          {(JSON.parse(allFigures) ? JSON.parse(allFigures) : newFigures).map(
            (f) =>
              collections.id === f.collection ? (
                <Items key={f.figure} fig={f} />
              ) : (
                ""
              )
          )}
        </section>
      ))}
    </div>
  );
}
