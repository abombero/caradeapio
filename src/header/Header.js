import banned1 from "../img/banned-1.png";
import banned2 from "../img/banned-2.png";
import banned3 from "../img/banned-3.png";
import { LinksNavBar } from "./LinksNavBar";
import { IconsNavBar } from "./IconsNavBar";
import { Carrito } from "./Carrito";

// HEADER
export default function Header() {
  return (
    <header>
      <h1>LA MAZMORRA DEL ANDROIDE</h1>
      <nav>
        <LinksNavBar />
        <img src={banned1} alt="banned-1" />
        <img src={banned2} alt="banned-2" />
        <img src={banned3} alt="banned-3" />
        <div className="icons">
          <IconsNavBar />
          <Carrito />
        </div>
      </nav>
    </header>
  );
}
