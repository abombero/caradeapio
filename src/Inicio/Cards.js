import hemanImg from "../img/he-man-front.jpg";
import skeletorImg from "../img/skeletor.jpg";
import bebopImg from "../img/bebop.jpg";
import { Items } from "./Items";

export function Cards({ colec }) {
  // console.log(colec);
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

  figures.map((f) =>
    colec.map((c) => (c.id === f.collection ? (f.logo = c.logo) : ""))
  );

  return (
    <div className="collections">
      {colec.map((col) => (
        <section key={col.collection} id={col.id}>
          <img id="banner" src={col.banner} alt={col.banner} />
          {figures.map((f) =>
            col.id === f.collection ? <Items key={f.figure} fig={f} /> : ""
          )}
        </section>
      ))}
    </div>
  );
}
