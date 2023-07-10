import bckgClouds from "../img/clouds-bckgnd.jpg";

export default function Alta() {
  return;
  <section
    id="alta"
    className="bckgnd__clouds"
    style={{ backgroundImage: { bckgClouds } }}
  ></section>;
}

function FormInput({ textLabel, inputType }) {
  return;
  <div>
    <label> {textLabel} </label>
    <input type={inputType} id={textLabel}></input>
  </div>;
}
