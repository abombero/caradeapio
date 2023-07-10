export function LinksNavBar() {
  const links = [
    { solapa: "Inicio", href: "/" },
    { solapa: "Contacto", href: "/contacto" },
    { solapa: "Nosotros", href: "/nosotros" },
    { solapa: "Alta", href: "/alta" },
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
