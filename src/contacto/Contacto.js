import bckgClouds from "../img/clouds-bckgnd.jpg";
import imgContact from "../img/gorgory-contacto.jpg";
import SectionTitle from "../section_title/SectionTitle";

export default function Contacto() {
  function handleContacto() {}

  return (
    <section
      id="contacto"
      className="bckgnd__clouds"
      style={{ backgroundImage: { bckgClouds } }}
    >
      <SectionTitle title="Contacto" />
      <div className="main-contact">
        <form
          id="frmContacto"
          method="post"
          action=""
          onsubmit="enviarFormulario(event)"
        >
          <ContactInput
            id="nombre"
            label="Nombre"
            textType="text"
            className="nombre display"
            pTexto="Nombre incorrecto"
          />

          <ContactInput
            id="apellido"
            label="Apellido"
            textType="text"
            className="apellido display"
            pTexto="Apellido incorrecto"
          />

          <ContactInput
            id="telefono"
            label="Telefono"
            textType="number"
            className="telefono display"
            pTexto="Numero incorrecto"
          />

          <ContactInput
            id="email"
            label="Email"
            textType="nuemailmber"
            className="email display"
            pTexto="Email incorrecto"
          />

          <ContactInput
            id="comentarios"
            label="Comentarios"
            textType="nuemailmber"
            className="comentarios display"
            pTexto="Max 150 caracteres"
          />

          <button onClick={handleContacto}>ENVIAR</button>
        </form>

        <ContactImg />
      </div>
    </section>
  );
}

function ContactInput({ label, textType, className, pTexto }) {
  return (
    <div>
      <label>{label}</label>
      <input type={textType}></input>
      <p className={className}>{pTexto}</p>
    </div>
  );
}

function ContactImg() {
  return <img src={imgContact} alt={imgContact} />;
}

{
  /* <div>
            <label for="nombre">Nombre</label> <input type="text" id="nombre" />
            <p className="nombre display">Nombre incorrecto</p>
          </div>

          <div>
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" />
            <p className="apellido display">Apellido incorrecto</p>
          </div>

          <div>
            <label for="telefono">Telefono</label>
            <input type="number" id="telefono" />
            <p className="telefono display">Numero incorrecto</p>
          </div>

          <div>
            <label for="email">Email</label>
            <input type="email" name="" id="email" />
            <p className="email display">Email incorrecto</p>
          </div>

          <div>
            <label for="comentarios">Comentarios</label>
            <textarea name="" id="comentarios" cols="30" rows="8"></textarea>
            <p className="comentarios display">Max 150 caracteres</p>
          </div> */
}
