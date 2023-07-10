export function LinksNavBar() {
  const links = [
    { solapa: "Inicio", href: "index.html" },
    { solapa: "Contacto", href: "contacto.html" },
    { solapa: "Nosotros", href: "nosotros.html" },
    { solapa: "Alta", href: "alta.html" },
  ];

  return (
    <ul>
      {links.map((el) => (
        <a key={el.solapa} href={el.href}>
          <li>{el.solapa}</li>
        </a>
      ))}
    </ul>
  );
}
