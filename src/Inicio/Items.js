export function Items({ fig, newFigures }) {
  return (
    <>
      <div className="card">
        <div className="card__body">
          <div className="product">
            <div className="card__image">
              <img src={fig.img} alt={fig.img} />
            </div>
            <div className="card__content">
              <h1 className="card__title">{fig.figure}</h1>
              <p className="card__description">{fig.description}</p>
              <p className="card__price">$ {fig.price}</p>
              <button
                onClick={() => console.log(newFigures)}
                className="comprar"
              >
                AGREGAR A CARRO
              </button>
              <button className="eliminar display">ELIMINAR DE CARRO</button>
            </div>
          </div>
          <div className="card__collection">
            <img src={fig.logo} alt="" />
          </div>
        </div>
      </div>
      )
    </>
  );
}
