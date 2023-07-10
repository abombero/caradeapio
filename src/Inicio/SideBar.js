export function SideBar({ colec }) {
  return (
    <div className="side-bar">
      <h3>COLLECTIONS</h3>
      <ul>
        {colec.map((col) => (
          <a key={col.id} href={col.href}>
            <li>{col.collection}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
