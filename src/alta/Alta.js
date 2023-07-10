import imgAlta from "../img/alta_img.jpg";
import Forms from "../Forms/Forms";
import { FormInput } from "../Forms/FormInput";

export default function Alta() {
  return (
    <Forms
      title="Alta producto"
      sectionId="alta"
      frmId="frmContacto"
      frmImg={imgAlta}
      btnForm="DAR DE ALTA"
    >
      <FormInput id="figura__nombre" label="Figura" textType="text" />

      <FormInput id="collection" label="Coleccion" textType="text" />

      <FormInput id="price" label="Precio" textType="number" />

      <FormInput id="img" label="Imagen" textType="text" />

      <FormInput id="description" label="Descripcion" textType="text" />
    </Forms>
  );
}
