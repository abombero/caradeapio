import imgContact from "../img/gorgory-contacto.jpg";
import SectionTitle from "../section_title/SectionTitle";
import bckgClouds from "../img/clouds-bckgnd.jpg";
import { useState } from "react";

export default function Contacto({ title }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [comentarios, setComentarios] = useState("");

  let userEmail = email.split("@");
  let dominioEmail;

  const nombreOk = function (nombre) {
    return /\d/.test(nombre);
  };
  const apellidoOk = function (apellido) {
    return /\d/.test(apellido);
  };

  return (
    <section
      id="contacto"
      className="bckgnd__clouds"
      style={{ backgroundImage: `url("${bckgClouds}")` }}
    >
      <SectionTitle title="CONTACTO" />
      <div className="main-contact">
        <form
          id="frmContacto"
          method="post"
          action=""
          // onSubmit="enviarFormulario(event)"
        >
          <div>
            <label>Nombre</label>{" "}
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <p
              className={`${
                nombre === "" || nombreOk(nombre) === true
                  ? "nombre"
                  : "nombre display"
              }`}
            >
              Nombre incorrecto
            </p>
          </div>

          <div>
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              onChange={(e) => setApellido(e.target.value)}
            />
            <p
              className={`${
                apellido.length < 3 || apellidoOk(apellido) === true
                  ? "nombre"
                  : "nombre display"
              }`}
            >
              Apellido incorrecto
            </p>
          </div>

          <div>
            <label htmlFor="telefono">Telefono</label>
            <input
              type="number"
              id="telefono"
              onChange={(e) => setTelefono(e.target.value)}
            />
            <p
              className={`${
                telefono.length < 10 ? "nombre" : "nombre display"
              }`}
            >
              Numero incorrecto
            </p>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p
              className={`${
                email.indexOf(".") == -1 || userEmail[0].length < 1
                  ? "nombre"
                  : "nombre display"
              }`}
            >
              Email incorrecto
            </p>
          </div>

          <div>
            <label htmlFor="comentarios">Comentarios</label>
            <textarea name="" id="comentarios" cols="30" rows="8"></textarea>
            <p className="comentarios display">Max 150 caracteres</p>
          </div>

          <button>ENVIAR</button>
        </form>

        <img src={imgContact} alt={imgContact} />
      </div>
    </section>
  );
}
