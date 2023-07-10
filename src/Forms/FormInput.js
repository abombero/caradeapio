export function FormInput({ label, textType, className, pTexto, cambio }) {
  return (
    <div>
      <label>{label}</label>
      <input type={textType} onChange={cambio}></input>
      <p className={className}>{pTexto}</p>
    </div>
  );
}
