import SectionTitle from "../section_title/SectionTitle";
import bckgClouds from "../img/clouds-bckgnd.jpg";

export default function Form({ sectionId }) {
  return;
  <section
    id={sectionId}
    className="bckgnd__clouds"
    style={{ backgroundImage: { bckgClouds } }}
  >
    <SectionTitle />
    <div className="main-contact">
      <form id={frmId} method="post" action="" onSubmit={onSubmit}></form>
    </div>
  </section>;
}
