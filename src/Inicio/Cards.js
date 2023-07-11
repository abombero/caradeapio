import { Items } from "./Items";

export function Cards({ colec, figures, newFigures }) {
  console.log(newFigures);
  newFigures.map((f) =>
    colec.map((c) => (c.id === f.collection ? (f.logo = c.logo) : ""))
  );

  return (
    <div className="collections">
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
