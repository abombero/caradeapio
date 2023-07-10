export function IconsNavBar() {
  const icons = [
    { icon: "fa-brands fa-whatsapp", href: "" },
    { icon: "fa-brands fa-instagram", href: "" },
    { icon: "fa-brands fa-facebook", href: "" },
    {
      icon: "fa-brands fa-youtube redes",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  return (
    <>
      {icons.map((i) => (
        <a key={i.icon} href={i.href}>
          <i className={i.icon}></i>
        </a>
      ))}
    </>
  );
}
