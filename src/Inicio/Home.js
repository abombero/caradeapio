import motuBanner from "../img/motu-banner.jpg";
import tmntBanner from "../img/tmnt-banner.jpg";
import motuLogo from "../img/motu-logo-card.png";
import tmntLogo from "../img/tmnt-logo.png";
import { SideBar } from "./SideBar";
import { Cards } from "./Cards";

// MAIN
export function Home() {
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

  return (
    <div className="main">
      {/* <Home /> */}
      <SideBar colec={collections} />
      <Cards colec={collections} />
    </div>
  );
}
