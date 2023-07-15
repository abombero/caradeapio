import { SideBar } from "./SideBar";
import { Cards } from "./Cards";

// MAIN
export function Home({ collections, figures, newFigures, allFigures }) {
  return (
    <div className="main">
      {/* <Home /> */}
      <SideBar collections={collections} />
      <Cards
        collections={collections}
        figures={figures}
        newFigures={newFigures}
        allFigures={allFigures}
      />
    </div>
  );
}
