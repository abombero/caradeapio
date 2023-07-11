import imgContact from "../img/gorgory-contacto.jpg";
import Forms from "../Forms/Forms";
import { FormInput } from "../Forms/FormInput";

export default function Contacto({ nombre, setNombre }) {
  return (
    <Forms
      title="Contacto"
      sectionId="contacto"
      frmId="frmContacto"
      frmImg={imgContact}
      btnForm="ENVIAR"
    >
      <FormInput
        id="nombre"
        label="Nombre"
        textType="text"
        className="nombre display"
        pTexto="Nombre incorrecto"
      />

      <FormInput
        id="apellido"
        label="Apellido"
        textType="text"
        className="apellido display"
        pTexto="Apellido incorrecto"
      />

      <FormInput
        id="telefono"
        label="Telefono"
        textType="number"
        className="telefono display"
        pTexto="Numero incorrecto"
      />

      <FormInput
        id="email"
        label="Email"
        textType="nuemailmber"
        className="email display"
        pTexto="Email incorrecto"
      />

      <FormInput
        id="comentarios"
        label="Comentarios"
        textType="nuemailmber"
        className="comentarios display"
        pTexto="Max 150 caracteres"
      />
    </Forms>
  );
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
