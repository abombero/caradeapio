import { SideBar } from "./SideBar";
import { Cards } from "./Cards";

// MAIN
export function Home({ collections, figures, newFigures }) {
  return (
    <div className="main">
      {/* <Home /> */}
      <SideBar colec={collections} />
      <Cards colec={collections} figures={figures} newFigures={newFigures} />
    </div>
  );
}
