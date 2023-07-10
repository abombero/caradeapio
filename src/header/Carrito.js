import { useState } from "react";

export function Carrito() {
  const [qtyCart, setQtyCart] = useState(0);

  return (
    <>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className="cantidad-carrito">{qtyCart}</span>
    </>
  );
}
