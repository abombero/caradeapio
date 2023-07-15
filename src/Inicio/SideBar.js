export function SideBar({ collections }) {
  return (
    <div className="side-bar">
      <h3>COLLECTIONS</h3>
      <ul>
        {collections.map((col) => (
          <a key={collections.id} href={collections.href}>
            <li>{collections.collection}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
