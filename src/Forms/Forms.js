import SectionTitle from "../section_title/SectionTitle";
import bckgClouds from "../img/clouds-bckgnd.jpg";
import { children, useState } from "react";

export default function Forms({
  sectionId,
  frmId,
  children,
  title,
  frmImg,
  btnForm,
}) {
  const [nombre, setNombre] = useState("");

  return (
    <section
      id={sectionId}
      className="bckgnd__clouds"
      style={{ backgroundImage: `url("${bckgClouds}")` }}
    >
      <SectionTitle title={title} />
      <div className="main-contact">
        <form id={frmId} method="post" action="">
          {children}
          <button>{btnForm}</button>
        </form>
        <img src={frmImg} alt={frmImg} />
      </div>
    </section>
  );
}

// const [apellido, setApellido] = useState("");
// const [telefono, setTelefono] = useState("");
// const [email, setEmail] = useState("");
// const [comentarios, setComentarios] = useState("");

// const [figura, setFigura] = useState("");
// const [coleccion, setColeccion] = useState("");
// const [price, setPrice] = useState("");
// const [imagen, setImagen] = useState("");
// const [descripcion, setDescripcion] = useState("");
